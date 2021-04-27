import { Request, Response } from 'express'
import { MascotaDao } from '../../dao/_index'

export function findByName(req: Request, res: Response) {
  return MascotaDao
    .findByName(req.params.nombre)
    .then(mascotas => res.status(200).send(mascotas))
    .catch(error => res.boom.badRequest(error))
}
