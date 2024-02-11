const express = require('express');
const app = express();
const { dbConnection } = require('./config/config');
const router = require('./routes/tasks');

app.use(express.json());

app.use('/', router);

dbConnection();

const PORT = 8080;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));