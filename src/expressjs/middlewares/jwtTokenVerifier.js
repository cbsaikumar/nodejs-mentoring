import * as config from '../config/config';
import * as jwt from 'jsonwebtoken';    

export const isAuthenticated = (req, res, next) => {
    try{
        const { token } = req.headers;
        const {username: configUsername, password: configPassword} = config.user;
        const { secret } = config;

        if(!token) 
            return res.json({
                code: 401,
                message: 'Unautherized',
                data: 'No token passed'
            });

        return jwt.verify(token, secret, (err, authData) => {
            if(err){
                res.json({
                    code: 401,
                    message: 'Unauthorized',
                    data: 'Incorrect token'
                });
            } else{
                const {username, password} = authData;
                if(username !== configUsername || password !== configPassword)
                    return res.json({
                        code: 401,
                        message: 'Unauthorized',
                        data: 'Username/password might have been malformed'
                    });
                                
                return next();
            }
        });
    } catch(err){
        console.log(err)
        return res.json(err);
    }
}