const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', require('./routes/index'));

app.listen(3001, () => console.log('Aplicacao rodando porta 3001'));
