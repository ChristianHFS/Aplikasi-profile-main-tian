import express from "express"

const app = express()
const port = process.env.PORT || 8080

app.set('view engine', 'pug')
app.use(express.static('src'))
app.get('/', (req, res) => {
    res.render('index', {title: 'Hello World', message: 'Hello There!'})
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})