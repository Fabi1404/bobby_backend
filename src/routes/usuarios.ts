import { Express } from 'express'
import { UsuarioController } from '../endpoints/_index'

export function routes(app: Express) {

  app.get('/api/usuarios/:id', UsuarioController.UsuarioGet.list)
  app.post('/api/usuarios/login', UsuarioController.UsuarioPost.login)
  app.post('/api/usuarios', UsuarioController.UsuarioPost.create)

}
