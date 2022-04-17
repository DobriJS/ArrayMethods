// Lucian's Luscious Lasagna --------- //

const PREPARATION_MINUTES_PER_LAYER = 2;
const EXPECTED_MINUTES_IN_OVEN = 40;

function remainingMinutesInOven(actualMinutesInOven) {
  return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
}

function preparationTimeInMinutes(numberOfLayers) {
  return PREPARATION_MINUTES_PER_LAYER * numberOfLayers;
}

function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  return preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven;
}

// Annalyn's Infiltration ----------- //

function canExecuteFastAttack(knightIsAwake) {
  if (!knightIsAwake) {
    return true;
  }
  return false;
}

function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  return knightIsAwake || archerIsAwake || prisonerIsAwake;
}

function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  return !archerIsAwake && prisonerIsAwake;
}

function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent
) {
  return (
    (prisonerIsAwake && !knightIsAwake && !archerIsAwake) ||
    (!archerIsAwake && petDogIsPresent)
  );
}

// Bank Account -------------- //

class BankAccount {
  constructor() {
    this._balance = 0;
    this.isOpen = false;
  }

  open() {
    if (this.isOpen) {
      throw new ValueError();
    }
    this.isOpen = true;
  }

  close() {
    if (!this.isOpen) {
      throw new ValueError();
    }
    this.isOpen = false;
    this._balance = 0;
  }

  deposit(amount) {
    if (!this.isOpen || amount < 0) {
      throw new ValueError();
    }
    this._balance += amount;
  }

  withdraw(amount) {
    if (!this.isOpen || amount > this._balance || amount < 0) {
      throw new ValueError();
    }
    this._balance -= amount;
  }

  get balance() {
    if (!this.isOpen) {
      throw new ValueError();
    }
    return this._balance;
  }
}

class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}

// Freelancer Rates ------------ //

function dayRate(ratePerHour) {
  return 8 * ratePerHour;
}

function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / dayRate(ratePerHour));
}

function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const fullMonths = Math.floor(numDays / 22);
  const remainingDays = numDays % 22;
  const fullMonthPrice = fullMonths * 22 * dayRate(ratePerHour);
  return Math.ceil(
    fullMonthPrice -
      discount * fullMonthPrice +
      remainingDays * dayRate(ratePerHour)
  );
}

// Poetry Club Door Policy ------------- //

function frontDoorResponse(line) {
  return line[0];
}

function frontDoorPassword(word) {
  return word[0].toUpperCase() + word.slice(1, word.length).toLowerCase();
}

function backDoorResponse(line) {
  return line.trimEnd().slice(-1);
}

function backDoorPassword(word) {
  return word[0].toUpperCase() + word.slice(1, word.length) + ', please';
}

// Bird Watcher ------------ ///

function totalBirdCount(birdsPerDay) {
  let count = 0;
  for (let i = 0; i < birdsPerDay.length; i++) {
    count += birdsPerDay[i];
  }
  return count;
}

function birdsInWeek(birdsPerDay, week) {
  const idx = (week - 1) * 7;
  const totalCount = birdsPerDay.slice(idx, idx + 7);
  return totalBirdCount(totalCount);
}

function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i++) {
    if (i % 2 === 0) {
      birdsPerDay[i]++;
    }
  }
  return birdsPerDay;
}

// Lucky Numbers -------------- //

function twoSum(array1, array2) {
  const slot1 = array1.join('');
  const slot2 = array2.join('');
  return Number(slot1) + Number(slot2);
}

function luckyNumber(value) {
  const reversed = String(value).split('').reverse().join('');
  return reversed == value;
}

function errorMessage(input) {
  if (!input) return 'Required field';
  if (input == 0 || !Number(input)) return 'Must be a number besides 0';
  return '';
}

// Mixed Juice --------------- //

function timeToMixJuice(name) {
  const juicesPreparationTimeInMin = {
    'Pure Strawberry Joy': 0.5,
    Energizer: 1.5,
    'Green Garden': 1.5,
    'Tropical Island': 3,
    'All or Nothing': 5
  };
  return juicesPreparationTimeInMin[name]
    ? juicesPreparationTimeInMin[name]
    : 2.5;
}

