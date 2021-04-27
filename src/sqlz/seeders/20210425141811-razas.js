'use strict';

const uuid = require("uuid");

module.exports = {
  up: (queryInterface, Sequelize) => {
    const idCanino = uuid.v1()
    const idFelino = uuid.v1()
    return queryInterface.bulkInsert('tipoMascotas', [{
      id: idCanino,
      nombre: 'Canino',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: idFelino,
      nombre: 'Felino',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: uuid.v1(),
      nombre: 'Ave',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: uuid.v1(),
      nombre: 'Reptil',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
      .then(tipos => queryInterface.bulkInsert('razas', [{
        id: uuid.v1(),
        nombre: 'Pug',
        tipoMascotaId: idCanino,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: uuid.v1(),
        nombre: 'Husky',
        tipoMascotaId: idCanino,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: uuid.v1(),
        nombre: 'Cocker',
        tipoMascotaId: idCanino,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: uuid.v1(),
        nombre: 'Golden retriever',
        tipoMascotaId: idCanino,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: uuid.v1(),
        nombre: 'Pastor alemán',
        tipoMascotaId: idCanino,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: uuid.v1(),
        nombre: 'Dalmata',
        tipoMascotaId: idCanino,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: uuid.v1(),
        nombre: 'Boxer',
        tipoMascotaId: idCanino,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: uuid.v1(),
        nombre: 'Chihuahua',
        tipoMascotaId: idCanino,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: uuid.v1(),
        nombre: 'Bulldog',
        tipoMascotaId: idCanino,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: uuid.v1(),
        nombre: 'Mestizo',
        tipoMascotaId: idCanino,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: uuid.v1(),
        nombre: 'Siamés',
        tipoMascotaId: idFelino,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: uuid.v1(),
        nombre: 'Persa',
        tipoMascotaId: idFelino,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: uuid.v1(),
        nombre: 'Ragdoll',
        tipoMascotaId: idFelino,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: uuid.v1(),
        nombre: 'Somalí',
        tipoMascotaId: idFelino,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: uuid.v1(),
        nombre: 'Siberiano',
        tipoMascotaId: idFelino,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: uuid.v1(),
        nombre: 'Mestizo',
        tipoMascotaId: idFelino,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {})
      );

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
