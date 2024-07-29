import abaixoAssinado from "../models/AbaixoAssinado.js";


class AbaixoAssinadoController {
  static async listaAbaixoAssinado(req, res) {
    try {
      const listaregistropassos = await abaixoAssinado.find({})
      res.status(200).json({
        success: true,
        message: 'Registro de Passos listados com sucesso!',
        results: listaregistropassos
      })
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Erro ao listar Registro de Passos',
        error: error.message
      })
    }
  }

  static async listaAbaixoAssinadoId(req, res) {
    try {
      const id = req.params.id
      const abaixoAssinadoEncontrado = await abaixoAssinado.findById(id)
      res.status(200).json({
        success: true,
        message: 'Registro de passos encontrado com sucesso!',
        results: abaixoAssinadoEncontrado
      })
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Erro ao encontrar Registro de passos',
        error: error.message
      })
    }
  }

  static async cadastroAbaixoAssinado(req, res) {
    try {
      const novoAbaixoAssinado = abaixoAssinado.create(req.body)
      res.status(201).json({
        success: true,
        message: 'Registro de passos cadastrado com sucesso!',
        results: req.body
      })
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Erro ao cadastrar Registro de passos',
        error: error.message
      })
    }
  }

  static async atualizaAbaixoAssinado(req, res) {
    try {
      const id = req.params.id
      await abaixoAssinado.findByIdAndUpdate(id, req.body)
      res.status(200).json({
        success: true,
        message: 'Registro de passos atualizado com sucesso!',
      })
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Erro ao atualizar o Registro de passos',
        error: error.message
      })
    }
  }

  static async excluirAbaixoAsinado(req, res) {
    try {
      const id = req.params.id
      await abaixoAssinado.findByIdAndDelete(id)
      res.status(200).json({
        success: true,
        message: 'Registro de passos excluído com sucesso!',
      })
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Erro ao excluír o Registro de passos',
        error: error.message
      })
    }
  }
}

export default AbaixoAssinadoController;