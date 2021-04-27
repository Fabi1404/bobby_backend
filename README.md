# BOBBY BACKEND

Servicio que expone endpoints para registar usuarios, mascotas y fotografias de las mismas.

## Prerequisitos

* Nodejs > 14
* Postgres

## Instalación

Se deben ejecutar los comandos

```bash
npm install
```

## Configurar la base de datos

Los modelos y la configuracion de la base de datos se encuentran en la carpeta /src/sqlz

| Carpeta | Descripcion |
|---|---|
| config  | Configuración de la base de datos. |
| migrations  | Migraciones que definen el esquema de la DB. |
| models | Entidades de sequelize. |

## Iniciar el servicio

```bash
npm start
```

El servicio se ejecuta localmente en http://localhost:3000

## APIDOC

Ir a [documentación](https://murmuring-peak-15403.herokuapp.com)

## Compilar

```bash
npm run build
```

## Contribuyentes

* Sergio Ramirez - @RamirezInformation
* Fabiola Huanca Lecoña - @Fabi1404


