// Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe
const list1 = [
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
