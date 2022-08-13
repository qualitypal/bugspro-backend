import mongoose, { Schema } from 'mongoose';

const {userschema} = mongoose;
const UserSchema = new userschema({
    title: String,
    firstname: String,
    middlename: String,
    lastname: String,
    employeeid: String,
    nationalid: String,
    address:{
        country: String,
        State: String,
        address1: String,
        address2: String
    },
    companycode: String,
    orgcode: String
});

export const UserModel = new mongoose.model('User', UserSchema)
