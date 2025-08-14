import {Platform, Protocol, all_platforms, NONE, Point} from '../../../enum/i.js';


export default {
    name: "Local",

    description: "Chat for storage with youself",

    protocol: NONE,
    
    platform: all_platforms,
    
    search: Point.CLIENT,

    type: [
        "Personal Knowledge Management",
        "Note-taking",
        "Knowledge management",
        "Outliner",
        "Markdown editor",
    ],

    keywords: [
        "Personal chat",
        "Self chat",
        "Self messaging",
        'Private notes',
        'Chat with yourself',
        'Camera chat',
        'Video call test',
        'Call testing app',
        'Offline chat',
        'Local chat',
        'Media storage chat',
        'Secure self chat',
        'Test calls',
        'Video messaging',
        'Voice call test',
    ],

    competitors: [
        "obsidian",

        "roam_research",
        'logseq',
        'joplin',
        'zettlr',
        'typora',
        'tiddly_wiki',

        'notion',
        
        'coda',
        'airtable',
        'click_up',
        'confluence',
        'evernote',
        'slite',
        'dropbox_paper',
    ],
};
