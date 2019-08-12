export default users = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Users', {
          id: {
            allowNull: false,
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
          username: {
            type: Sequelize.STRING
          },
          password: {
            type: Sequelize.STRING
          },
          updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
          },
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE
          }
        });
      },
      down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Users');
      }
}