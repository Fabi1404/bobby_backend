import { Request, Response } from 'express'
import { FotografiaDao } from '../../dao/_index'

export function findById(req: Request, res: Response) {
  return FotografiaDao
    .findById(req.params.id)
    .then(fotografia => res.status(200).send(fotografia))
    .catch(error => res.boom.badRequest(error))
}
