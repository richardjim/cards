
 
  module.exports = (sequelize, DataTypes) => {
    const Task = sequelize.define('task',  {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
          },
          description: {
            type: DataTypes.STRING,
            allowNull: false,
          }
       
    });
  
    return Task;
  };
  // force: true will drop the table if it already exists
//   User.sync({force: true}).then(() => {
//     // Table created
//     return User.create({
//       firstName: 'John',
//       lastName: 'Hancock'
//     });
//   });