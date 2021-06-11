const axios = require('axios')

module.exports.dbSeeder = async (seedData, apiUrl) => {
    try {
        for (let item of seedData) {
            const postreq = await axios.post(apiUrl, item)

            console.log(postreq, 'succesfully sent')
        }
    } catch (error) {
        console.error(error.message)
    }
}
