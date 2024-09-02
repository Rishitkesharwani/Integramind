use("a1");
// db.users.insertOne({
//     _id:100,
//     name:"user 2",
//     status:"active",
// });
// db.users.find({});

// db.user.updateOne({
//     _id:2,
// },
// {
//     $set:{
//         status:"inactive",
//     },
// });


// db.users.findOne({_id: 2});


// db.users.count({_id:2})

// db.users.replaceOne({_id:2,

// },
// {
//     $set:{
//         id:24,
//     }
// })





// db.users.insertMany([
//     {
//         "_id":3,
//     "name":"Rishit kesharwani",
//     "status":"Active"
//     },
//     {
//         "_id":4,
//     "name":"xYZ Gupta",
//     "status":"Active"
//     },
// ]);

// db.users.findOne({"_id":2});


// db.users.find({_id: {$gte:5}})
// db.users.find({_id: {$lte:5}})
// db.users.find({_id: {$in :[5,10]}})

// db.users.find({_id: {$gte:5}})


// db.users.insertOne({
//     _id:10,
//     name:"user 2",
//     price:1000,
//     status:"active",
// });


// db.users.insertMany([
//     {
//         _id: 11,
//         name: "user dd",
//         price: 1000,
//         status: "active"
//     },
//     {
//         _id: 12,
//         name: "user 2ss",
//         price: 1000,
//         status: "active"
//     },
//     {
//         _id: 13,
//         name: "user 2dd",
//         price: 1000,
//         status: "active"
//     },
//     {
//         _id: 14,
//         name: "user ddd2",
//         price: 1000,
//         status: "active"
//     },
//     {
//         _id: 15,
//         name: "user dd2",
//         price: 1000,
//         status: "active"
//     },
//     {
//         _id: 16,
//         name: "user we2",
//         price: 1000,
//         status: "active"
//     },
//     {
//         _id: 17,
//         name: "user dd2",
//         price: 1000,
//         status: "active"
//     },
//     {
//         _id: 18,
//         name: "user dd2",
//         price: 1000,
//         status: "active"
//     },
//     {
//         _id: 19,
//         name: "user dd2",
//         price: 1000,
//         status: "active"
//     }
// ])

db.products.aggregate([{
    $match: {
      _id:{
        $gte:5,
      },
      status:"active",
    },
},
{
    $group:{
        _id:null,
        total:{
            $sum:"$price",
        },
    },
},
{
    $project: {
      _id:0,
      "Product Total": "$total",
    },
},
]);


// Read
// - find(query, projection) - returns array or empty array
// - findOne - returns object or null

// Write
// - insertOne
// - insertMany

// Update
// - updateOne
//   - $set
//   - $unset
//   - $inc
//   - $push
//   - $pull
//   
// - updateMany

// Delete
// - deleteOne
// - deleteMany
// keep
// Pinned
// Aggregation
// - aggregate
// - pipeline
//   - $match
//   - $group
//   - $project
//   - $sort
//   - $limit
//   