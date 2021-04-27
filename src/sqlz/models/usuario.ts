import { Model, STRING } from 'sequelize'
import { Mascota } from './mascota'
import sequelize from './_index'

export class Usuario extends Model {

}

export class UsuarioModel {
  id: string
  nombre: string
  correo: string
  password: string
  telefono: string
  direccion: string
  ubicacion: string
  createdAt: Date
  updatedAt: Date
}

Usuario.init(
  {
    nombre: STRING(100),
    correo: STRING(50),
    password: STRING(255),
    telefono: STRING(50),
    direccion: STRING(150),
    ubicacion: STRING(30),
  },
  { sequelize, modelName: 'usuario' }
)




