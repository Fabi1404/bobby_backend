import { Request, Response } from 'express'
import { RazaDao } from '../../dao/_index'

export function listByNameAndType(req: Request, res: Response) {
  return RazaDao
    .findByNameAndType(req.query.nombre as string, req.query.tipoMascota as string)
    .then(usuario => res.status(200).send(usuario))
    .catch(error => res.boom.badRequest(error))
}
