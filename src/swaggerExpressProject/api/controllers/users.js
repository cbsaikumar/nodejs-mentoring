import {User} from '../../../expressjs/models/mUser';

export const getUsers = (req, res) => {
  User.find({}, (err, users) => {
    if (err) return res.send(err);
    return res.json(users);
  });
}

export const postUser = (req, res) => {
  const { password, username, email } = req.body;
  User.create({
    password, username, email
  }, (err, user) => {
    if (err) return res.send(err);
    return res.json(user);
  });
}

export const deleteUser = (req, res) => {
  const { id: _id } = req.params;
  User.remove({ _id }, (err, data) => {
    if(err) res.send(err);
    return res.send("User successfully removed")
  });
}