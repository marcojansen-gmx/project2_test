module.exports = (sequelize, Sequelize) => {
  const dog = sequelize.define('dog', {
    breed: {
      type: Sequelize.STRING,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    age: {
      type: Sequelize.INTEGER
    },
    sex: {
      type: Sequelize.STRING,
      allowNull: false
    },
    desexed: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    },
    allergies: {
      type: Sequelize.STRING,
      allowNull: false
    },
    chieldfriendly: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    },
    desc: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    image: {
      type: Sequelize.BLOB,
      allowNull: false
    },
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false
    }
  });

  return dog;
};

// dog.associate = (user) => {
//   // Associating Author with Posts
//   // When an Author is deleted, also delete any associated Posts
//   dog.belongsTo(user, { as: 'user_id', constraints: false });
// };
