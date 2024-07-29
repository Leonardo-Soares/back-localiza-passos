import express from 'express'
import abaixoAssinadoRoutes from './abaixoAssinadoRoutes.js'

const routes = (app) => {
  app.route('/').get((req, res) => res.status(200).send('Curso de Node.js'))

  app.use(express.json(), abaixoAssinadoRoutes)
}

export default routes