const express = require('express')
const postRouter = express.Router()
const Posts = require('./app.js');


// get all posts
postRouter.get('/', (req, res) => {
    Posts.findAll(function (err, posts) {
        if (err) {
            res.send(err);
        }
        else {
            console.log('res', posts);
            res.send(posts);
        }
    });
});

// Create a new post in url-encoded section
postRouter.post('/', (req, res) => {
    const new_post = new Posts(req.body);
    
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'empty fields left!' });
    } else {
        Posts.create(new_post, function (err, posts) {
            if (err) {
                res.send(err);
            }
            else {
                res.json({ message: "Post added!", 'The id of the created post': posts });
            }
        });
    }
});

// get a post with given id
postRouter.get('/:id', (req, res) => {
    Posts.findById(req.params.id, function (err, posts) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(posts);
        }
    });
});

// Update a post with given id in url
postRouter.put('/:id', (req, res) => {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'empty fields left!' });
    } else {
        Posts.update(req.params.id, new Posts(req.body), function (err) {
            if (err) {
                res.send(err);
            }
            else {
                res.json({ message: 'Post updated!' });
            }
        });
    }
});

// Delete a post with given id
postRouter.delete('/:id', (req, res) => {
    Posts.delete(req.params.id, function (err) {
        if (err) {
            res.send(err);
        }
        else {
            res.json({ message: 'Post deleted!' });
        }
    });
});
//export module
module.exports = postRouter;