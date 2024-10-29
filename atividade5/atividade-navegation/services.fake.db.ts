import { cars } from "./mocks/cars";

const db = {
  all: () => cars,
  find: (id: number) => cars.filter((car) => car.id === id)[0] || null
  ,
};

export default db;
