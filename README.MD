# REPTILE API DOCS <a name="introduction"></a>

api is free to use, you can only send GET requests to this link

```
'https://reptile-api.herokuapp.com/api/reptiles/get_one'

```

I'm not expecting anyone to actually use this but don't overload the api pls or I'll add auth

Hello and welcome to the docs for reptile-api. This is a standalone REST Api that returns a single randon reptile from a database hosted on mongoDB.

<a href="https://github.com/nik-hz/reptile-api">GitHub repo</a>

<a href="https://reptileapi.herokuapp.com/">demo page</a>

## Table of contents

1. [Reptile API](#introduction)
2. [Getting started](#getting-started)
3. [multiple toggleable inputs](#code-demo)
4. [Contributing](#contributing)

## Getting Started <a name="getting-started"></a>

To use the API make requests to 'https://reptile-api.herokuapp.com/api/reptiles/get_one', the API will return a JSON object with all the data you need. The API doesn't take any special paramaters nor does it need auth (please don't overload the api, use it for testing purposes only)

```js
async function () {
            try {
                const res = await axios.get(
                    'https://reptile-api.herokuapp.com/api/reptiles/get_one'
                )
                // Change the console log for anything you might wanna do with the data
                console.log(res.data)
            } catch (error) {
                console.log(error)
            }
        }

```

### Reptile object<a name="code-demo"></a>

Here's a code snippet of the schema that the db uses

```js
const reptileSchema = new Schema({
    type_species: {
        type: String,
        required: false,
    },
    Species: {
        type: String,
        required: [true, 'snake needs a species'],
    },
    Author: {
        type: String,
        required: false,
    },
    Subspecies: {
        type: String,
        required: false,
    },
    Common_name: {
        type: String,
        required: false,
    },
    Familyetc: {
        type: String,
        required: false,
    },
    'sp#': {
        type: Number,
        required: false,
    },
    'changes\r': {
        type: String,
        required: false,
    },
})
```

## Contributing <a name="contributing"></a>

If you want to help feel free :)
