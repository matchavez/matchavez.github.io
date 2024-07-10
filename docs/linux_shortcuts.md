# Linux Terminal Cheat Sheet

---

### Basic commands

Zoom in ➜ [CTRL] + [+]

Zoom out ➜ [CTRL] + [-]

Print working directory ➜ pwd

Clear the terminal ➜ [CTRL] + [l] or clear

Assign an alias ➜ alias [alias-name]="[command-to-run]"

Source a file ➜ source [name-of-the-file-to-read-and-execute]

### Change directory command `cd`

Move to a specific directory ➜ cd [name-of-your-directory]

Move to the parent directory ➜ cd ..

Move to the home directory ➜ cd or cd ~

Move to the last directory yo were in ➜ cd -

### List command `ls`

List all visible files and directories ➜ ls

List all files and directories (include hidden files) ➜ ls -a

Long Listed Format ➜ ls -l

Human Readable Format ➜ ls -lh

Combining arguments: Human Readable Format + Hidden files ➜ ls -lah

Learn more about the ls command ➜ man ls

### Search

Locate the binary for a program ➜ which [name-of-the-program]

Locate the binary, source and user manual for a program ➜ whereis [name-of-the-program]

Locate files and directories by name ➜ find [path-to-search] -iname [name-of-the-file-you-want-to-search]

Learn more about the find command ➜ man find

Get a brief description for a command ➜ whatis [command-name]

### History

Get previous commands (one by one) ➜ Use the Up Arrow key ⬆️ to navigate your history

Get previous commands (full list) ➜ history.

Repeat commands from history (bang command) ➜ history ➜ ![number-of-the-command-to-repeat]

Repeat last command (bang-bang command) ➜ !!

### Working with files and directories

Create a new file (without open it) ➜ touch [name-of-your-file]

Create a new file using a text editor ➜ vim [name-of-your-file] or nano [name-of-your-file]

Copy a file ➜ cp [source-path-of-your-file] [destination-path-for-your-file]

Create a new directory ➜ mkdir [new-directory-name]

Remove an empty directory ➜ rmdir [name-of-the-directory-you-want-to-remove]

### Remove command `rm`

Remove a file ➜ rm [name-of-your-file]

Remove a directory recursively (use with caution) ➜ rm -rf [name-of-your-directory]

### Concatenate command `cat`

View a single file ➜ cat [name-of-your-file]

View a single file including the line numbers ➜ cat -n [name-of-your-file]

Copy the content of one file to another file ➜ cat [filename-whose-contents-is-to-be-copied] > [destination-filename]

Learn more about the cat command ➜ man cat

### Move command `mv`

Move a file ➜ mv [source-path-of-your-file] [destination-path-for-your-file]

Rename a file ➜ mv [name-of-your-file] [new name-of-your-file]

### Search with Grep

Search for a string within a file ➜ grep [term-to-search] [source-file-to-search]

Case Insensitive Search within a file ➜ grep -i [term-to-search] [source-file-to-search]

Search for non-matching lines within a file ➜ grep -v [term-to-search] [source-file-to-search]

Recursive search within a directory ➜ grep -r [term-to-search] [path-to-directory-to-search]

Multiple searches within a file ➜ grep -E "[first-term-to-search|second-term-to-search]" [source-file-to-search]

Count search results ➜ grep -c [term-to-search] [source-file-to-search]

Showing the name of the matching files ➜ grep -l [term-to-search] [matching-files-to-search]

Learn more about grep ➜ man grep

### Pipes

Piping commands ➜ [command 1] | [command 2] | [command n]

Piping filtered search results into a new file ➜ ls | grep [term-to-filter] | cat > [path-to-new-file]/[name-for-new-file]

Searching through your command history ➜ history | grep "[term-to-search]"

Permissions: Change file mode bits command (chmod)

Add execute permission to everyone ➜ chmod a+x [name-of-the-file] or chmod +x [name-of-the-file]

Remove execute permission to everyone ➜ chmod a-x [name-of-the-file] or chmod -x [name-of-the-file]

Add execute permission to the owner ➜ chmod u+x [name-of-the-file]

Remove write permission to others users ➜ chmod o-w [name-of-the-file]

Add read permission to the group ➜ chmod g+r [name-of-the-file]

Remove write and read permission to everyone ➜ chmod a-wr [name-of-the-file]

Remove write and read permission to everyone for all the files in the current directory ➜ chmod a-wr *.*

### Groups

List all the available groups ➜ getent group

List all the groups my account is assigned to ➜ groups

Search for a specific group (using pipes) ➜ getent group | grep [group-name-to-search]

Create a new group ➜ sudo groupadd [name-for-the-new-group]

Add an existing user to a secondary group ➜ usermod -a -G [group-you-want-to-add-the-user-to] [user-name-to-add]

Ownership: Change file owner and group (chown)

Change user ownership for a file ➜ sudo chown [new-owner-name] [file-to-change-ownership]

Change user ownership for several files ➜ sudo chown [new-owner-name] [file-1-to-change-ownership] [file-n-to-change-ownership]

Change user ownership for a directory ➜ sudo chown [new-owner-name] [directory-to-change-ownership]

Recursively change user ownership for a directory and all it's files ➜ sudo chown -R [new-owner-name] [directory-to-change-ownership]

Change group ownership for a file ➜ sudo chown :[new-group-name] [file-to-change-ownership]

Change user and group ownership for a file ➜ sudo chown [new-owner-name]:[new-group-name] [file-to-change-ownership]

### Shortcuts

Search through your search history ➜ [CTRL] + r. Then type a few characters to find you command

Paste previous lines ➜ [CTRL] + p

Moves the cursor to the beginning of the line. ➜ [CTRL] + a

Moves the cursor to the end of the line. ➜ [CTRL] + e

Moves the cursor forward one character. ➜ [CTRL] + f

Moves the cursor backward one character. ➜ [CTRL] + b

Erases the complete line. ➜ [CTRL] + u

Erases the last word typed. ➜ [CTRL] + w

### Working with long files

Print the last lines for a file ➜ tail [name-of-the-file]

Print the last n lines for a file ➜ tail -n [number-of-lines] [name-of-the-file]

Print the first lines for a file ➜ head [name-of-the-file]

Print the first n lines for a file ➜ head -n [number-of-lines] [name-of-the-file]

Page through a file ➜ less [name-of-the-file]



> Source: https://dev.to/mauro_codes/linux-terminal-the-ultimate-cheat-sheet-part-2-11ge?utm_source=DigitalOcean_Newsletter
