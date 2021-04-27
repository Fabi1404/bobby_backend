import { Model, STRING, UUID } from 'sequelize'
import { Mascota } from './mascota'
import { TipoMascota } from './tipoMascota'
import sequelize from './_index'

export class Raza extends Model {

}

export class RazaModel {
  id: string
  nombre: string
  createdAt: Date
  updatedAt: Date
}

Raza.init(
  {
    nombre: STRING(50),
    tipoMascotaId: UUID
  },
  { sequelize, modelName: 'raza', tableName: 'razas' }
)

Raza.belongsTo(TipoMascota, {
  as: 'tipoMascota',
  foreignKey: 'tipoMascotaId',
  targetKey: 'id'
})

TipoMascota.hasMany(Raza, {
  as: 'razas',
  foreignKey: 'tipoMascotaId',
  sourceKey: 'id'
})

