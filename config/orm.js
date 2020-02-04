const connection = require("../config/connection.js");


function printQuestionMarks(num) {
    let arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }

  function objToSql(ob) {
    let arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (let key in ob) {
      let value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }

  const orm = {
      all: (tableInput, cb) => {
          const queryString = "SELECT * FROM " + tableInput+ ";";
          connection.query(queryString, (err, result) => {
              if (err) throw err;
              cb(result);
          })
      },
      create: (table, cols, vals, cb) => {
          var queryString = "INSERT INTO " + table + " (" + cols.toString() +") " +
          "VALUES (" + printQuestionMarks(vals.length) + ") ";

          connection.query(queryString, val, (err, result) => {
              if (err) throw err;
              cb(result);
          });
      }
  }