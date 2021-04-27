'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('mascotas', {
    id: {
      allowNull: false,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },
    nombre: {
      allowNull: false,
      type: Sequelize.STRING(50),
      defaultValue: 'sin nombre'
    },
    edad: {
      allowNull: false,
      type: Sequelize.INTEGER,
      defaultValue: 1
    },
    color: {
      allowNull: false,
      type: Sequelize.STRING(50)
    },
    tamaño: {
      type: Sequelize.ENUM('pequeño', 'mediano', 'grande')
    },
    sexo: {
      allowNull: false,
      type: Sequelize.BOOLEAN
    },
    estadoSalud: {
      allowNull: false,
      type: Sequelize.ENUM('saludable', 'medicado', 'enfermo')
    },
    estado: {
      allowNull: false,
      type: Sequelize.ENUM('encontrado', 'perdido')
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
    usuarioId: {
      type: Sequelize.UUID,
      allowNull: false,
      onDelete: 'RESTRICT',
      references: {
        model: 'usuarios',
        key: 'id',
        as: 'usuarioId',
      }
    },
    razaId: {
      type: Sequelize.UUID,
      allowNull: false,
      onDelete: 'RESTRICT',
      references: {
        model: 'razas',
        key: 'id',
        as: 'razaId',
      }
    }
  }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable('mascotas')
};
