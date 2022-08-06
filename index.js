import {PORT} from './env';
const version = require('./routes/version')
const express = require('express');
const app = express();

app.use('/',version);

app.get('/test')

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
});
