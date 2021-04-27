import { Op } from 'sequelize'
import * as uuid from 'uuid'
import { TipoMascota } from '../sqlz/models/tipoMascota'

export function findAll(): Promise<any> {
  return TipoMascota.findAll()
}

export function findByName(nombre: String): Promise<any> {
  return TipoMascota.findAll({
    where: {
      nombre: {
        [Op.like]: `%${nombre}%`
      }
    }
  })
}
