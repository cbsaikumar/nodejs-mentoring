import {City} from '../../models/mCity';

export const getRandomCity = (req, res) => {
  City.find({}, (err, cities) => {
    if (err) return res.send(err);
    const cityIndex = Math.round(Math.random() * (cities.length - 1));
    return res.json(cities[cityIndex]);
  })
}

export const getCities = (req, res) => {
  City.find({}, (err, cities) => {
    if (err) return res.send(err);
    return res.json(cities);
  })
}

export const postCity = (req, res) => {
  const { name, country, capital, location} = req.body;
  City.create({
    name,
    country,
    capital,
    location: {
      lat: location.lat,
      long: location.long
    }
  }, (err, city) => {
    if (err) return res.send(err);
    return res.json(city);
  });
}

export const updateCity = (req, res) => {
  const { id: _id } = req.params;
  const options = {
    new: true
  }
  City.findOneAndUpdate({ _id }, req.body, options, (err, city) => {
    if (err) return res.send(err);
    return res.json(city);
  })
}

export const deleteCity = (req, res) => {
  const { id: _id } = req.params;
  City.remove({ _id }, (err, city) => {
    if (err) return res.send(err);
    return res.send("City successfully removed");
  });
}