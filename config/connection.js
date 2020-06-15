//create connection to db
const mySql = require ("mysql");
const connection = mySql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "burgers_db"
});

connection.connection(function (err){
  if (err){
    console.error("connecting" + err.stack);
    return;
  } console.log("connected as" + connection.threadId);  

})

module.exports = connection;