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

### Other 

If google auth is not needed, remove dependencies 
```npm uninstall request request-promise query-string```
