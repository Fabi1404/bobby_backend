'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('usuarios', {
    id: {
      allowNull: false,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },
    nombre: {
      allowNull: false,
      type: Sequelize.STRING(100)
    },
    correo: {
      allowNull: false,
      type: Sequelize.STRING(50),
      unique: true
    },
    password: {
      allowNull: false,
      type: Sequelize.STRING(255)
    },
    telefono: {
      allowNull: false,
      type: Sequelize.STRING(50)
    },
    direccion: {
      allowNull: false,
      type: Sequelize.STRING(150)
    },
    ubicacion: {
      allowNull: false,
      type: Sequelize.STRING(30)
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  })
  ,
  down: (queryInterface, Sequelize) => queryInterface.dropTable('usuarios')
};
