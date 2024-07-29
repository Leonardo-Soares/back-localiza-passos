import express from 'express'
import AbaixoAssinadoController from '../controllers/abaixoAssinadoController.js'

const routes = express.Router()

routes.get('/registro-passo', AbaixoAssinadoController.listaAbaixoAssinado)
routes.post('/registro-passo', AbaixoAssinadoController.cadastroAbaixoAssinado)
routes.get('/registro-passo/:id', AbaixoAssinadoController.listaAbaixoAssinadoId)
routes.put('/registro-passo/:id', AbaixoAssinadoController.atualizaAbaixoAssinado)
routes.delete('/registro-passo/:id', AbaixoAssinadoController.excluirAbaixoAsinado)

export default routes
