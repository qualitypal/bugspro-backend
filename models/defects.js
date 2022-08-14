import mongoose from 'mongoose';

const {Schema} = mongoose;

const defectSchema = new Schema({
    defectid: String,
    title: String,
    description: String,
    reporter: String,
    assignee: String,
    rank: Number,
    priority: String,
    severity: String,
    creationdate: Date,
    updatedate: Date,
    product: String,
    status: String

});

export const DefectModel = mongoose.model('Defect', defectSchema);;

