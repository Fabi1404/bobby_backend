import { Express } from 'express'
import { RazaController } from '../endpoints/_index'


export function routes(app: Express) {

  app.get('/api/razas', RazaController.RazaGet.listByNameAndType)

  app.post('/api/razas', RazaController.RazaPost.create)

}
