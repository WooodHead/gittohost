console.log("=============================")
console.log("== Git-To-Host has started ==")
console.log("=============================")

var config = require('config')

if (config.has('ftp.host')) {
    var detail = config.get('ftp.host')
    console.log("FTP host is:", detail)
    console.log()
}




// FTP Connection
/*
const jsftp = require("jsftp");
const ftp = new jsftp({
  host: config.get('ftp.host'),
  port: config.get('ftp.port'), // defaults to 21
  user: config.get('ftp.username'), // defaults to "anonymous"
  pass: config.get('ftp.password') // defaults to "@anonymous"
});
*/

// Upload file and override if already there
/*
ftp.put("testfiles/test.txt", config.get('ftp.path')+"/test.txt", err => {
    if (err) {
        return console.error("There was an error retrieving the file.");
    }
    console.log("File uploaded successfully!");

    ftp.raw("quit", (err, data) => {
        if (err) {
            return console.error(err);
        }
    
        console.log("Bye!");
    });
});
*/
