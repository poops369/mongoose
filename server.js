const express = require("express");
const app = express();
const mongoose = require("mongoose");
const connectDB = require("./config/connectDB");

connectDB();

//Create a person with this prototype:
const personSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: Number,
    favoriteFoods: Array,
});
const Person = mongoose.model("Person", personSchema);

//  1) Create and Save a Record of a Model:
// const person = new Person({
//     name: "mahmoud",
//     age: 20,
//     favoriteFoods: ["lablabi", "kosksi"],
// });
// person.save((err, data) => {
//     err ? console.log(err) : console.log(data);
// });
// .then(result=>console.log(result))
// .catch(err=>console.log(err))

// 2)Create Many Records with model.create()
// Person.create([
//     { name: "yassmine", age: 20, favoriteFoods: ["sandwitch"] },
//     { name: "amal", age: 25, favoriteFoods: ["pizza"] },
//     { name: "aymen", age: 40, favoriteFoods: ["sushi"] },
// ])
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err));

//3)Use model.find() to Search Your Database
// Person.find((error, data) => {
//     error ? console.log(error) : console.log(data);
// });

//4)Use model.findOne() to Return a Single Matching Document from Your Database
// Person.findOne({ favoriteFoods: "pizza" }, (error, data) => {
//     error ? console.log(error) : console.log(data);
// });

//5)Use model.findById() to Search Your Database By _id
// Person.findById("608be4c63a861c1100db7cd0", (error, data) => {
//     error ? console.log(error) : console.log(data);
// });

//6) Perform Classic Updates by Running Find, Edit, then Save
// Person.findOne({ name: "yassmine" }, (error, result) => {
//     if (error) {
//         console.log(erorr);
//     } else {
//         result.favoriteFoods.push("hamburger");
//         result.save((error, updatedRecord) => {
//             console.log(updatedRecord);
//         });
//     }
// });

//7)Perform New Updates on a Document Using model.findOneAndUpdate()
// var findOneAndUpdate = function (personName, done) {
//     var ageToSet = 29;
//     Person.findOneAndUpdate(
//         { name: personName },
//         { age: ageToSet },
//         { new: true },
//         (error, updatedRecord) => {
//             if (error) {
//                 console.log(error);
//             } else {
//                 done(null, updatedRecord);
//             }
//         }
//     );
// };
//8) Delete One Document Using model.findByIdAndRemove
// Person.findByIdAndRemove("608dcaed3ca5852520bd6185", (error, deletedRecord) => {
//     if (!error) {
//         console.log(deletedRecord);
//     }
// });
//9)MongoDB and Mongoose - Delete Many Documents with model.remove()
// var removeManyPeople = function (done) {
//     var nameToRemove = "Mary";
//     Person.remove({ name: nameToRemove }, (error, JSONStatus) => {
//         if (error) {
//             console.log(error);
//         } else {
//             done(null, JSONStatus);
//         }
//     });
// };
//10) Chain Search Query Helpers to Narrow Search Results
// var querychain = function (done) {
//     var foodToSearch = "burrito";

//     Person.find({ favoriteFoods: { $all: [foodToSearch] } })
//         .sort({ name: "asc" })
//         .limit(2)
//         .select("-age")
//         .exec((error, filteredResults) => {
//             if (eroor) {
//                 console.log(error);
//             } else {
//                 done(null, filteredResults);
//             }
//         });
// };

const port = 5000;
app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
