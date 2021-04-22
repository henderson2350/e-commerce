const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./routes');
// import sequelize connection

// const Category = require('./models/Category')
// const Product = require('./models/Product')
// const Tag = require('./models/Tag')
// const ProductTag = require('./models/ProductTag')


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turning on our routes
app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({force : true}).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
})

