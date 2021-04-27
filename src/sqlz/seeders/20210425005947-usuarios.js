'use strict';

const uuid = require("uuid");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('usuarios', [{
      id: uuid.v1(),
      nombre: 'Fabiola ',
      correo: 'fabiola@fabiola.com',
      password: '12345678',
      telefono: '72503006',
      direccion: 'Calle 1',
      ubicacion: '27.36846,1.1740',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: uuid.v1(),
      nombre: 'Pedro ',
      correo: 'pedro@pedro.com',
      password: '12345678',
      telefono: '71545333',
      direccion: 'Calle 1',
      ubicacion: '25.36846,1.1740',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
  }
};
