import { Express } from 'express'
import { RazaController } from '../endpoints/_index'


export function routes(app: Express) {

  /**
  * @api {get} /razas Obtener un listado de las razas
  * @apiName GetRaza
  * @apiGroup Raza
  *
  * @apiParam {String} [tipoMascota] Id del tipo de mascota para filtrar razas por el tipo
  * @apiParam {String} [nombre] Nombre parcial para el filtrado de la raza por nombre
  *
  * @apiSuccess {String} array.id Id de la raza.
  * @apiSuccess {String} array.nombre Nombre de la raza.
  * @apiSuccess {String} array.tipoMascotaId Id del tipo de mascota al cual pertenece la raza.
  *
  * @apiSuccessExample Success-Response:
  *     HTTP/1.1 200 OK
  *[    {
        "id": "a690da30-a6e3-11eb-91bd-45f887b013cf",
        "nombre": "Pug",
        "tipoMascotaId": "a67da050-a6e3-11eb-91bd-45f887b013cf"
    },
    {
        "id": "a690da31-a6e3-11eb-91bd-45f887b013cf",
        "nombre": "Husky",
        "tipoMascotaId": "a67da050-a6e3-11eb-91bd-45f887b013cf"
    }]
  *
  */
  app.get('/api/razas', RazaController.RazaGet.listByNameAndType)

  /**
  * @api {post} /razas Crear una raza
  * @apiName PostRaza
  * @apiGroup Raza
  *
  * @apiParam {String} [tipoMascota] Id del tipo de mascota para filtrar razas por el tipo
  * @apiParam {String} nombre Nombre de la raza
  *
  * @apiSuccess {String} id Id de la raza.
  * @apiSuccess {String} nombre Nombre de la raza.
  * @apiSuccess {String} tipoMascotaId Id del tipo de mascota al cual pertenece la raza.
  *
  * @apiSuccessExample Success-Response:
  *     HTTP/1.1 200 OK
  *{
        "id": "a690da31-a6e3-11eb-91bd-45f887b013cf",
        "nombre": "Husky",
        "tipoMascotaId": "a67da050-a6e3-11eb-91bd-45f887b013cf"
    }
  *
  */
  app.post('/api/razas', RazaController.RazaPost.create)

}
