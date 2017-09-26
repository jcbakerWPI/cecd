
var sqlite3 = require('sqlite3');

// create database
var db = new sqlite3.Database('movies-baker.sqlite');

db.serialize(function() {

  // create the table
 // db.run ("DROP TABLE movieTable");
  db.run ("CREATE TABLE movieTable (title varchar(100), rating integer(1), UNIQUE(title))");

  // add starting movies to DB when run
  db.run("INSERT INTO movieTable VALUES ('Mad Max', 3)");
  db.run("INSERT INTO movieTable VALUES ('Guardians 2', 7)");
  db.run("INSERT INTO movieTable VALUES ('Wonder Woman', 10)");

  // querying data
  db.each("SELECT title, rating FROM movieTable", function(err, row) {
      console.log(row.title + ": " + row.rating);
  });

});