const sequelize = require("../util/database");

const Sequelize = require("sequelize");



const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Card = require("../model/card.js")(sequelize, Sequelize);
db.Task = require("../model/task")(sequelize, Sequelize);

db.Card.hasMany(db.Task);


sequelize
.sync({force: true})
.then((result)=>{
    return db.Card.create({title: "chandler Blog"})
   console.log(result);
})
.then((result)=>{
    return db.Task.create({description: "chandler Blog"})
   console.log(result);
})
.catch((err) =>{
    console.log(err);
});
module.exports = db;
