# db-seeder

hello and welcome to this json db-seeder. Seed your databases from large JSON files automatically

## how to use

````
npm i db-seeder

````

require the function in your file, pass in the seed data as the first argument and the url to your api as the second one. 

this function will iterate over JSON arrays and post the content one by one to your api, all model handling must be done by your api, since this does not access your db directly

````javascript

// your code here

const dbSeeder = require('db-seeder')

const seed = require('<path_to_your_seed_file>')

dbSeeder(seed, 'http://localhost:<port>/<add_items_one_by_one>')

// your code here
````
if you are testing your api and are hosting it locally then pass in the localhost link

## contributing
don't really know what there is to contribute, but go ahead :)
