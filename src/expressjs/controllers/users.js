import * as users from '../config/users';

export const getAllUsers = (req, res) => {
    return res.send(users.default);
}