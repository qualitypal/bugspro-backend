import mongoose from 'mongoose';

const {Schema} = mongoose;

const defectSchema = new Schema({
    title: String,
    description: String,
    reporter: String,
    assignee: String,
    rank: Number,
    priority: String,
    severity: String,
    creationdate: Date,
    updatedate: Date
});

export const DefectModel = mongoose.model('Defect', defectSchema);;

