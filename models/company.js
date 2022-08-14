import mongoose from 'mongoose';

const {companyschema} = mongoose;

const CompanySchema = new companyschema({
    companyname: String,
    type: String,
    address:{
        address1: String,
        address2: String,
        city: String,
        state: String,
        country: String,
        zipcode: String
    }
});