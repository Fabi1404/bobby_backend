'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('razas', {
    id: {
      allowNull: false,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },
    nombre: {
      allowNull: false,
      type: Sequelize.STRING(50)
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    //relationship fields
    tipoMascotaId: {
      type: Sequelize.UUID,
      allowNull: false,
      onDelete: 'RESTRICT',
      references: {
        model: 'tipoMascotas',
        key: 'id',
        as: 'tipoMascotaId',
      }
    }
  }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable('razas')
};
