import { Product } from '../../models/mProduct';

export const getProducts = (req, res) => {
  Product.find({}, (err, products) => {
    if (err) return res.send(`Error: ${err}`);
    return res.json(products);
  });
}

export const getAProduct = (req, res) => {
  const { id } = req.params;
  Product.findById(id, (err, product) => {
    if (err) return res.send(`Error: ${err}`);
    return res.json(product);
  });
}

export const deleteProduct = (req, res) => {
  const { id: _id } = req.params;
  Product.remove({ _id }, (err, product) => {
    if (err) return res.send(`Error: ${err}`);
    return res.send("Product successfully deleted");
  });
}

export const getProductReviews = (req, res) => {
  const { id } = req.params;
  Product.findById(id, (err, product) => {
    if (err) return res.send(`Error: ${err}`);
    return res.json(product.reviews);
  });
}

export const postProduct = (req, res) => {
  const { name, brand, price, options, reviews } = req.body;
  Product.create({
    name, brand, price, options, reviews
  }, (err, product) => {
    if (err) return res.send(`Error: ${err}`);
    return res.json(product);
  })
}