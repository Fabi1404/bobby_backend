import { Request, Response } from 'express'
import { FotografiaDao } from '../../dao/_index'
import { body, validationResult } from 'express-validator'
import * as winston from 'winston'

export function create(req: Request, res: Response) {
  return FotografiaDao.create(req.body, req.file)
    .then(usuario => res.status(201).send(usuario))
    .catch(error => res.boom.badRequest(error))

}
