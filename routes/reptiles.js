const express = require('express')
const router = express.Router()

const Reptile = require('../db/mongo/models/reptiles')

// @route   Get api/reptiles
// @desc    Get a random reptile
// @access  Public
router.get('/get_one', async (req, res) => {
    try {
        Reptile.countDocuments(async (err, count) => {
            if (err) {
                res.json(err)
            }
            var rand = Math.floor(Math.random() * count)
            const reptile = await Reptile.findOne().skip(rand)
            res.json(reptile)
        })
    } catch (error) {
        console.error(error.message)
        res.status(500).send('Server Error')
    }
})

// @route   Post api/reptiles
// @desc    add many reptiles
// @access  private
router.post('/add_many', async (req, res) => {
    console.log(req.body)
    try {
        for (let item of req.body) {
            const newReptile = new Reptile({
                ...item,
            })

            await newReptile.save()
        }
        res.json({
            message: 'all good',
        })
    } catch (error) {
        console.error(error.message)
        res.status(500).send('Server Error')
    }
})

// @route   Post api/reptiles
// @desc    add a reptile
// @access  private
router.post('/add_one', async (req, res) => {
    console.log(req.body)
    try {
        const newReptile = new Reptile({
            ...req.body,
        })

        await newReptile.save()

        res.json({
            message: 'all good',
        })
    } catch (error) {
        console.error(error.message)
        res.status(500).send('Server Error')
    }
})

module.exports = router
