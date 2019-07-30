import { getAllUsers } from "./users";

const products = [
    {
        "id": 1,
        "name": "Phone 1",
        "brand": "Samsung",
        "model": "S10",
        "price": 57000
    },
    {
        "id": 2,
        "name": "Phone 2",
        "brand": "Oneplus",
        "model": "7 Pro",
        "price": 52000
    }
]

export const getAllProducts = (req, res) => {
    return res.send(products);
}

export const getProduct = (req, res) => {
    const { id } = req.params;

    return products.filter(product => product.id == id);
}