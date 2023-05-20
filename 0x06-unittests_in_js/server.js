
const http = require('http'); /* http is a core module, so we don't need to install it.
                                It's a module that allows us to create a server. */ 

const hostname = '127.0.0.1'
const port = 3000;

/* We create a server with the createServer method. It takes a callback function as an argument.
 * The callback function takes two arguments: req and res.
 * req is the request that the client sends to the server.
 * res is the response that the server sends back to the client.
 * The callback function is called every time a request is made to the server.
 * The server is listening on port 3000. and localhost
 * uses the statusCode method to set the status code of the response to 200, which means OK.
 * uses the setHeader method to set the content type of the response to text/plain.
 * uses the end method to send the response back to the client.
 */

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end('Hello World\n');
    });

/* The server is listening on port 3000. and localhost
 * uses the listen method to start the server.
 * The listen method takes a callback function as an argument.
 * The callback function is called every time a request is made to the server.
 */
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    }
);

/* process is a global object that provides information about, and control over, the current Node.js process.
 * process.exit() method instructs Node.js to terminate the process synchronously with an exit status of code.
 * If we don't use process.exit() the server will keep running.
 */

