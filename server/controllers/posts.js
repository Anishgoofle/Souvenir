const getPosts = (req, res) => {
    res.send('working');
}

const createPost = (req, res) => {
    res.send('post creation')
}

module.exports = {
    getPosts,
    createPost
}