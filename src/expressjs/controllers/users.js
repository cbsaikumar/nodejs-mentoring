const users = [
    {
        "id": 1,
        "name": "Avinash",
        "company": "Accenture",
        "age": 25
    },
    {
        "id": 2,
        "name": "Bhargava",
        "company": "EPAM Systems",
        "age": 26
    }
]

export const getAllUsers = (req, res) => {
    return res.send(users);
}