require('dotenv').config();
const Sequelize = require('sequelize');
const getAuthorModel = require('./Author');
const getBookModel = require('./Book');

const { DB_URL } = process.env;

const sequelize = new Sequelize(DB_URL, {
  dialect: 'postgres',
  logging: false,
});

const models = {
  Author: getAuthorModel(sequelize, Sequelize),
  Book: getBookModel(sequelize, Sequelize),
};

Object.keys(models).forEach((key) => {
  if ('associate' in models[key]) models[key].associate(models);
});

module.exports = { sequelize, models };
