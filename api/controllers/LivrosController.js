const database = require('../models')

class LivrosControllers {

    static async cadastrarLivro(req, res) {
        try {
            const livro = req.body
            const resultado = await database.Livros.create(livro)
            res.status(201).json(resultado)
        } catch(error) {
            res.status(500).json(error.message)
        }
    }

    static async buscaPorTitulo(req, res) {
        try {
            const titulo = req.params.titulo
            const arrayTitulo = titulo.split('')
            let tituloFormatado = ''

            arrayTitulo.map((titulo) => {
                tituloFormatado += titulo.replace('-', ' ')
            })            

            const resultado = await database.Livros.findOne({ where: { titulo: tituloFormatado}})
            res.status(200).json(resultado)
        } catch(error) {
            res.status(500).json(error.message)
        }
    }

    static async buscarPorAutor(req, res) {
        try {
            const autor = req.params.autor
            const arrayAutor = autor.split('')
            let autorFormatado = ''

            arrayAutor.map((autor) => {
                autorFormatado += autor.replace('-',' ')
            })

            const resultado = await database.Livros.findAll({
                raw: true,
                where: {
                    autor: autorFormatado
                }
            })

            res.status(200).json(resultado)

        } catch(error) {
            res.status(500).json(error.message)
        }
    }

    static async listarTodos(req, res) {
        try{
            const resultado = await database.Livros.findAll({raw: true})
            res.status(200).json(resultado)
        } catch(error) {
            res.status(500).json(error)
        }
    }
}

module.exports = LivrosControllers