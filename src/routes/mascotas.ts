import { Express } from 'express'
import { MascotaController } from '../endpoints/_index'
import * as  multer from 'multer'

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

export function routes(app: Express) {

  /**
  * @api {get} /mascotas/:nombre Buscar una mascota
  * @apiName GetMascota
  * @apiGroup Mascota
  *
  * @apiParam {String} nombre Nombre parcial de la mascota para buscar
  *
  * @apiSuccess {String} id Id de la mascota.
  * @apiSuccess {String} nombre Nombre de la mascota.
  * @apiSuccess {Number} edad Edad de la mascota.
  * @apiSuccess {String} color Color de la mascota.
  * @apiSuccess {String} tamaño Tamaño de la mascota.
  * @apiSuccess {Boolean} sexo Sexo de la mascota.
  * @apiSuccess {String} estadoSalud Estado de salud de la mascota.
  * @apiSuccess {String} estado Estado actual de la mascota.
  *
  * @apiSuccessExample Success-Response:
  *     HTTP/1.1 200 OK
  *[  {
        "id": "dbcfe000-a6e4-11eb-80b6-279f485e64f4",
        "nombre": "morita",
        "edad": 12,
        "color": "negro",
        "tamaño": "grande",
        "sexo": true,
        "estadoSalud": "saludable",
        "estado": "perdido",
        "usuarioId": "c1d81410-a6e4-11eb-80b6-279f485e64f4",
        "razaId": "a690da30-a6e3-11eb-91bd-45f887b013cf",
        "fotografias": [
          fotografias de la mascota
      ]
  }, { ... }, { ... }]
  *
  */
  app.get('/api/mascotas/:nombre', MascotaController.MascotaGet.findByName)

  /**
  * @api {post} /mascotas Crear una mascota
  * @apiName PostMascota
  * @apiGroup Mascota
  *
  * @apiParam {String} nombre Nombre de la mascota.
  * @apiParam {Number} edad Edad de la mascota.
  * @apiParam {String} color Color de la mascota.
  * @apiParam {String=pequeño,mediano,grande} tamaño Tamaño de la mascota.
  * @apiParam {Boolean} sexo Sexo de la mascota true=masculino, false=femenino.
  * @apiParam {String=saludable,medicado,enfermo} estadoSalud Estado de salud de la mascota.
  * @apiParam {String=encontrado,perdido} estado Estado actual de la mascota.
  * @apiParam {File} fotografias Fotografias de la mascota.
  *
  * @apiSuccess {String} id Id de la mascota.
  * @apiSuccess {String} nombre Nombre de la mascota.
  * @apiSuccess {Number} edad Edad de la mascota.
  * @apiSuccess {String} color Color de la mascota.
  * @apiSuccess {String} tamaño Tamaño de la mascota.
  * @apiSuccess {Boolean} sexo Sexo de la mascota.
  * @apiSuccess {String} estadoSalud Estado de salud de la mascota.
  * @apiSuccess {String} estado Estado actual de la mascota.
  * @apiSuccess {Array} fotografias Fotografias en base64 de la mascota.
  *
  * @apiSuccessExample Success-Response:
  *     HTTP/1.1 200 OK
  *[  {
        "id": "dbcfe000-a6e4-11eb-80b6-279f485e64f4",
        "nombre": "morita",
        "edad": 12,
        "color": "negro",
        "tamaño": "grande",
        "sexo": true,
        "estadoSalud": "saludable",
        "estado": "perdido",
        "usuarioId": "c1d81410-a6e4-11eb-80b6-279f485e64f4",
        "razaId": "a690da30-a6e3-11eb-91bd-45f887b013cf",
        "fotografias": [
          fotografias de la mascota
      ]
  }]
  *
  */
  app.post('/api/mascotas', upload.array('fotografias', 4), MascotaController.MascotaPost.create)

}

