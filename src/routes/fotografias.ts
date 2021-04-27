import { Express } from 'express'
import { FotografiaController } from '../endpoints/_index'
import * as  multer from 'multer'

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

export function routes(app: Express) {

  app.get('/api/fotografias/:id', FotografiaController.FotogragiaGet.findById)
  app.post('/api/fotografias', upload.single('fotografia'), FotografiaController.FotografiaPost.create)

}
