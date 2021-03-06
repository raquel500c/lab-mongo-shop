const MongoDB = require('mongodb');
const users = 'users';
const products = 'products';
const shoppingCarts = 'shoppingCarts';

class Database {

  constructor({ host, database }) {
    this.url = `mongodb://${host}/${database}`;
  }

  connect(callback = (error, database) => {}){
    if (this.database){
      callback(null, this.database);
    } else {
      MongoDB.MongoClient.connect(this.url, (error, database) => {
        if (error){
          callback(error);
        } else {
          this.database = database;
          callback(null, this.database);
        }
      });
    }
  }

  close(callback = (error) => {}){
    if (this.database){
      this.database.close(true, callback);
    } else {
      callback();
    }
  }
  // Insert a user
  // user is the object to insert into the collection
  // callback has two arguments error and result
  insertUser(user, callback = (error, result) => {}){
    this.connect((error, database) => {
      if (error){
        callback(error);
      } else {
        // LAB 1
        database.collection('users').insertOne(user, callback);
        //callback('Error inserting user');
      }
    });
  }

  listUsers(callback = (error, users) => {}) {
    this.connect((error, database) => {
      if (error){
        callback(error);
      } else {
        //  LAB 2
        database.collection('users').find().toArray(callback);
        //callback('Error listing users');
      }
    });
  }

  deleteUser( firstName, callback = (error, result) => {}) {
    this.connect((error, database) => {
      if (error){
        callback(error);
      } else {
        //  LAB 3
        database.collection('users').deleteOne(database.collection('users').firstName, callback)
        //callback('Error deleting user');
      }
    });
  }

  insertProduct(product, callback = (error, result) => {}){
    this.connect((error, database) => {
      if (error){
        callback(error);
      } else {
        // LAB 4
        database.collection('products').insertOne(product, callback);
        //callback('Error inserting product');
      }
    });
  }

  listProducts(callback = (error, products) => {}) {
    this.connect((error, database) => {
      if (error){
        callback(error);
      } else {
        // LAB 5
        database.collection('products').find().toArray(callback);
        //callback('Error listing products');
      }
    });
  }

  deleteProduct( productName, callback = (error, result) => {}) {
    this.connect((error, database) => {
      if (error){
        callback(error);
      } else {
        // LAB 6
        database.collection('products').deleteOne(database.collection('products').name, callback)
        //callback('Error deleting product');
      }
    });
  }

  addProductToShoppingCart({userFirstName, productName}, callback = (error) => {}){
    this.connect((error, database) => {
      if (error) {
        callback(error);
      } else {
        // LAB 7
        // Implement the query to buy a product
        // userFirstName is the name of user who purchase the product
        // productName is the name of the product that we want to buy
        // Think if you may need to implement two queries chained
        // remeber once it's finish to comment callback('Error buying product');

        callback('Error buying product');
      }
    });
  }

  addReviewToProduct( {productName, review}, callback = (messageResult) => {}){
    this.connect((error, database) => {
      if (error) {
        callback(error)
      } else {
        // LAB 8
        // Implement the query to review a product
        // productName is the name of the product to review
        // review is the document to insert
        // remeber once it's finish to comment callback('Error reviewing product');

        callback('Error reviewing product');
      }
    });
  }
}

module.exports = Database;
