## Installation

### Env Vars to configure (.env / now secret / now.json)

+ `DB_HOSTNAME`
+ `DB_USER` / @db_username
+ DB_PASSWORD` / @db_password
+ JWT_SECRET / @jwt : generate with `openssl rand -base64 172 | tr -d '\n'i`

### oAuth2

Todo :
+ Generate keypair in https://console.developers.google.com/apis/credentials
+ Authorize the domains and the FULL redirection URLS
+ configure env 
+ + `GOOGLE_OAUTH_KEY` : Secret key given when generating the oauth identifier, in the dev console
+ + `GOOGLE_OAUTH_CLIENT` : Given by google dev console in the form `blahblah.apps.googleusercontent.com`
+ + `GOOGLE_OAUTH_HOST_AUTHORIZE` : The url authorizing the google oauth. This MUST match one of the urls self declared in the developper console, for instance `https://api.server.com:4000`
+ + `GOOGLE_OAUTH_HOST_TOKEN` : The url of the client to redirect to
+ + `CORS` : undocumented atm TODO
+ + `DB_HOST` : The database host
+ + `DB_PORT` : The database port (for instance `27017`)
+ + `DB_USER` : The database username
+ + `DB_NAME` : The database name
+ + `DB_PASSWORD` : The database password
+ + `DB_DEBUG` : Whether to start the DB in debug mode. If true will log all the queries to the console.
+ + `DEBUG` : Whether to start the server in debug mode. Will log the requests to the console, and possibly more things.

If not needed, remvoe dependencies 
```
npm uninstall request request-promise query-string
```
