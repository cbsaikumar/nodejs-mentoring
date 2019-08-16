import { models } from '../database/connection';

const { Product } = models;
export const getAllProducts = (req, res) => {
    Product.findAll().then(products => {
        console.log(`All products ${JSON.stringify(products)}`);
        return res.json(products);
    })
    .catch(err => res.send(`Error: ${err}`));
}

export const getProduct = (req, res) => {
    const { id } = req.params;
    Product.findByPk(id).then(product => {
        console.log(`Product ${JSON.stringify(product)}`);
        return res.json(product);
    })
    .catch(err => res.send(`Error: ${err}`));
}

export const getProductReviews = (req, res) => {
    const { id } = req.params;

    Product.findOne({
        where: {
            id
        },
        attributes: ['reviews']
    }).then(reviews => {
        console.log(`Review with product id ${id} = ${JSON.stringify(reviews)}`);
        return res.json(reviews);
    })
    .catch(err => res.send(`Error: ${err}`));
}

export const postProduct = (req, res) => {
    const {id, name, brand, model, price, reviews} = req.body;
    
    Product.create({id, name, brand, model, price, reviews}).then(product=> {
        console.log(`product added ${JSON.stringify(product)}`);
        res.json(product);
    })
    .catch(err => res.send(`Error: ${err}`));
}