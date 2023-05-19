const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      // If error, reject with error object
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }
      // If success, resolve with number of students
      const lines = data.split(/\r?\n/);
      let count = 0;
      const fields = {};
      for (const line of lines) {
        if (line !== '') {
          count += 1;
          const student = line.split(',');
          if (!fields[student[3]]) {
            fields[student[3]] = [];
          }
          fields[student[3]].push(student[0]);
        }
      }
      console.log(`Number of students: ${count}`);
      for (const field in fields) {
        if (field) {
          const list = fields[field];
          console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
        }
      }
      resolve();
    });
  });
}

module.exports = countStudents;
