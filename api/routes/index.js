const bodyParser = require('body-parser')
const livros = require('./livrosRoute')

module.exports = app => {
    app.use(
        bodyParser.json(),
        bodyParser.urlencoded({ extended: false }),
        livros
    )
}