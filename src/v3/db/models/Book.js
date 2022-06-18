const getBookModel = (sequelize, { DataTypes }) => {
  const Book = sequelize.define('book', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    pages: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Book.associate = ({ Author }) => {
    Book.belongsTo(Author);
  };

  return Book;
};

module.exports = getBookModel;
