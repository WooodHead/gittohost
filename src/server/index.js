/* Imports */
var config = require('config')
var express = require('express');
var app = express();
var path = require('path');

console.log("=============================")
console.log("== Git-To-Host has started ==")
console.log("=============================")

/* Checking if the config module is working */
if (config.has('ftp.host')) {
    var detail = config.get('ftp.host')
    console.log("FTP host is:", detail)
    console.log()
}

/* Database Setup */
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://" + config.get('mongodb.host') + ":" + config.get('mongodb.port') + "/whatsup";
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.createCollection("customers", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
});


app.use(express.static('static'))
// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/html/index.html'));
});
app.get('/callback', function(req, res) {
    res.sendFile(path.join(__dirname + '/html/callback.html'));
    console.log("Code: ", req.query.code)
});
app.listen(8080);




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
