import jwt, { JsonWebTokenError } from 'jsonwebtoken'

exports.version = (req, res)=>{
    try{
    let payload = jwt.verify(req.headers.authorization.split(' ')[1],'kasdf834jasf83434sdf2323');
    console.log(`payload: ${JSON.stringify(payload)}`);
    res.status(200).json({'version':'0.0.1'});
    }
    catch (err){
        if(err instanceof JsonWebTokenError) {
            res.status(401).send({
               errorcode: 102,
               message: 'Unauthorized' 
            });
        }
        else{
            res.status(400).send({
                errorcode: 103,
                message: 'Bad Request'
            });
        }
        
    }

};
