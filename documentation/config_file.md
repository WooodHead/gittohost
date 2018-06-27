# The Config file
This information is useful when changing stuff in the config file.

## Important Notes
* The config file should be named `default.json` and be located in the `config` folder inside the root of the project
* The config file is writer in JSON format. Check out the offical [JSON website](https://www.json.org/) for help.

## Obejct Fields
* The `github_oauth_app` object takes two values. The `client_id` and the `client_secret` of your github oauth app. You get this when you created the oauth app on github's developer page
* The `mongodb` object is the hosing information for connecting to the mongo database. `Host` can be localhost, an ip och an domain name, use localhost if you are running it on the same machine. Port can be what ever you like, 27017 is default for mongodb. Username and password is optional but can be used if you need to

## Example Config with descriptions
```json
{
    "github_oauth_app": {
        "client_id": "fgds67t45y8t5h45",
        "client_secret": "hfvn458hm8c7hg4578nvg784mchfh5436gdnf75ggd"
    },
    "mongodb": {
        "host": "localhost",
        "port": 27017,
        "username": "jonnson3774",
        "password": "myn1cep@ssw0rd"
    }
}
```