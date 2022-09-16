const express = require('express')
const handlebars = require('express-handlebars')

const app = express()
const PORT = process.env.PORT || 8080
const server = app.listen(PORT, () => console.log(`Server up on port ${PORT}`))

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname+'/views') // app.set('views', './src/views')
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    res.render('create-product')
})
