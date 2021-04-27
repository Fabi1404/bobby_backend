'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('registros', {
    id: {
      allowNull: false,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },
    nombre: {
      allowNull: false,
      type: Sequelize.STRING(50)
    }
  }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable('registros')
};
