import * as jwt from 'jsonwebtoken';
import * as config from '../config/config';

export const auth = (req, res) => {

    const {username: configUsername, password: configPassword} = config.user;
    const secret = config.secret;
    const {username, password} = req.body;

    if(username === configUsername && password === configPassword){
        const token = jwt.sign(config.user, secret);
        return res.json({
            'code': 200,
            'message': 'OK',
            'data': config.user,
            'token': token
        });
    } else{
        return res.json({
            'code': 404,
            'message': 'Not Found'
        });
    }
}