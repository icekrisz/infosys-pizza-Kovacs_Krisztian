import { Router } from 'express';
import PizzaController from './controller/pizza.controller';
import CostumerController from './controller/costumer.controller';
import OvenController from './controller/oven.controller';

export function getRouter(): Router {
  const router = Router();

  const pizzaController = new PizzaController();
  const costumerController = new CostumerController();
  const ovenController = new OvenController();

  router.get('/pizza', pizzaController.getAll);
  router.get('/pizza/:id', pizzaController.getOne);
  router.post('/pizza', pizzaController.create);
  router.put('/pizza', pizzaController.update);
  router.delete('/pizza/:id', pizzaController.delete);

  router.get('/costumers', costumerController.getAll);
  router.get('/costumers/:id', costumerController.getOne);
  router.post('/costumers', costumerController.create);
  router.put('/costumers', costumerController.update);
  router.delete('/costumers/:id', costumerController.delete);

  router.get('/ovens', ovenController.getAll);
  router.get('/ovens/:id', ovenController.getOne);
  router.post('/ovens', ovenController.create);
  router.put('/ovens', ovenController.update);
  router.delete('/ovens/:id', ovenController.delete);

  return router;
}
