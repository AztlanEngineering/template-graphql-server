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
+ + GOOGLE_OAUTH_KEY
+ + GOOGLE_OAUTH_CLIENT
+ + GOOGLE_OAUTH_HOST_AUTHORIZE
+ + GOOGLE_OAUTH_HOST_TOKEN

If not needed, remvoe dependencies 
```
npm uninstall request request-promise query-string
```
