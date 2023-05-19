/*
 * objective a program named 1-stdin.js that will be executed through command line:
 * It should display the message Welcome to Holberton School, what is your name?
 * The user should be able to input their name on a new line
 * The program should display Your name is: INPUT
 * When the user ends the program, it should display This important software
 * is now closing (followed by a new line)
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Welcome to Holberton School, what is your name?\n', (answer) => {
  console.log(`Your name is: ${answer}`);
  rl.close();
});

rl.on('close', () => {
  console.log('This important software is now closing');
  process.exit(0);
});
