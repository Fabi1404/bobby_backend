import { Express } from 'express'
import { MascotaController, TipoMascotaController } from '../endpoints/_index'

export function routes(app: Express) {

  app.get('/api/tipoMascotas', TipoMascotaController.TipoMascotaGet.list)

  // app.post('/api/mascotas', MascotaController.MascotaPost.create)

}
