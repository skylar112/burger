const orm = require("../config/orm.js");

var burger = {
  all: function(cb){
    orm.all("burgers", function(res){
      cb(res)
    })
  },
  create: function(name, cb){
    orm.create("burgers", ['burgers_name', 'devoured'], [name, false], cb);
  },
  update: function(id, cb) {
    var condition = "id=" + id;
    orm.update ("burger", {
      devoured: true
    },
    condition, cb
    );
  }
};

module.exports = burger;