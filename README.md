# Git-To-Host [IN DEVELOPMENT]
Git-To-Host is a publishing tool for when you want to automaticly push updates that happen on github to your ftp supported hosting provider. It uses Githubs Webhooks to listens for new commits on a specific branch and then pushes the changed files to the ftp host.

!! OBS !! This project is stil in development and are not working fully yet. The ftp part is working but not the git part yet.

# How to use it?
You can use code from Git-To-Host on your own server for internal jobs or use our online service [gittohost.com](https://gittohost.com/) for a cheap and easy way to publish files without hasle. You are not allowed to your this code to start your own service competing with gittohost.com as stated in the license.

# Requirements
* Nodejs version 10.5.0 or heigher (older might work but not fully tested)
* MongoDB server running on port 27017

# How to get started
1. Make sure you have all the requiroments installed on your server
2. Change the information in `config/default.example.json` to your likings and then rename the file to `config/default.json`
3. Run `npm install` in order to install all the node requriments
4. Run `npm start` to start the server

# Resources for development
* https://github.com/Atinux/node-ftps // Nodejs FTP using LFTP (MIT License)
* https://github.com/sergi/jsftp // Nodejs FTP (MIT License)
* https://github.com/nodegit/nodegit // Nodejs GIT (MIT License)
* https://github.com/steveukx/git-js // Nodejs GIT (MIT License)
