const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')

const Snake = require('../db/mongo/models/snake')

// @route   Post api/posts
// @desc    create a post
// @access  private
router.post(
    '/add_many',
    // auth,
    // check('text', 'text cannot be empty').not().isEmpty(),
    async (req, res) => {
        // const errors = validationResult(req)
        // if (!errors.isEmpty()) {
        //     return res.status(400).json({ errors: errors.array() })
        // }

        console.log(req.body)
        try {
            for (let item of req.body) {
                const newSnake = new Snake({
                    ...item,
                })

                await newSnake.save()
            }
            res.json({
                message: 'all good',
            })
        } catch (error) {
            console.error(error.message)
            res.status(500).send('Server Error')
        }
    }
)

// @route   Post api/posts
// @desc    create a post
// @access  private
router.post(
    '/add_one',
    // auth,
    // check('text', 'text cannot be empty').not().isEmpty(),
    async (req, res) => {
        // const errors = validationResult(req)
        // if (!errors.isEmpty()) {
        //     return res.status(400).json({ errors: errors.array() })
        // }

        console.log(req.body)
        try {
            const newSnake = new Snake({
                ...req.body,
            })

            await newSnake.save()

            res.json({
                message: 'all good',
            })
        } catch (error) {
            console.error(error.message)
            res.status(500).send('Server Error')
        }
    }
)

// @route   Get api/posts
// @desc    Get all posts
// @access  Private
// router.get('/', auth, async (req, res) => {
//     try {
//         const posts = await Post.find().sort({ date: -1 })
//         res.json(posts)
//     } catch (error) {
//         console.error(err0r.message)
//         res.status(500).send('Server Error')
//     }
// })

// // @route   Get api/posts/:post_id
// // @desc    Get post by id
// // @access  Private
// router.get('/:post_id', auth, async (req, res) => {
//     try {
//         const post = await Post.findById(req.params.post_id)

//         if (!post) {
//             return res.status(404).json({ msg: 'post not found' })
//         }

//         res.json(post)
//     } catch (error) {
//         console.error(error.message)

//         if (error.kind === 'ObjectId') {
//             return res.status(404).json({ msg: 'post not found' })
//         }

//         res.status(500).send('Server Error')
//     }
// })

// // @route   delete api/posts
// // @desc    delete a post
// // @access  Private
// router.delete('/:post_id', auth, async (req, res) => {
//     try {
//         const post = await Post.findById(req.params.post_id)

//         if (!post) {
//             return res.status(404).json({ msg: 'post not found' })
//         }

//         // Check if current user is the owner of post
//         if (post.user.toString() !== req.user.id) {
//             return res.status(401).json({ msg: 'not authorized to do this' })
//         }

//         await post.remoce()

//         res.json(post)
//     } catch (error) {
//         console.error(error.message)

//         if (error.kind === 'ObjectId') {
//             return res.status(404).json({ msg: 'post not found' })
//         }

//         res.status(500).send('Server Error')
//     }
// })

// // @route   Put api/post/like/:post_id
// // @desc    like a post
// // @access  Private
// router.put('/like/:post_id', auth, async (req, res) => {
//     try {
//         console.log(req.params.post_id)

//         const post = await Post.findById(req.params.post_id)
//         console.log(post)

//         // Check if post has already been liked
//         if (
//             post.likes.filter((like) => like.user.toString() === req.user.id)
//                 .length > 0
//         ) {
//             return res.status(400).json({ msg: 'Post already liked' })
//         }

//         post.likes.unshift({ user: req.user.id })

//         await post.save()

//         res.json(post.likes)
//     } catch (error) {
//         console.error(error.message)
//         if (error.kind === 'ObjectId') {
//             return res.status(404).json({ msg: 'post not found --> ID is bad' })
//         }

//         res.status(500).send('Server Error')
//     }
// })

// // @route   Put api/post/unlike/:post_id
// // @desc    like a post
// // @access  Private
// router.put('/unlike/:post_id', auth, async (req, res) => {
//     try {
//         console.log(req.params.post_id)

//         const post = await Post.findById(req.params.post_id)
//         console.log(post)

//         // Check if post has  been liked
//         if (
//             post.likes.filter((like) => like.user.toString() === req.user.id)
//                 .length === 0
//         ) {
//             return res.status(400).json({ msg: 'Post has not yet been liked' })
//         }

//         // Get remove index
//         const removeIndex = post.likes
//             .map((like) => like.user.toString())
//             .indexOf(req.user.id)

//         post.likes.splice(removeIndex, 1)

//         await post.save()

//         res.json(post)
//     } catch (error) {
//         console.error(error.message)
//         if (error.kind === 'ObjectId') {
//             return res.status(404).json({ msg: 'post not found --> ID is bad' })
//         }

//         res.status(500).send('Server Error')
//     }
// })

// // @route   Post api/snakes
// // @desc    get a random snake
// // @access  public
// router.post('/snake', async (req, res) => {
//     try {

//     } catch (error) {
//         console.error(error.message)
//         res.status(500).send('Server Error')
//     }
// })

// // @route   Get api/snakes
// // @desc    get a random snake
// // @access  public
// router.get('/snake', async (req, res) => {
//     try {
//     } catch (error) {
//         console.error(error.message)
//         res.status(500).send('Server Error')
//     }
// })

module.exports = router
