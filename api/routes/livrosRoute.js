const { Router } = require('express')
const LivrosControllers = require('../controllers/LivrosController')

const router = Router()

router.post('/livros', LivrosControllers.cadastrarLivro)
router.get('/livros/:titulo', LivrosControllers.buscaPorTitulo)
router.get('/livrosAutor/:autor', LivrosControllers.buscarPorAutor)
router.get('/listarTodos', LivrosControllers.listarTodos)

module.exports = router