const app = require('express')();

app.get('/', (req, res) => {
    return res.status(200).json({
        message: "hello there"
    })
})

app.get('/tes', (req, res) => {
    return res.status(200).json({
        data: "testing gets"
    })
})


app.get('/:id', (req, res) => {
    return res.status(200).json({
        message: "hello there",
        params: `this is your params ${req.params.id}`
    })
})

app.get('*', (req, res) => {
    return res.status(404).json({
        message: "route is not defined",
    })
})

app.listen(3000, () => {
    console.log('server is running');
})