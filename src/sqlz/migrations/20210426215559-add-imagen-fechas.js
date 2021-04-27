'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('fotografias','createdAt', Sequelize.DATE)
    await queryInterface.addColumn('fotografias','updatedAt', Sequelize.DATE)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('fotografias','createdAt')
    await queryInterface.removeColumn('fotografias','updatedAt')
  }
};
