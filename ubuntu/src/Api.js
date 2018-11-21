import donald from './assets/donald.png';
import bob from './assets/bob.jpg';

const list = [
  {
    id: 0,
    name: 'Bob the Builder',
    started: '24.2.1990',
    motto: "It's better to do one job well, than to do two jobs not so well.",
    image: bob
  },
  {
    id: 1,
    name: 'Donald Duck',
    started: '1.1.2017',
    motto: 'Quack!',
    image: donald
  }
];

export default {
  getEmployee: employeeId => {
    return new Promise((resolve, reject) => {
      try {
        const employee = list[employeeId];
        resolve(employee);
      } catch (err) {
        reject(err);
      }
    });
  }
};
