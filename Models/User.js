const bcrypt = require('bcrypt');
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {
  async checkPassword(loginPassword) {
    return await bcrypt.compare(loginPassword, this.password);
  }
  static associate(models) {
    this.hasMany(models.Comment, {
      foreignKey: 'user_id',
      onDelete: 'CASCADE',
    });
  }

}

User.init(
  {
    // ... other attributes ...
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    hooks: {
      beforeCreate: async (user) => {
        user.password = await bcrypt.hash(user.password, 10);
        return user;
      },
    },
    sequelize,
    modelName: 'user',
  }
);

// ... associations ...

module.exports = User;
