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

const list1 = [
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
console.log(isSameLanguage(list1));