const notFound = (req, res) => {
    return res.status(404).send('not exist')
}

module.exports = notFound