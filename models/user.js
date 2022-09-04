import mongoose from 'mongoose';

const userschema = mongoose.Schema;

const User_Schema =  new userschema({
    userid: String,
    title: String,
    firstname: String,
    middlename: String,
    lastname: String,
    employeeid: String,
    nationalid: String,
    username: String,
    password:String,
    email:String,
    mobile:String,
    companycode: String,
    orgcode: String,
    address:{
        country: String,
        State: String,
        address1: String,
        address2: String
    },
});

export const UserModel =  mongoose.model('User', User_Schema)
