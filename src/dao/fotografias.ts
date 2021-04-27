import * as uuid from 'uuid'
import { Fotografia } from '../sqlz/models/fotografia'


export function findById(id: any): Promise<any> {
  return Fotografia.findByPk(id)
}

export function create(fotografia: any, file: any): Promise<any> {
  return Fotografia
    .create({
      id: uuid.v1(),
      path: file.originalname,
      imagen: file.buffer,
      mascotaId: fotografia.mascotaId
    })
}
