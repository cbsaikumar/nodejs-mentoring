import { User } from '../models/user';

export const getAllUsers = (req, res) => {
    User.findAll().then(users => {
        console.log(`all users ${JSON.stringify(users)}`)
        return res.json(users);
    });
}