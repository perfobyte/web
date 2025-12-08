import {fs_state} from '../state/i.js';
import {response, payload, file_config, small_response} from '../conf/i.js';
import {
    buffer_transfer,

    action_read,
    action_write,

    file_then,
    access_then,
    after_access_then,
} from '../f/i.js';

export default (
    (event) => {
        var
            self = event.currentTarget,
            
            data = event.data,

            operation_type = data.type,
            operation_id = data.id,

            access = fs_state.access
        ;
        return (
            (operation_type === 0)
            ? (
                (response[0] = operation_id),
                (response[1] = buffer_transfer(
                    new Uint8Array(data.buffer),
                    data.buffer_offset,
                    data.buffer_end,
                    data.file_offset,
                    action_read,
                    access,
                    payload,
                )),
                self.postMessage(response)
            )
            :
            (operation_type === 1)
            ? (
                (response[0] = operation_id),
                (response[1] = buffer_transfer(
                    new Uint8Array(data.buffer),
                    data.buffer_offset,
                    data.buffer_end,
                    data.file_offset,
                    action_write,
                    access,
                    payload,
                )),
                access.flush(),
                self.postMessage(response)
            )
            :
            (operation_type === 2)
            ? (
                (response[0] = operation_id),
                (response[1] = buffer_transfer(
                    new Uint8Array(data.buffer),
                    data.buffer_offset,
                    data.buffer_end,
                    data.file_offset,
                    action_write,
                    access,
                    payload,
                )),
                self.postMessage(response)
            )
            :
            (operation_type === 3)
            ? (
                (small_response[0] = operation_id),
                (fs_state.block_size = data.block_size),
                (file_config.create = data.file_create),

                fs_state
                .root
                .getFileHandle(data.file_name, file_config)
                .then(file_then)
                .then(access_then)
                .then(after_access_then)
            )
            : (
                (small_response[0] = operation_id),
                access.flush(),
                access.close(),

                (
                    fs_state.file =
                    fs_state.access =
                        null
                ),
                self.postMessage(small_response)
            )
        );
    }
);
