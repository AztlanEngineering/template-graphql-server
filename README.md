## Installation

### Set up the database

+ Create a Postgres instance : https://console.cloud.google.com/sql/instances
  + Give it a public IP
  + To reduce costs, reduce the space and the cores
  + If necessary add auto scaling
  + If production : make it high availability and SSD based
  + Add a subdomain to the instance IP : `now --scope fwrlines dns add fwrlines.com r0.pg A 34.76.0.0`
+ Create two database in the instance, one for test and one for prod
+ For each, go to the `instance > connection`
  + Allow `0.0.0.0/0` subnet to connect (Serverless has variable ips)
  + Enable SSL Access 
+ On each, create the schema `meta` that will be used to store the migration data later

### Migrate the tables

+ `npm run migrate:up all` : run this on the dev machine 
+ After the tables have been migrated, it is crucial that each table ownership is passed to `cloudsqlsuperuser` to make them readable/writable in between users (in case we dont use the same username/login on the dev machine and the prod system, which we should be doing)

## Old Docs

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
  + `GOOGLE_OAUTH_KEY` : Secret key given when generating the oauth identifier, in the dev console
  + `GOOGLE_OAUTH_CLIENT` : Given by google dev console in the form `blahblah.apps.googleusercontent.com`
  + `GOOGLE_OAUTH_HOST_AUTHORIZE` : The url authorizing the google oauth. This MUST match one of the urls self declared in the developper console, for instance `https://api.server.com:4000`
  + `GOOGLE_OAUTH_HOST_TOKEN` : The url of the client to redirect to
  + `CORS` : undocumented atm TODO
  + `DB_HOST` : The database host
  + `DB_PORT` : The database port (for instance `27017`)
  + `DB_USER` : The database username
  + `DB_NAME` : The database name
  + `DB_PASSWORD` : The database password
  + `DB_DEBUG` : Whether to start the DB in debug mode. If true will log all the queries to the console.
  + `DEBUG` : Whether to start the server in debug mode. Will log the requests to the console, and possibly more things.
  + `SESSION_DURATION` : How long to set up a session cookie for. For instance `86400`.
  + `TIME_TO_LOGIN` : How many seconds will the authorization code be valid to be redeemed for an jwt token. A sensible value would be max `60`.
  + `SIGNUP` : Whether signups are authorized in the default auth strategy. If false, only existing users will be able to login.
  + `JWT_SECRET` : The key to encrypt the jwts. `openssl rand -base64 172 | tr -d '\n'` (https://stackoverflow.com/questions/33960565/how-to-generate-a-hs512-secret-key-to-use-with-jwt)

TEMP
On the Database
+ Create postgres schema 'meta' to save the migration table
+ Run migrations with npm run migrate:up
+ After migrations are run, change default table users to cloudsqlsuperuser iin pg_admin if using google cloud sal

+ `POSTGRES_DB_NAME`
+ `POSTGRES_HOST`
+ `POSTGRES_USER`
+ `POSTGRES_PASSWORD`
+ `POSTGRES_CLIENT_CERT` : https://console.cloud.google.com/sql/instances/fwrlines/connections?authuser=1&project=meccamico, generate a key, download and 'cat file.pem | base64'
+ `POSTGRES_CLIENT_KEY` :
+ `POSTGRES_SERVER_CA`

If google auth is not needed, remove dependencies 
```
npm uninstall request request-promise query-string
```
