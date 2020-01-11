## Installation

### Env Vars to configure (.env / now secret / now.json)

+ `DB_HOSTNAME`
+ `DB_USER` / @db_username
+ DB_PASSWORD` / @db_password
+ JWT_SECRET / @jwt : generate with `openssl rand -base64 172 | tr -d '\n'i`
