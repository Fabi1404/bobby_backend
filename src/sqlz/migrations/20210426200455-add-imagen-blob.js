'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) =>
    await queryInterface.addColumn('fotografias', 'imagen', Sequelize.BLOB)
  ,

  down: async (queryInterface, Sequelize) =>
    await queryInterface.removeColumn('fotografias', 'imagen')
};
