import * as uuid from 'uuid'
import { Usuario } from '../sqlz/models/usuario'

export function create(usuario: any): Promise<any> {
  return Usuario
    .create({
      id: uuid.v1(),
      nombre: usuario.nombre,
      correo: usuario.correo,
      password: usuario.password,
      telefono: usuario.telefono,
      direccion: usuario.direccion,
      ubicacion: usuario.ubicacion
    })
}

export function findAll(): Promise<any> {
  return Usuario
    .findAll()
}

export function findById(id): Promise<any> {
  return Usuario.findByPk(id)
}

export function login(usuario: any): Promise<any> {
  return Usuario
    .findOne({
      where: {
        correo: usuario.correo,
        password: usuario.password
      }
    })
}
