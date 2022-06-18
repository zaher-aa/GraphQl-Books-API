const getAuthorModel = (sequelize, { DataTypes }) => {
  const Author = sequelize.define('author', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });

  Author.associate = ({ Book }) => {
    Author.hasMany(Book, { onDelete: 'CASCADE' });
  };

  return Author;
};

module.exports = getAuthorModel;
