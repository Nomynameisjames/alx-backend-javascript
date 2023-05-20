/*
 * objective create a function named readDatabase that accepts a file path as
   argument:
 *  should read the database asynchronously
 *  It should return a promise
 *  When the file is not accessible, it should reject the promise with the error
 *  When the file can be read, it should return an object of arrays of the
    firstname of students per fields
 */

const fs = require('fs');

const readDatabase = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) reject(Error('Cannot load the database'));
    if (data) {
      const lines = data.split('\n');
      const fields = lines.filter((line) => line.length > 0);
      const database = {};
      fields.forEach((field) => {
        const [fieldKey, fieldValue] = field.split(',');
        if (!database[fieldKey]) database[fieldKey] = [];
        database[fieldKey].push(fieldValue);
      });
      resolve(database);
    }
  });
});

module.exports = readDatabase;
