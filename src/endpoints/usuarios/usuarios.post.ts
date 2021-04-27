import { Request, Response } from 'express'
import { UsuarioDao } from '../../dao/_index'
import { body, validationResult } from 'express-validator'

export function create(req: Request, res: Response) {

  body('password', 'El password es requerido').notEmpty()
  body('correo', 'El correo es requerido').notEmpty()
  body('correo', 'Es requerido un correo válido').isEmail()

  const result = validationResult(req)
  if (result.isEmpty()) {
    return UsuarioDao.create(req.body)
      .then(usuario => res.status(201).send(usuario))
      .catch(error => res.boom.badRequest(error))
  } else {
    res.boom.badRequest('Validation errors', result.mapped())
  }
}

export function login(req: Request, res: Response) {

  body('password', 'El password es requerido').notEmpty()
  body('correo', 'El correo es requerido').notEmpty()
  body('correo', 'Es requerido un correo válido').isEmail()

  const result = validationResult(req)
  if (result.isEmpty()) {
    return UsuarioDao.login(req.body)
      .then(usuario => res.status(200).send(usuario))
      .catch(error => res.boom.badRequest(error))
  } else {
    res.boom.badRequest('Validation errors', result.mapped())
  }

}
