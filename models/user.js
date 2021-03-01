module.exports = (sequelize, Sequelize) => {
  const user = sequelize.define('user', {
    firstname: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastname: {
      type: Sequelize.STRING,
      allowNull: false
    },
    postcode: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false
    }
  });
  return user;
};

// user.prototype.validPassword = function (password) {
//   return bcrypt.compareSync(password, this.password);
// };
// // Hooks are automatic methods that run during various phases of the User Model lifecycle
// // In this case, before a User is created, we will automatically hash their password
// user.addHook('beforeCreate', function (user) {
//   user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
// });
