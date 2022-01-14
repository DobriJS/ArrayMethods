/* const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
 */

/* const properties = Object.keys(openingHours);
console.log(properties);
let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);
// Property VALUES
const values = Object.values(openingHours);
console.log(values);
// Entire object
const entries = Object.entries(openingHours);
// console.log(entries);
// [key, value]
for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
} */

// Optional Chaining
/* if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);
// console.log(restaurant.openingHours.mon.open);
// WITH optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);
// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}
// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist'); */

/* class Parking {
  constructor(capacity) {
    this.capacity = capacity;
    this.vehicles = [];
  }

  findByCarNumber(carNumber) {
    return this.vehicles.find((car) => car.carNumber === carNumber);
  }

  addCar(carModel, carNumber) {
    if (this.capacity - 1 < 0) {
      throw new Error('Not enough parking space.');
    }
    this.capacity -= 1;
    this.vehicles.push({ carModel, carNumber, payed: false });

    return `The ${carModel}, with a registration number ${carNumber}, parked.`;
  }

  removeCar(carNumber) {
    const car = this.findByCarNumber(carNumber);
    if (car === undefined)
      throw new Error(`The car, you're looking for, is not found.`);
    if (car.payed === false)
      throw new Error(
        `${carNumber} needs to pay before leaving the parking lot.`
      );
    this.vehicles.splice(this.vehicles.indexOf(car), 1);
    this.capacity += 1;

    return `${carNumber} left the parking lot.`;
  }

  pay(carNumber) {
    const car = this.findByCarNumber(carNumber);
    if (car === undefined)
      throw new Error(`"${carNumber} is not in the parking lot.`);
    if (car.payed === true)
      throw new Error(`${carNumber}'s driver has already payed his ticket.`);
    car.payed = true;

    return `${carNumber}'s driver successfully payed for his stay.`;
  }

  sortByCarName(car, car1) {
    return car.carNumber.localeCompare(car1.carNumber);
  }

  printCarInfo(car) {
    return `${car.carModel} == ${car.carNumber} - ${
      car.payed ? `Has payed` : `Not payed`
    }`;
  }

  getStatistics(carNumber) {
    if (carNumber === undefined) {
      return `The Parking Lot has ${this.capacity} empty spots left.
          ${this.vehicles
            .sort(this.sortByCarNumber)
            .map(this.printCarInfo)
            .join('\n')}`;
    } else {
      const car = this.findByCarNumber(carNumber);
      return this.printCarInfo(car);
    }
  }
}

const parking = new Parking(12);
console.log(parking.addCar('Volvo t600', 'TX3691CA'));
console.log(parking.getStatistics());
console.log(parking.pay('TX3691CA'));
console.log(parking.removeCar('TX3691CA')); */

/* class ChristmasDinner {
  budget;
  dishes;
  products;
  guests;
  constructor(b) {
    this.budget = b;
    this.dishes = [];
    this.products = [];
    this.guests = {};
  }

  set budget(n) {
    if (n < 0) {
      throw new Error('The budget cannot be a negative number');
    }
    this.budget = n;
  }

  shopping([name, price]) {
    if (price > this.budget)
      throw new Error('Not enough money to buy this product');
    this.products.push(name);
    this.budget -= price;

    return `You have successfully bought ${name}!`;
  }

  recipes({ recipeName, productsList }) {
    if (!productsList.every((product) => this.products.includes(product)))
      throw new Error('We do not have this product');

    this.dishes.push({ recipeName, productsList });

    return `${recipeName} has been successfully cooked!`;
  }

  inviteGuests(name, dish) {
    if (this.guests[name] !== undefined)
      throw new Error('This guest has already been invited');
    if (this.dishes.find((x) => x.recipeName === dish) === undefined)
      throw new Error('We do not have this dish');

    this.guests[name] = dish;

    return `You have successfully invited ${name}!`;
  }

  showAttendance() {
    return Object.entries(this.guests)
      .map(
        ([name, dish]) =>
          `${name} will eat ${dish}, which consists of ${this.dishes
            .find((x) => x.recipeName === dish)
            .productsList.join(', ')}`
      )
      .join('\n');
  }
}

let dinner = new ChristmasDinner(400);
dinner.shopping(['Salt', 10]);
dinner.shopping(['Beans', 30]);
dinner.shopping(['Cabbage', 40]);
dinner.shopping(['Rice', 20]);
dinner.shopping(['Savory', 10]);
dinner.shopping(['Peppers', 10]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);
dinner.recipes({
  recipeName: 'Oshav',
  productsList: ['Fruits', 'Honey'],
});
dinner.recipes({
  recipeName: 'Folded cabbage leaves filled with rice',
  productsList: ['Cabbage', 'Rice', 'Salt', 'Savory'],
});
dinner.recipes({
  recipeName: 'Peppers filled with beans',
  productsList: ['Beans', 'Peppers', 'Salt'],
});
dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans'); */

