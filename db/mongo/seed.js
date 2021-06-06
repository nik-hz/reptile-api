const dbSeeder = require('db-seeder')

const seed = require('../../assets/reptile-list.json')

dbSeeder(seed, 'http://localhost:5000/api/snakes/add_many')
