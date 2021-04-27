import { Model, STRING, UUID, Deferrable, DataTypes, INTEGER, ENUM, BOOLEAN } from 'sequelize'
import sequelize from './_index'
import { Raza } from './raza'

export class TipoMascota extends Model {

}

export class TipoMascotaModel {
  id: string
  nombre: string
  createdAt: Date
  updatedAt: Date
}

TipoMascota.init(
  {
    nombre: STRING(50)
  },
  { sequelize, modelName: 'tipo_mascota', tableName: 'tipoMascotas' }
)

