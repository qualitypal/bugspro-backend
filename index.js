import {PORT} from './env';
import mongoose from 'mongoose';
import {DefectModel} from './models/defects';


const version = require('./routes/version');
const defects = require('./routes/defect');
const express = require('express');
const app = express();

app.use(express.json());
app.use('/',version);
app.use('/defects',defects);

app.get('/test')

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
});

connectMongo().catch(err => {
    console.log(`Error connecting Mongo ${err.message}`);
});


async function connectMongo(){
    await mongoose.connect('mongodb://localhost:27017/test');
}


