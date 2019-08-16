import {models} from '../database/connection';

const { User } = models;

export const getAllUsers = (req, res) => {
    User.findAll().then(users => {
        console.log(`all users ${JSON.stringify(users)}`)
        return res.json(users);
    });
}