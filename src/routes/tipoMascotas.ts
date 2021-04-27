import { Express } from 'express'
import { MascotaController, TipoMascotaController } from '../endpoints/_index'

export function routes(app: Express) {


  /**
 * @api {get} /tipoMascotas Obtener el tipo de mascotas
 * @apiName GetTipoMascota
 * @apiGroup Tipo Mascota
 *
 *
 * @apiSuccess {String} array.id Id del tipo de mascota.
 * @apiSuccess {String} array.nombre Nombre del tipo de mascota.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *[    {
      "id": "a67da050-a6e3-11eb-91bd-45f887b013cf",
      "nombre": "Canino",
      "createdAt": "2021-04-26T23:03:44.597Z",
      "updatedAt": "2021-04-26T23:03:44.597Z"
  },
  {
      "id": "a67da051-a6e3-11eb-91bd-45f887b013cf",
      "nombre": "Felino",
      "createdAt": "2021-04-26T23:03:44.597Z",
      "updatedAt": "2021-04-26T23:03:44.597Z"
  },
  {
      "id": "a67da052-a6e3-11eb-91bd-45f887b013cf",
      "nombre": "Ave",
      "createdAt": "2021-04-26T23:03:44.597Z",
      "updatedAt": "2021-04-26T23:03:44.597Z"
  },
  {
      "id": "a67da053-a6e3-11eb-91bd-45f887b013cf",
      "nombre": "Reptil",
      "createdAt": "2021-04-26T23:03:44.597Z",
      "updatedAt": "2021-04-26T23:03:44.597Z"
  }]
 *
 */
  app.get('/api/tipoMascotas', TipoMascotaController.TipoMascotaGet.list)


}
