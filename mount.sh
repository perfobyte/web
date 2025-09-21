
# sudo cryptsetup luksFormat /dev/sdb
sudo cryptsetup open /dev/sdb _
# sudo mkfs.ext4 /dev/mapper/usb_crypt

sudo mkdir -p /media/_
sudo mount /dev/mapper/_ /media/_


cd /media/usb

# git init --bare space.git

cd ~/gt/space
# git remote add usb /media/usb/space.git
git config --global --add safe.directory /media/usb/space.git

git push usb master

sudo chown -R dencelman space.git


# check:

git branch -v
git --git-dir=/media/usb/space.git branch -v

git rev-parse master
git --git-dir=/media/usb/space.git rev-parse master

git fsck --full
git --git-dir=/media/usb/space.git fsck --full


# push

lsblk
cd /run/media/dencelman/23054a74-912b-4801-9347-ddde27ef7528
cd ~/gt/space

git remote remove usb
git remote add usb /media/usb/space.git
git remote set-url usb /media/usb/space.git

# git remote set-url origin git@github.com:perfobyte/cha3js.git
# git add . && git commit -m "a" && git push -u origin main

git add . && git commit -m "a"
git push usb master

# exit:
sudo umount /media/usb
sudo cryptsetup luksClose usb_crypt
udisksctl power-off -b /dev/sdb
