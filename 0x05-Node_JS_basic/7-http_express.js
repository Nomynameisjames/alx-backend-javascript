/*
 * objective recreate the small HTTP server using Express:
 * It should be assigned to the variable app and this one must be exported
 * The server should listen on the port 1245
 * It should return plain text
 * When the URL path is /, it should return Hello Holberton School!
 * When the URL path is /students, it should display This is the list of our
   students followed by the same content as the file 3-read_file_async.js (with
   and without the database) - the name of the database must be passed as
   argument of the file
 * CSV file can contain empty lines (at the end) - and they are not a valid
   student!
 */

const express = require('express');

const countsStudents = require('./3-read_file_async');

const app = express();
const port = 1245;
const host = '127.0.0.1';

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countsStudents(process.argv[2]).then((data) => {
    res.send(`This is the list of our students\n${data.join('\n')}`);
  }).catch((err) => {
    res.send(`This is the list of our students\n${err.message}`);
  });
});

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});

module.exports = app;