/* class Bank {
  #bankName;
  constructor(n) {
    this.#bankName = n;
    this.allCustomers = [];
  }

  customerExists = (id) => this.allCustomers.some((x) => x.personalId === id);
  getCustomer = (id) => this.allCustomers.find((x) => x.personalId === id);

  newCustomer({ firstName, lastName, personalId }) {
    if (this.customerExists(personalId))
      throw new Error(`${firstName} ${lastName} is already our customer!`);
    this.allCustomers.push({ firstName, lastName, personalId });

    return `${firstName} ${lastName} ${personalId}`;
  }

  depositMoney(personalId, amount) {
    if (!this.getCustomer(personalId))
      throw new Error(`We have no customer with this ID!`);
    const customer = this.getCustomer(personalId);
    customer.totalMoney = (customer.totalMoney || 0) + Number(amount);
    customer.transactions = customer.transactions || [];
    customer.transactions.push(
      `${customer.firstName} ${customer.lastName} made deposit of ${amount}$!`
    );
    return `${customer.totalMoney}$`;
  }

  withdrawMoney(personalId, amount) {
    if (!this.getCustomer(personalId))
      throw new Error(`We have no customer with this ID!`);
    const customer = this.getCustomer(personalId);
    customer.totalMoney = customer.totalMoney || 0;

    if (customer.totalMoney - amount < 0) {
      throw new Error(
        `${customer.firstName} ${customer.lastName} does not have enough money to withdraw that amount!`
      );
    }

    customer.totalMoney -= amount;
    customer.transactions = customer.transactions || [];

    customer.transactions.push(
      `${customer.firstName} ${customer.lastName} withdrew ${amount}$!`
    );

    return `${customer.totalMoney}$`;
  }

  customerInfo(personalId) {
    if (!this.getCustomer(personalId))
      throw new Error(`We have no customer with this ID!`);

    if (!this.customerExists(personalId))
      throw new Error(`We have no customer with this ID!`);

    const customer = this.getCustomer(personalId);

    return `Bank name: ${this.#bankName}
              Customer name: ${customer.firstName} ${customer.lastName}
              Customer ID: ${customer.personalId}
              Total Money: ${customer.totalMoney}$
              Transactions:
                  ${customer.transactions
                    .reverse()
                    .map((x, i, arr) => `${arr.length - i}. ${x}`)
                    .join('\n')}`;
  }
}

let bank = new Bank('SoftUni Bank');
console.log(
  bank.newCustomer({
    firstName: 'Svetlin',
    lastName: 'Nakov',
    personalId: 6233267,
  })
);

bank.newCustomer({
  firstName: 'Mihaela',
  lastName: 'Mileva',
  personalId: 4151596,
});
bank.depositMoney(6233267, 250);
bank.depositMoney(6233267, 250);
bank.depositMoney(4151596, 555);
bank.withdrawMoney(6233267, 125);
bank.customerInfo(6233267); */

/* const whosOnline = (friends) => {
  const friendsActivity = {
    online: [],
    offline: [],
    away: [],
  };
  for (let user of friends) {
    let [username, status, lastActivity] = user;
  }
};

console.log(
  whosOnline([
    {
      username: 'David',
      status: 'online',
      lastActivity: 10,
    },
    {
      username: 'Lucy',
      status: 'offline',
      lastActivity: 22,
    },
    {
      username: 'Bob',
      status: 'online',
      lastActivity: 104,
    },
  ])
); */
/* const parkingLOT = (cars) => {
  const inputData = cars.map((x) => x.split(', '));
  const parking = [];
  for (let data of inputData) {
    const [movement, carNumber] = data;
    if (movement === 'IN' && !parking.includes(carNumber)) {
      parking.push(carNumber);
    }
    if (movement === 'OUT' && parking.includes(carNumber)) {
      parking.splice(
        parking.findIndex((x) => x === carNumber),
        1
      );
    }
  }
  return parking;
};
console.log(
  parkingLOT([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU',
  ])
);
 */
