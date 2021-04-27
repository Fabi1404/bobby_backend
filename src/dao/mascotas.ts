import { Op } from 'sequelize'
import * as uuid from 'uuid'
import { Fotografia } from '../sqlz/models/fotografia'
import { Mascota } from '../sqlz/models/mascota'


export function create(mascota: any, files: any): Promise<any> {
  let obj = {
    id: uuid.v1(),
    nombre: mascota.nombre,
    edad: mascota.edad,
    color: mascota.color,
    tamaño: mascota.tamaño,
    sexo: mascota.sexo,
    estadoSalud: mascota.estadoSalud,
    estado: mascota.estado,
    usuarioId: mascota.usuarioId,
    razaId: mascota.razaId,
    fotografias: []
  }

  if (files.length > 0) {
    const keys = Object.keys(files)
    keys.forEach(key => {
      obj.fotografias.push({
        id: uuid.v1(),
        path: files[key].originalname,
        imagen: files[key].buffer
      })
    })
    return Mascota
      .create(obj, { include: [{ association: Mascota.Fotografias }] })
  }
  return Mascota
    .create(obj)
}

export function findAll(): Promise<any> {
  return Mascota
    .findAll()
}

export function findByName(nombre: String): Promise<any> {
  return Mascota.findAll({
    where: {
      nombre: {
        [Op.iLike]: `%${nombre}%`
      }
    },
    include: [Mascota.Fotografias]
  })
}

// todo add more methods for lost pets


