import { Request, Response } from 'express'
import { RazaDao } from '../../dao/_index'
import { body, validationResult } from 'express-validator'

export function create(req: Request, res: Response) {

  body('nombre', 'El nombre de la raza es requerido').notEmpty()
  body('tipoMascotaId', 'El tipo de raza es requerido').notEmpty()

  const result = validationResult(req)
  if (result.isEmpty()) {
    return RazaDao.create(req.body)
      .then(raza => res.status(201).send(raza))
      .catch(error => res.boom.badRequest(error))
  } else {
    res.boom.badRequest('Validation errors', result.array())
  }
}
