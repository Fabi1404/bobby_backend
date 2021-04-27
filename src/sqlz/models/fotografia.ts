import { BLOB, Model, TEXT, UUID } from 'sequelize'
import { Mascota } from './mascota'
import sequelize from './_index'

export class Fotografia extends Model {

}

export class FotografiaModel {
  id: string
  imagen: string
  path: string
  createdAt: Date
  updatedAt: Date
}

Fotografia.init(
  {
    path: TEXT,
    imagen: {
      type: BLOB,
      get() {
        const raw = this.getDataValue('imagen')
        return raw.toString('base64')
      }
    },
    mascotaId: UUID
  },
  { sequelize, modelName: 'fotografia', tableName: 'fotografias' }
)

Fotografia.belongsTo(Mascota, {
  foreignKey: 'mascotaId',
  targetKey: 'id',
  as: 'mascota'
})

Mascota.Fotografias = Mascota.hasMany(Fotografia, {
  as: 'fotografias',
  foreignKey: 'mascotaId',
  sourceKey: 'id'
})

