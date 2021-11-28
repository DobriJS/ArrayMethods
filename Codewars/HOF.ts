// Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe
/* const list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
  ];

  interface DeveloperList {
    firstName: string;
    lastName: string;
    country: string;
    continent: string;
    age: number;
    language: string;
  }

  function countDevelopers(list: DeveloperList[]): number {
    return list.filter(x => x.continent === 'Europe' && x.language ==='JavaScript').length;
  }
 */

// Coding Meetup #2 - Higher-Order Functions Series - Greet developers

/* const list1 = [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
  ];

  interface DeveloperList {
    firstName: string;
    lastName: string;
    country: string;
    continent: string;
    age: number;
    language: string;
    greeting?: string;
  }

  function greetDevelopers(list: DeveloperList[]): object {
    list.forEach(dev => {
        dev.greeting = `Hi ${dev.firstName}, what do you like the most about ${dev.language}?`;
    })
    return list;
  } */

// Coding Meetup #4 - Higher-Order Functions Series - Find the first Python developer
/* const list1 = [
    { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
    { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
  ];

  interface DeveloperList {
    firstName: string;
    lastName: string;
    country: string;
    continent: string;
    age: number;
    language: string;
  }

function getFirstPython(list: DeveloperList[]): string {
    const dev = list.find(x => x.language === "Python");
    return dev ? `${dev.firstName}, ${dev.country}` : "There will be no Python developers";
   }
   console.log(getFirstPython(list1)); */

// Coding Meetup #6 - Higher-Order Functions Series - Can they code in the same language?

/* const list1 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
];

interface DeveloperList {
  firstName: string;
  lastName: string;
  country: string;
  continent: string;
  age: number;
  language: string;
}

function isSameLanguage(list: DeveloperList[]): boolean {
  return list.every(e => e.language === list[0].language);
}
console.log(isSameLanguage(list1)); */

// Coding Meetup #7 - Higher-Order Functions Series - Find the most senior developer
/* const list1 = [
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
  { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
  { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
];

interface DeveloperList {
  firstName: string;
  lastName: string;
  country: string;
  continent: string;
  age: number;
  language: string;
}

function findSenior(list: DeveloperList[]) {
  const max = Math.max(...list.map(dev => dev.age));
  return list.filter(dev => dev.age === max);
} */

// Coding Meetup #8 - Higher-Order Functions Series - Will all continents be represented?
/* const list1 = [
  { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
  { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
  { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
  { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' },
];

interface DeveloperList {
  firstName: string;
  lastName: string;
  country: string;
  continent: string;
  age: number;
  language: string;
}

function allContinents(list: DeveloperList[]): boolean {
  const continents = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  return continents.every(x => list.some(y => x === y.continent));
}
console.log(allContinents(list1)); */

// Coding Meetup #11 - Higher-Order Functions Series - Find the average age
/* const list1 = [
  { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
];

interface DeveloperList {
  firstName: string;
  lastName: string;
  country: string;
  continent: string;
  age: number;
  language: string;
}

function getAverageAge(list: DeveloperList[]) {
 const avrAge = list.reduce((a, c) => {
    return a + c.age;
 }, 0)
 return Math.ceil(avrAge / list.length);
}
console.log(getAverageAge(list1)); */

// Coding Meetup #12 - Higher-Order Functions Series - Find GitHub admins
const list1 = [
  { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 49, language: 'Ruby', githubAdmin: 'no' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript', githubAdmin: 'no' }
];

interface DeveloperList {
  firstName: string;
  lastName: string;
  country: string;
  continent: string;
  age: number;
  language: string;
  githubAdmin: string;
}

function findAdmin(list: DeveloperList[], lang: string) {
  return list.filter(function(dev){return dev.language == lang && dev.githubAdmin == 'yes'});
}
console.log(findAdmin(list1, 'JavaScript'))