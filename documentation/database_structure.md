# This is the database information file
This is the design of the structure for the data thats going to live inside the mongodb service.

## Users Collection
Field Name | Example Value | Decription
--- | --- | ---
id | 23 | A id of the user with make them stand out from each other
signup_date | 2017-06-27T03:10 | The date when the user signed up
email | andreas@gmail.com | The users email
github_access_token | fh834hgdyuf7384hsfd | Access Token that we got when the user authenticated the app

## FTP-Servers Collection
Field Name | Example Value | Decription
--- | --- | ---
id | 68 | A id of the ftp server to make them stand out from each other
created | 2017-06-27T03:10 | The date when this ftp server was added
owner | 23 | The id of the user who owns this server
host | ftp.google.com | The remote servers ip/domain address
port | 21 | Port of the remote server
username | pelle235 | The username to sign in with
password | sdfg673by5%53/dsa | The password to sign in with
protocol | ftp | ftp/ftps/sftp, the protocol to connect with

## Services Collection
Field Name | Example Value | Decription
--- | --- | ---
id | 68 | A id of the service to make them stand out from each other
created | 2017-06-27T03:10 | The date when this service was created
unic_address | dsjfh7834hfuis78gnrc483hcfn783g4bx673gn84h | A key that github's webhook uses to run this service
owner | 23 | The id of the user who owns this service
server_id | 68 | The id of the FTP-server that this service uses
repo | github.com/webjocke/awesomerepo | The repo that this service is going to use
github_path | /production | A path inside the repo where the files should be pulled from
github_branch | master | What branch the service is listening on
ftp_path | /www/html | A path inside the ftp server where the files should be pushed to

## Active Logins Collection
Field Name | Example Value | Decription
--- | --- | ---
id | 456 | A id of the login to make them stand out from each other
user_id | 23 | The id of the user who wants to login
started | 2017-06-27T03:10 | The date when this login started being active
ended | 2017-06-27T03:10 | The date when this login ended being active or should end being active
token | fb6534gudxghv7584hfgd6754g387hrfd67854eh | The unic token that the user has in order to be logged in

## Logs Collection
Field Name | Example Value | Decription
--- | --- | ---
id | 63248 | A id of the log to make them stand out from each other
created | 2017-06-27T03:10 | The date when this log was created
category | user | user/service/system
type | user_logged_in | Type of log
text | User "pelle" logged in | A text that describes the event


