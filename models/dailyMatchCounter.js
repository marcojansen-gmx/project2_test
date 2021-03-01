// module.exports = (sequelize, Sequelize) => {
//   const dailyMatchCounter = sequelize.define('dailyMatchCounter', {
//     title: {
//       numMatches: Sequelize.INTEGER
//     },
//     description: {
//       created_at: Sequelize.DATE
//     }
//   });
//   return dailyMatchCounter;
// };

// dailyMatchCounter.associate = (user) => {
//   // Associating Author with Posts
//   // When an Author is deleted, also delete any associated Posts
//   dailyMatchCounter.belongsTo(user, { as: 'user_id', constraints: false });
// };
