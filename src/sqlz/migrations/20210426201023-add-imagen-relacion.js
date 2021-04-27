'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('fotografias', 'mascotaId', {
      type: Sequelize.UUID,
      allowNull: false,
      onDelete: 'RESTRICT',
      references: {
        model: 'mascotas',
        key: 'id',
        as: 'mascotaId',
      }
    })
  },

  down: async (queryInterface, Sequelize) => await queryInterface.removeColumn('fotografias', 'mascotaId')
};
