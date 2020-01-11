// const path = require('path');
// const jsonServer = require('json-server');

// const dbPath = path.resolve(__dirname, '../database/db.json');
// const server = jsonServer.create();
// const middleware = jsonServer.defaults();
// const endpoints = jsonServer.router(dbPath);

// server.use(middleware);
// server.use('/api', endpoints);
// server.listen(3001, () => {
//   // eslint-disable-next-line no-console
//   console.log('JSON Server listening on port 3001\n');
// });

const express = require('express');
const app = express();
const data = require('./database/data.json');

app.use(express.json());

app.get('/api/grades', (req, res) => { // get all students

});

app.get('/api/grades/:gradeId', (req, res) => { // get a student by targeting their ID

});

app.post('/api/grades', (req, res) => { // add a new student and nextId++

});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});

// need error codes
// 201- successful code
// 500 (error)
// 400 (content is a required field )
