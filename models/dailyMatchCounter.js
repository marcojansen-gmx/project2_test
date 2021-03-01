const { DataTypes } = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];

const dailyMatchCounter = config.define('dailyMatchCounter', {
  numMatches: DataTypes.INTEGER,
  created_at: DataTypes.DATE
});

dailyMatchCounter.associate = (user) => {
  dailyMatchCounter.belongsTo(user, { as: 'user_id', constraints: false });
};

dailyMatchCounter.sync();

module.exports = dailyMatchCounter;
