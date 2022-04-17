// Lucian's Luscious Lasagna --------- //

const PREPARATION_MINUTES_PER_LAYER = 2;
const EXPECTED_MINUTES_IN_OVEN = 40;
/**
 * Determines the amount of minutes the lasagna still needs to remain in the
 * oven to be properly prepared.
 *
 * @param {number} actualMinutesInOven
 * @returns {number} the number of minutes remaining
 */
function remainingMinutesInOven(actualMinutesInOven) {
  return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
}

/**
 * Given a number of layers, determines the total preparation time.
 *
 * @param {number} numberOfLayers
 * @returns {number} the total preparation time
 */
function preparationTimeInMinutes(numberOfLayers) {
  return PREPARATION_MINUTES_PER_LAYER * numberOfLayers;
}

/**
 * Calculates the total working time. That is, the time to prepare all the layers
 * of lasagna, and the time already spent in the oven.
 *
 * @param {number} numberOfLayers
 * @param {number} actualMinutesInOven
 * @returns {number} the total working time
 */
function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  return preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven;
}

// Annalyn's Infiltration ----------- //

/**
 * The fast attack is available when the knight is sleeping
 *
 * @param {boolean} knightIsAwake
 *
 * @return {boolean} Whether or not you can execute a fast attack.
 */
function canExecuteFastAttack(knightIsAwake) {
  if (!knightIsAwake) {
    return true;
  }
  return false;
}

/**
 * A useful spy captures information, which they can't do if everyone's asleep.
 *
 * @param {boolean} knightIsAwake
 * @param {boolean} archerIsAwake
 * @param {boolean} prisonerIsAwake
 *
 * @returns {boolean} Whether or not you can spy on someone.
 */
function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  return knightIsAwake || archerIsAwake || prisonerIsAwake;
}

/**
 * You'll get caught by the archer if you signal while they're awake.
 *
 * @param {boolean} archerIsAwake
 * @param {boolean} prisonerIsAwake
 *
 * @returns {boolean} Whether or not you can send a signal to the prisoner.
 */
function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  return !archerIsAwake && prisonerIsAwake;
}

/**
 * The final stage in the plan: freeing Annalyn's best friend.
 *
 * @param {boolean} knightIsAwake
 * @param {boolean} archerIsAwake
 * @param {boolean} prisonerIsAwake
 * @param {boolean} petDogIsPresent
 *
 * @returns {boolean} Whether or not you can free Annalyn's friend.
 */
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

/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
function dayRate(ratePerHour) {
  return 8 * ratePerHour;
}

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */
function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / dayRate(ratePerHour));
}

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */
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

/**
 * Format the password for the front-door, given the response
 * letters.
 *
 * @param {string} word the letters you responded with before
 * @returns {string} the front door password
 */
function frontDoorPassword(word) {
  return word[0].toUpperCase() + word.slice(1, word.length).toLowerCase();
}

/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the back door.
 *
 * @param {string} line
 * @returns {string}
 */
function backDoorResponse(line) {
  return line.trimEnd().slice(-1);
}

/**
 * Format the password for the back door, given the response
 * letters.
 *
 * @param {string} word the letters you responded with before
 * @returns {string} the back door password
 */
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

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
function birdsInWeek(birdsPerDay, week) {
  const idx = (week - 1) * 7;
  const totalCount = birdsPerDay.slice(idx, idx + 7);
  return totalBirdCount(totalCount);
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i++) {
    if (i % 2 === 0) {
      birdsPerDay[i]++;
    }
  }
  return birdsPerDay;
}

// Lucky Numbers -------------- //

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
function twoSum(array1, array2) {
  const slot1 = array1.join('');
  const slot2 = array2.join('');
  return Number(slot1) + Number(slot2);
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean}  whether the number is a palindrome or not
 */
function luckyNumber(value) {
  const reversed = String(value).split('').reverse().join('');
  return reversed == value;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
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

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
function remainingOrders(timeLeft, orders) {
  const unfinishedOrders = [...orders];
  while (timeLeft > 0 && unfinishedOrders.length > 0) {
    timeLeft -= timeToMixJuice(unfinishedOrders.shift());
  }
  return unfinishedOrders;
}

// High Score Board ------------------ //

/**
 * Creates a new score board with an initial entry.
 *
 * @returns {Record<string, number>} new score board
 */
function createScoreBoard() {
  const highScore = { 'The Best Ever': 1000000 };
  return highScore;
}

/**
 * Adds a player to a score board.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @param {number} score
 * @returns {Record<string, number>} updated score board
 */
function addPlayer(scoreBoard, player, score) {
  scoreBoard[player] = score;
  return scoreBoard;
}

/**
 * Removes a player from a score board.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @returns {Record<string, number>} updated score board
 */
function removePlayer(scoreBoard, player) {
  delete scoreBoard[player];
  return scoreBoard;
}

/**
 * Increases a player's score by the given amount.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @param {number} points
 * @returns {Record<string, number>} updated score board
 */
function updateScore(scoreBoard, player, points) {
  scoreBoard[player] += points;
  return scoreBoard;
}

/**
 * Applies 100 bonus points to all players on the board.
 *
 * @param {Record<string, number>} scoreBoard
 * @returns {Record<string, number>} updated score board
 */
function applyMondayBonus(scoreBoard) {
  for (let key in scoreBoard) {
    scoreBoard[key] += 100;
  }
  return scoreBoard;
}

/**
 * Normalizes a score with the provided normalization function.
 *
 * @param {Params} params the parameters for performing the normalization
 * @returns {number} normalized score
 */
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

/**
 * Build a sign that includes both of the parameters.
 *
 * @param {string} occasion
 * @param {string} name
 *
 * @returns {string} template string combining both parameters
 */

function buildSign(occasion, name) {
  return `Happy ${occasion} ${name}!`;
}

/**
 * Build a birthday sign that conditionally formats the return string.
 *
 * @param {number} age
 *
 * @returns {string} template string based on age
 */

function buildBirthdaySign(age) {
  return age < 50
    ? 'Happy Birthday! What a young fellow you are.'
    : 'Happy Birthday! What a mature fellow you are.';
}

/**
 * Build a graduation sign that includes multiple lines.
 *
 * @param {string} name
 * @param {number} year
 *
 * @returns {string} multi-line template string
 */

function graduationFor(name, year) {
  return `Congratulations ${name}!\nClass of ${year}`;
}

/**
 * Determine cost based on each character of sign parameter that builds
 * the template string that includes the currency parameter.
 *
 * @param {string} sign
 * @param {string} currency
 *
 * @returns {string} cost to create the sign
 */

function costOf(sign, currency) {
  const basePrice = 20;
  const cost = sign.length * 2;
  const finalPrice = basePrice + cost;
  return `Your sign costs ${finalPrice.toFixed(2)} ${currency}.`;
}
