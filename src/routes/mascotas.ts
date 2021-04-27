import { Express } from 'express'
import { MascotaController } from '../endpoints/_index'
import * as  multer from 'multer'

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

export function routes(app: Express) {

  app.get('/api/mascotas/:nombre', MascotaController.MascotaGet.findByName)

  app.post('/api/mascotas', upload.array('fotografias', 4), MascotaController.MascotaPost.create)

}
