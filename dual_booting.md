# 🐧 How to Dual-Boot Windows 10 and Linux

> **Difficulty:** ⭐⭐⭐ (Intermediate)  
> **Time:** 1–2 hours  
> **What you need:** A laptop, a USB drive (8GB+), and patience!

---

## Before You Start (IMPORTANT!)
⚠️ **Back up your files!** If something goes wrong, you don't want to lose your homework or game saves. I used an external hard drive.

---

## Which Path Are You On?

| Your Current OS | Scroll To |
|-----------------|-----------|
| **Windows** is already installed → you want to add Linux | [Windows First POV](#-pov-1-windows-first-adding-linux) |
| **Linux** is already installed → you want to add Windows | [Linux First POV](#-pov-2-linux-first-adding-windows) |

---

# 🪟 POV 1: Windows First (Adding Linux)

## Step 1: Make a Bootable Linux USB
I used **Rufus** (on Windows) to put the Linux ISO onto my USB drive.
- I downloaded the **Ubuntu** (or Pop!_OS) ISO file from their website.
- I opened Rufus, selected my USB drive, and clicked "Start."

## Step 2: Make Space on Your Hard Drive
Windows takes up a lot of space, so I had to shrink it.
- I right-clicked the **Start** button and opened **Disk Management**.
- I right-clicked my main drive (C:) and selected **"Shrink Volume."**
- I shrunk it by about **50GB** (or more) so Linux would have enough room.

## Step 3: Disable Secure Boot (BIOS)
- Restart your laptop and press **F2**, **Delete**, or **Esc** (depends on your brand!) to enter BIOS.
- Find **"Secure Boot"** and **disable it**. (Linux needs this off!)

## Step 4: Boot from USB and Install Linux
- Change the boot order so the USB is first (just for this install).
- Select **"Install alongside Windows"** when the installer asks about partitions.

## Step 5: Fix Boot Priority (GRUB)
After installing, restart and go back to BIOS. **Make sure Linux is the FIRST boot option.** If Windows is first, it skips GRUB and you'll never see the menu to choose!

---

# 🐧 POV 2: Linux First (Adding Windows) — *This is How I Did It!*

> My laptop came with Linux pre-installed, and I wanted to add Windows 10.

## Step 1: Make a Bootable Windows USB
- I downloaded the **Windows 10 ISO** from Microsoft's website (it's free!).
- On Linux, I used **WoeUSB** or **BalenaEtcher** to flash the ISO to my USB drive.
- **Note:** Some tools don't work for Windows ISOs. WoeUSB is specifically made for this!

## Step 2: Make Space on Your Linux Drive
I needed to shrink my Linux partition to make room for Windows.
- I opened **GParted** (a partition manager tool on Linux).
- I right-clicked my main Linux partition (usually `/dev/sda` or `/dev/nvme0n1`) and selected **"Resize/Move."**
- I shrunk it by about **60GB** (Windows takes more space than Linux!).
- I left the empty space as **"unallocated"** — Windows will use this during installation.

## Step 3: Install Windows (The Tricky Part!)
- I plugged in the Windows USB and restarted my laptop.
- I pressed **F2** (or whatever key your laptop uses) to get into the BIOS.
- I changed the boot order so the USB was first.

## Step 4: The "Partition" Screen in Windows
- When Windows asked where to install, I saw a list of partitions.
- **⚠️ CRITICAL:** I made sure to select the **"Unallocated Space"** (the empty space I made with GParted). 
- **DO NOT** touch the Linux partitions or you'll lose everything!

## Step 5: The BIG Problem — Windows Overwrites GRUB!
After Windows installed, my laptop restarted and **booted straight into Windows**. 
- My GRUB menu (the one that lets me choose Linux) was GONE.
- **Here's the fix:**

## Step 6: Restore GRUB (Linux to the Rescue!)
I needed to get Linux back as the boot manager:
1. I plugged in my **Linux live USB** (the one I originally used to install Linux).
2. I booted from it and selected **"Try Linux"** (not install).
3. I opened the terminal and mounted my Linux partition to fix the bootloader. Here's the code I used:

### In the terminal:
```bash
sudo fdisk -l
```
*(I found my Linux partition — it was `/dev/nvme0n1p5` for me)*

```bash
sudo mount /dev/nvme0n1p5 /mnt
sudo mount --bind /dev /mnt/dev
sudo mount --bind /proc /mnt/proc
sudo mount --bind /sys /mnt/sys
sudo chroot /mnt
```
*(This "chroots" into my Linux installation from the live USB)*

```bash
grub-install /dev/nvme0n1
update-grub
```
*(This reinstalls GRUB and detects Windows!)*

Then I exited and rebooted. **GRUB came back with both options!**

---

## 🛠️ Mistakes I Made (So You Don't!)

### Windows First Mistake:
- **I forgot to disable Secure Boot** at first. The USB wouldn't even load!

### Linux First Mistakes (My Experience):
1. **I chose the wrong partition** in the Windows installer and almost wiped my Linux drive! 😱 Always pick the **"Unallocated"** space.
2. **I panicked when GRUB disappeared** after installing Windows. I thought I broke my laptop! But the live USB saved me.
3. **I pressed the wrong key** to get into the BIOS (I had to Google which key it was for my laptop model).

---

## ✅ You Did It!
If you see a screen asking you to pick between **Windows** and **Linux**, you're done! 

Boot into either one and start exploring. 🚀

---

## 📸 What My Setup Looks Like

![My Dual-Boot Setup](Dual_boot.img)

*(Add a screenshot of your GRUB menu or desktop here!)*

---

[⬅️ Back to Home](/)
