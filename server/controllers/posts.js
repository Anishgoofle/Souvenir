const PostMessage = require('../models/postMessage');


const getPosts = async (req, res) => {
    try {
        const messages = await PostMessage.find();

        console.log(messages);
        res.status(200).json(messages);
    }
    catch (err) {
        res.status(404).json({ message: error.message });
    }
}

const createPost = (req, res) => {
    res.send('post creation')
}

module.exports = {
    getPosts,
    createPost
}