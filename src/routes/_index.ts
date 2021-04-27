import * as winston from 'winston'
import { Express, Request, Response } from 'express'
import * as UsuariosRoutes from './usuarios'
import * as MascotasRoutes from './mascotas'
import * as RazasRoutes from './razas'
import * as TipoMascotasRoutes from './tipoMascotas'
import * as FotografiasRoutes from './fotografias'

export function initRoutes(app: Express) {
  winston.log('info', '--> Initialisations des routes')

  app.get('/api', (req: Request, res: Response) => res.status(200).send({
    message: 'server is running!'
  }))

  UsuariosRoutes.routes(app)
  MascotasRoutes.routes(app)
  RazasRoutes.routes(app)
  TipoMascotasRoutes.routes(app)
  FotografiasRoutes.routes(app)

  app.all('*', (req: Request, res: Response) => res.boom.notFound())
}
