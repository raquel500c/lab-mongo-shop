// 1.2 | Insert our first users in users collection
// ------------------------------------------------
// PASTE 3 USER INSERT QUERIES HERE
/* Mongo Shell no reconoce insertOne(), usamos insert() */
db.users.insert({"firstName": "Pepe", "lastName": "Pérez"})
db.users.insert({"firstName": "Juan", "lastName": "Sin miedo"})
db.users.insert({"firstName": "Ana", "lastName": "Campo"})


// 1.3 | Insert our first products in products collection
// ------------------------------------------------------
// PASTE 3 PRODUCT INSERT QUERIES HERE
/* Mongo Shell no reconoce insertOne(), usamos insert() */
db.products.insert({
  "name": "braguels",
  "description": "Unas braguels para vestirse en verano",
  "category": "Apparel",
  "price": 0.5,
  "reviews": [{
    "name": "Pepe",
    "comment": "Tenían un agujero y me quedan grandes.",
    "stars": 1,
    "date": "2017-09-05T16:59:45.369Z"
  }]
})

// 1.4 | Getting Started with queries
// ----------------------------------
// PASTE SHOPPING CART QUERY HERE
/*no reconoce updateOne(), usamos update())*/
db.users.update({"firstName":"John"}, {$set:{"shoppingCart": []}})
db.users.update(
  { firstName: "John"},
  { $push: { shoppingCart: { $each:
     [
        ObjectId("59aeb2d2802f11d349992c77"),
        ObjectId("59aeb59d5896c9191a3417e1")
      ]
  }}}
)

// PASTE LIST PRODUCTS QUERY HERE
db.products.find().pretty()

// PASTE CATEGORY PRODUCTS QUERY HERE
db.products.find( { category: { $eq:'Kitchen'} } ).pretty()

// PASTE DELETE PRODUCT QUERY HERE
/*no reconoce deleteOne(), hemos tenido que usar remove())*/
db.products.remove( { "_id": ObjectId("59aeb5715896c9191a3417e0")})


// PASTE REVIEW QUERY HERE
/*no reconoce updateOne(), usamos update())*/
db.products.update(
  { "_id": ObjectId("59aeb2d2802f11d349992c77")},
  { $push: { reviews: { $each: [{
        "name": "Gregorio",
        "comment": "Sabe a vino, me la habéis colao",
        "stars": 2,
        "date": "2017-09-05T17:05:09.369Z"
      }]
  }}}
)
