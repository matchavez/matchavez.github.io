Reclaim the full storage capacity of an SD card on macOS

Earlier this year, I had been flashing the HomeBridge image on an SD card to use it together with a Raspberry Pi. While it was a great learning experience, I now wanted to try Home Assistant to control my smart home. As such, I wanted to repurpose the Raspberry: remove HomeBridge from the SD card and add Home Assistant instead. Unfortunately, when I plugged in the SD card into my Macbook, I noticed there was only a small number of Megabytes as total storage. This seemed strange to me as the total capacity was 128GB! Luckily in the end I found how to restore an SD card to its full capacity. And this method should work perfectly fine for SSD disks as well.

Why is my SD card not showing its full capacity?

Upon flashing an operating system / image to an SD card, the SD card is divided into two partitions.

Partition 1: this is the boot partition and in my case it was about 60MB in size. This is what I was seeing and worried me, because it is a lot smaller than the original 128 Gigabyte total storage it had when I bought it.
Partition 2: this is a hidden partition and is not shown when opening the Disk Utility on macOS. This is the partition you want to reclaim.
If you tried to format the SD card yourself already, it will only format the first partition (because it is the only one it can ‘see’). You. may think your SD card is corrupt or malfunctioning.

Solution: How to reclaim SD card full storage capacity

The Disk Utility is a great tool for simple tasks related to disk management (such as checking the health of an external hard drive disk and potentially repairing any issues). Yet, it also has its limitations because it cannot always recognise hidden partitions on a flash drive such in our case the SD card (this can be any type of SD card: SD, SDHC, SDXC and SDUC, and microSD, microSDHC, microSDXC and microSDUC). This solution should work for any type of file system (exFat, FAT32, NTFS, …) by the way.

We will use Terminal to get back the missing storage space on your SD. It is a powerful tool to execute commands: in this case we will be using the diskutil command.

Note: the following instructions below will effectively format your sd card. This means all data will be erased, so only do this when you are sure the data is no longer meaningful to you.

STEP 1: First, connect your SD card. Make sure your SD card is properly connected to your Mac computer.
STEP 2: Open Terminal. You can find it in the Utilities folder, or use via Spotlight search.
STEP 3: Now let’s find your SD card. Execute the ‘diskutil’ command. Paste the following text in Terminal and press ENTER
diskutil list
This command will list all your internal and external storage devices. Typically you will notice that your SD card shows up as /dev/disk2. And in our case, it is clear from the output there are multiple partitions present.

/dev/disk2 (external, physical):
   #:                       TYPE NAME                    SIZE       IDENTIFIER
   0:     FDisk_partition_scheme                        *128.0 GB     disk2
   1:                 DOS_FAT_32 DRIVE                   58.7 MB    disk2s1
   2:                      Linux                         128.0 GB     disk2s2
We will now go to the 4th step, assuming that your device is also listed as ‘disk2‘ in the diskutil overview.

STEP 4: Now we will fully erase the disk by using the eraseDisk command.
sudo diskutil eraseDisk FAT32 SDCARD MBRFormat /dev/disk2
This command will execute as ‘sudo’, meaning you will likely have to enter your password to continue. This command will then continue and format your SD card to FAT32 file system type and rename it to ‘SDCARD’ (you can rename to something else).


Example output when instructing Terminal to list all the disks connected to your Mac device (both internal disks and external disks).
Validate to ensure you have reclaimed the disk space

You should now already see the SD card is restored completed: you were able to reclame the full capacity of the external flash storage. We can still execute another command to confirm the disk is in good health.

You are now already aware the diskutil command is capable of quite powerful actions. We will now again use this command to verify the sd card with ‘verifyVolume’.

diskutil verifyVolume disk2