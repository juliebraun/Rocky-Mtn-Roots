var orm = require("../config/orm.js");

var item = {
  all: function(cb) {
    orm.all("items", function(res) {
      cb(res);
    });
  }
  //   update: function(id, cb) {
  //     orm.update("items", id, cb);
  //   },

  //   create: function(name, cb) {
  //     orm.create("items", name, cb);
  //   }
};

module.exports = item;
