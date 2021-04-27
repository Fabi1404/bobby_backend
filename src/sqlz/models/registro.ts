import { Model, STRING, ENUM, TEXT, DATE } from 'sequelize'
import sequelize from './_index'

export class Registro extends Model {

}

export class RegistroModel {
  id: string
  estado: 'encontrado' | 'perdido'
  descripcion: string
  ubicacion: string
  fechaPerdida: Date
  fechaHallazgo: Date
  tipo: 'perdida' | 'encuentro'
  createdAt: Date
  updatedAt: Date
}

Registro.init(
  {
    estado: ENUM('encontrado', 'perdido'),
    descripcion: TEXT,
    ubicacion: STRING(30),
    fechaPerdida: DATE,
    fechaEncuentro: DATE,
    tipo: ENUM('perdida', 'encuentro')
  },
  { sequelize, modelName: 'registro' }
)