function limesToCut(wedgesNeeded, limes) {
  let limesWedges = [];

  for (let i = 0; i < limes.length; i++) {
    let wedges = 0;
    switch (limes[i]) {
      case 'small':
        wedges = 6;
        break;
      case 'medium':
        wedges = 8;
        break;
      case 'large':
        wedges = 10;
        break;
    }
    limesWedges.push(wedges);
  }

  let i = 0;
  let wedgesHad = 0;

  while (wedgesHad < wedgesNeeded) {
    wedgesHad += limesWedges[i];
    if (i < limesWedges.length) {
      i++;
    }
  }
  return i;
}

function remainingOrders(timeLeft, orders) {
  const unfinishedOrders = [...orders];
  while (timeLeft > 0 && unfinishedOrders.length > 0) {
    timeLeft -= timeToMixJuice(unfinishedOrders.shift());
  }
  return unfinishedOrders;
}

// High Score Board ------------------ //

function createScoreBoard() {
  const highScore = { 'The Best Ever': 1000000 };
  return highScore;
}

function addPlayer(scoreBoard, player, score) {
  scoreBoard[player] = score;
  return scoreBoard;
}

function removePlayer(scoreBoard, player) {
  delete scoreBoard[player];
  return scoreBoard;
}

function updateScore(scoreBoard, player, points) {
  scoreBoard[player] += points;
  return scoreBoard;
}

function applyMondayBonus(scoreBoard) {
  for (let key in scoreBoard) {
    scoreBoard[key] += 100;
  }
  return scoreBoard;
}

function normalizeScore(params) {
  return params.normalizeFunction(params.score);
}

// Lasagna Master ------------------ //

function cookingStatus(timer) {
  if (timer === 0) {
    return 'Lasagna is done.';
  }
  if (timer === undefined) {
    return 'You forgot to set the timer.';
  }
  return 'Not done, please wait.';
}

function preparationTime(layers, averageTimePerLayerInMinutes = 2) {
  return layers.length * averageTimePerLayerInMinutes;
}

function quantities(layers) {
  const sauceNeededPerLayerInLitres = 0.2;
  const lasagnaNeededPerPayerInGrams = 50;
  let noodles = 0;
  let sauce = 0;

  for (let ing of layers) {
    if (ing === 'sauce') {
      sauce++;
    }
    if (ing === 'noodles') {
      noodles++;
    }
  }
  return {
    noodles: noodles * lasagnaNeededPerPayerInGrams,
    sauce: sauce * sauceNeededPerLayerInLitres
  };
}

function addSecretIngredient(friendsList, myList) {
  const secret = friendsList[friendsList.length - 1];
  myList.push(secret);
}

function scaleRecipe(recipe, portions = 1) {
  const scaledPortions = { ...recipe };
  const factor = portions / 2;
  for (let ingredient in scaledPortions) {
    scaledPortions[ingredient] *= factor;
  }
  return scaledPortions;
}

// Custom Signs ------------------ //

function buildSign(occasion, name) {
  return `Happy ${occasion} ${name}!`;
}

function buildBirthdaySign(age) {
  return age < 50
    ? 'Happy Birthday! What a young fellow you are.'
    : 'Happy Birthday! What a mature fellow you are.';
}

function graduationFor(name, year) {
  return `Congratulations ${name}!\nClass of ${year}`;
}

function costOf(sign, currency) {
  const basePrice = 20;
  const cost = sign.length * 2;
  const finalPrice = basePrice + cost;
  return `Your sign costs ${finalPrice.toFixed(2)} ${currency}.`;
}

// Elyses Enchantments --------------- //

function getItem(cards, position) {
  return cards[position];
}

function setItem(cards, position, replacementCard) {
  cards[position] = replacementCard;
  return cards;
}

function insertItemAtTop(cards, newCard) {
  cards.push(newCard);
  return cards;
}

function removeItem(cards, position) {
  cards.splice(position, 1);
  return cards;
}

function removeItemFromTop(cards) {
  if (cards.length > 1) {
    cards.pop();
    return cards;
  } else {
    return [];
  }
}

function insertItemAtBottom(cards, newCard) {
  cards.unshift(newCard);
  return cards;
}

function removeItemAtBottom(cards) {
  cards.shift();
  return cards;
}

function checkSizeOfStack(cards, stackSize) {
  return cards.length === stackSize;
}
