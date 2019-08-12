import { Users } from '../models/users';

export const getAllUsers = (req, res) => {
    Users.findAll().then(users => {
        console.log(`all users ${JSON.stringify(users)}`)
        return res.json(JSON.stringify(users));
    });
}