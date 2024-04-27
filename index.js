const express = require('express')
const app = express()

// app.set('views', './display/views');
app.set('view engine', 'ejs')

app.use(express.static('Public'));
// const bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())


app.get('/', function (req, res) {
    res.render('./pages/Home');
})

app.get('/addproduct', function (req, res) {
    res.render('./pages/Addproduct');
})


app.get('/about', function (req, res) {
    res.render('./pages/About');
})
app.get('/program', function (req, res) {
    res.render('./pages/Program');
})
app.get('/blog', function (req, res) {
    res.render('./pages/Blog');
})
app.get('/contact', function (req, res) {
    res.render('./pages/Contact');
})
// app.get('/service', function (req, res) {
//     res.render('./Views/Pages/Service')
// })

app.listen(8000, () => {
    console.log('App is running on port 8000..');
});