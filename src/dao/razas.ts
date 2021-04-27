import { Op } from 'sequelize'
import * as uuid from 'uuid'
import { Raza } from '../sqlz/models/raza'
import { TipoMascota } from '../sqlz/models/tipoMascota'



export function create(raza: any): Promise<any> {
  return Raza.create({
    id: uuid.v1(),
    nombre: raza.nombre,
    tipoMascotaId: raza.tipoMascotaId
  })
}

export function findAll(): Promise<any> {
  return Raza
    .findAll()
}

export function findByNameAndType(nombre: string = '', tipoMascotaId: string = ''): Promise<any> {

  if (tipoMascotaId !== '') {
    return Raza.findAll({
      where: {
        nombre: {
          [Op.iLike]: `%${nombre}%`
        }
      },
      include: [
        {
          model: TipoMascota,
          as: 'tipoMascota',
          where: {
            id: tipoMascotaId
          }
        }
      ]
    })
  } else {
    return Raza.findAll({
      where: {
        nombre: {
          [Op.iLike]: `%${nombre}%`
        }
      },
      include: [
        {
          model: TipoMascota,
          as: 'tipoMascota'
        }
      ]
    })
  }
}
