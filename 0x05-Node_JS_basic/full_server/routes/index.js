/*
 * objective
 * Link the route / to the AppController
 * Link the route /students and /students/:majorto the StudentsController
 */

import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

const express = require('express');

const route = express.Router();

route.get('/', (req, res) => AppController.getHomepage(req, res));
route.get('/students', (req, res) => StudentsController.getAllStudents(req, res));
route.get('/students/:major', (req, res) => StudentsController.getAllStudentsByMajor(req, res));

export default route;
module.exports = route;
