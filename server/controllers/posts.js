const PostMessage = require('../models/postMessage');


const getPosts = async (_, res) => {
    try {
        const messages = await PostMessage.find();

        console.log(messages);
        res.status(200).json(messages);
    }
    catch (err) {
        res.status(404).json({ message: error.message });
    }
}

const createPost = async (req, res) => {
    const post = req.body;

    const newPost = new PostMessage(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (err) {
        res.status(409).json({ message: error.message });
    }
}

module.exports = {
    getPosts,
    createPost
}