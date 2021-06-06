# db-seeder

hello and welcome to this json db-seeder. Seed your databases from large JSON files automatically

## how to use

````
npm i db-seeder

````

require the function in your file, pass in the seed data as the first argument and the url to your api as the second one. 

if you are testing your api and are hosting it locally then pass in the localhost link

````javascript

module.exports.dbSeeder = async (seedLocation, apiUrl) => {
    try {
        for (let item of seedLocation) {
            const postreq = await axios.post(apiUrl, item)

            console.log(postreq, 'succesfully sent')
        }
    } catch (error) {
        console.error(error.message)
        
    }
}

````

