import { Express } from 'express'
import { FotografiaController } from '../endpoints/_index'
import * as  multer from 'multer'

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

export function routes(app: Express) {

  /**
   * @api {get} /fotografias/:id Obtener una fotografia
   * @apiName GetFotografia
   * @apiGroup Fotografia
   *
   * @apiParam {String} id Id unico de la fotografía
   *
   * @apiSuccess {String} id Id de la fotografía.
   * @apiSuccess {String} path Nombre original de la fotografia.
   * @apiSuccess {String} imagen  La fotografia en base 64.
   * @apiSuccess {String} mascotaId  Id de la mascota a la cual pertenece la fotografía.
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *{
      "imagen": "imagen en base64"
      "id": "748cf7a0-a6e1-11eb-ac3b-a5c4312fcae0",
      "path": "db pagos.png",
      "mascotaId": "75e90960-a6da-11eb-8742-df178125951b",
  }
   *
   */
  app.get('/api/fotografias/:id', FotografiaController.FotogragiaGet.findById)

  /**
   * @api {post} /fotografias Crear una fotografia
   * @apiName PostFotografia
   * @apiGroup Fotografia
   *
   * @apiParam {String} mascotaId Id de la mascota a la cual se asocia la fotografia
   * @apiParam {File} fotografia La imagen en el formulario que se subira(Se usa Multer para el procesamiento de imagenes)
   *
   * @apiSuccess {String} id Id de la fotografía.
   * @apiSuccess {String} path Nombre original de la fotografia.
   * @apiSuccess {String} imagen  La fotografia en base 64.
   * @apiSuccess {String} mascotaId  Id de la mascota a la cual pertenece la fotografía.
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *{
      "imagen": "imagen en base64"
      "id": "748cf7a0-a6e1-11eb-ac3b-a5c4312fcae0",
      "path": "db pagos.png",
      "mascotaId": "75e90960-a6da-11eb-8742-df178125951b",
  }
   *
   */
  app.post('/api/fotografias', upload.single('fotografia'), FotografiaController.FotografiaPost.create)

}
