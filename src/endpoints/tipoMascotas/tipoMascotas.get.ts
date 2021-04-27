import { Request, Response } from 'express'
import { TipoMascotaDao } from '../../dao/_index'

export function list(req: Request, res: Response) {
  return TipoMascotaDao
    .findAll()
    .then(tipoMascota => res.status(200).send(tipoMascota))
    .catch(error => res.boom.badRequest(error))
}

export function listByName(req: Request, res: Response) {
  return TipoMascotaDao
    .findByName(req.params.name)
    .then(tipoMascota => res.status(200).send(tipoMascota))
    .catch(error => res.boom.badRequest(error))
}
