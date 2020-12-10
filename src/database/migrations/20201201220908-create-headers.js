module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.createTable('headers', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      text: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sender: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      is_completed: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      is_started: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      start_time: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    }),

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('headers');
  },
};
