import express from 'express';
import * as cities from '../../../controllers/mongo/cities';

const mCititesRouter = express.Router();

mCititesRouterget.get('/random', cities.getRandomCity);

mCititesRouter.route("/")
  .get(cities.getCities)
  .post(cities.postCity);

mCititesRouter.route("/:id")
  .put(cities.updateCity)
  .delete(cities.deleteCity);

export default mCititesRouter;