const express = require('express');
const app = express();
const dbConnection = require('./config/config')
const router = require('./routes/tasks');
const dotenv = require('dotenv').config();
const swaggerUI = require('swagger-ui-express')
const docs = require('./docs/index')

app.use(express.json());

app.use('/', router);

dbConnection();

app.use('/api-docs', swaggerUI.serve,swaggerUI.setup(docs))

app.listen(process.env.PORT, () => console.log(`Server started on port ${process.env.PORT}`));