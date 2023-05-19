/*
 * objective: create a small HTTP server using the http module:
 * It should be assigned to the variable app and this one must be exported
 * The server should listen on port 1245
 * The header of the response must contain Content-Type: text/plain
 * When the URL path is /, it should display Hello Holberton School! in the
   page body
 * When the URL path is /students, it should display This is the list of our
   students followed by the same content as the file 3-read_file_async.js (with
   and without the students) - the name of the students must be passed as
   argument of the file
 * CSV file can contain empty lines (at the end) - and they are not a valid
   student!
 */

const http = require('http');
const countStudents = require('./3-read_file_async');

const hostname = '127.0.0.1';
const port = 1245;

const students = process.argv[2];
const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.setHeader('Content-Type', 'text/plain');
    try {
      const data = await countStudents(students);
      res.statusCode = 200;
      res.write('This is the list of our students\n');
      res.end(`${data}`);
    } catch (err) {
      res.statusCode = 500;
      res.end(err.message);
    }
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
