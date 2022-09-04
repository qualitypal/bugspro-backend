import {UserModel} from '../models/user'
import bcrypt from 'bcrypt'

import jwt from 'jsonwebtoken'
exports.authenticate = async (req, res)=> {
     let docs = await UserModel.findOne({username:req.body.username})
        if(docs){
            const validpass =  await authenticateuser(req.body.password, docs.password);
            if(validpass){
            const JSON_WEB_SECRET_KEY = 'kasdf834jasf83434sdf2323';
            let data = {
                time: Date(),
                userId: req.body.username
            }
            const token = jwt.sign(data, JSON_WEB_SECRET_KEY);
            res.status(200).json({'token':token});
        }
        else{
            res.status(404).json({
                errorcode: 101,
                message:'Either username or password incorrect'});
        }
    }
    else{
        res.status(404).json({
            errorcode: 101,
            message: 'Either username or password incorrect'
        });
    }
    

    }

exports.register = async (req, res) => {
    const user = new UserModel({
        username: req.body.username,
        password: req.body.password
    });
  
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
   
    await user.save().then(
        (doc) => res.status(200).json(
            {username: doc.username,
             message: 'success'}));
  
};

let authenticateuser = async (reqpassword, dbpassword)=>{
    return bcrypt.compare(reqpassword, dbpassword);
}

exports.login = async (req, res) => {

}