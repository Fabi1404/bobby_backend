import { Model, STRING, DataTypes, INTEGER, ENUM, BOOLEAN, TEXT, UUID } from 'sequelize'
import { Fotografia } from './fotografia'
import { Raza } from './raza'
import { Usuario } from './usuario'
import sequelize from './_index'

export class Mascota extends Model {
  static Fotografias: any
}

export class MascotaModel {
  id: string
  nombre: string
  edad: number
  color: string
  tamaño: 'pequeño' | 'mediano' | 'grande'
  sexo: boolean // true masculino, false femenino
  estadoSalud: 'saludable' | 'medicado' | 'enfermo'
  estado: 'encontrado' | 'perdido'
  createdAt: Date
  updatedAt: Date
}

Mascota.init(
  {
    nombre: STRING(50),
    edad: INTEGER,
    color: STRING(50),
    tamaño: ENUM('pequeño', 'mediano', 'grande'),
    sexo: BOOLEAN,
    estadoSalud: ENUM('saludable', 'medicado', 'enfermo'),
    estado: DataTypes.ENUM('encontrado', 'perdido'),
    usuarioId: UUID,
    razaId: UUID
  },
  { sequelize, modelName: 'mascota', tableName: 'mascotas' }
)

Mascota.belongsTo(Raza, {
  as: 'raza',
  foreignKey: 'razaId',
  targetKey: 'id'
})

Raza.hasMany(Mascota, {
  as: 'mascotas',
  foreignKey: 'razaId',
  sourceKey: 'id'
})

Mascota.belongsTo(Usuario, {
  as: 'propietario',
  foreignKey: 'usuarioId',
  targetKey: 'id'
})

Usuario.hasMany(Mascota, {
  as: 'mascotas',
  foreignKey: 'usuarioId',
  sourceKey: 'id'
})

