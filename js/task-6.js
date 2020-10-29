import users from './users.js';
console.table(users);

// =======================================
// Задача 6-1
// =======================================
// Write code under this line

// const getUserNames = array => {
//   return array.map(arr => arr.name);
// };

const getUserNames = array => {
  const { name } = array;
  return array.map(({ name }) => {
    return name;
  });
};

console.log(getUserNames(users));

/* [
  "Moore Hensley",
  "Sharlene Bush",
  "Ross Vazquez",
  "Elma Head",
  "Carey Barr",
  "Blackburn Dotson",
  "Sheree Anthony",
] */
// =======================================
// Задача 6-2
// =======================================
// Write code under this line

const getUsersWithEyeColor = (array, color) => {
  const { eyeColor } = array;
  return array.filter(({ eyeColor }) => {
    return eyeColor === color;
  });
};

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// =======================================
// Задача 6-3
// =======================================
// Write code under this line

const getUsersWithGender = (array, genderArr) => {
  const { gender, name } = array;
  // const {name} = array;
  //  const {gender} = array;
  return array
    .filter(({ gender }) => {
      return gender === genderArr;
    })
    .map(({ name }) => name);
};
console.log(getUsersWithGender(users, 'male')); //["Moore Hensley", "Ross Vazquez", "Carey Barr", "Blackburn Dotson"]
console.log(getUsersWithGender(users, 'female')); //["Sharlene Bush", "Elma Head", "Sheree Anthony"]

// =======================================
// Задача 6-4
// =======================================
// Write code under this line

const getInactiveUsers = array => {
  const { isActive } = array;
  return array.filter(({ isActive }) => !isActive);
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// =======================================
// Задача 6-5
// =======================================
// Write code under this line

const getUserWithEmail = (array, mail) => {
  const { email } = array;
  return array.find(({ email }) => email === mail);
};

console.log(getUserWithEmail(users, 'rossvazquez@xinware.com')); // {объект пользователя Ross Vazquez}
console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

// =======================================
// Задача 6-6
// =======================================
// Write code under this line

const getUsersWithAge = (array, min, max) =>
  array
    .filter(({ age }) => age >= min && age <= max)
    .map(({ name, email }) => ({ name, email }));

console.log(getUsersWithAge(users, 20, 30));
/* [
    { name: 'Ross Vazquez', email: 'rossvazquez@xinware.com' },
    { name: 'Elma Head', email: 'elmahead@omatom.com' },
    { name: 'Carey Barr', email: 'careybarr@nurali.com' }
] */

console.log(getUsersWithAge(users, 30, 40));
/* [
    { name: 'Moore Hensley', email: 'moorehensley@indexia.com' },
    { name: 'Sharlene Bush', email: 'sharlenebush@tubesys.com' },
    { name: 'Blackburn Dotson', email: 'blackburndotson@furnigeer.com' },
    { name: 'Sheree Anthony', email: 'shereeanthony@kog.com' }
] */

// =======================================
// Задача 6-7
// =======================================
// Write code under this line

const calculateTotalBalance = array => {
  // const { balance } = array;// бот без этого не принимает
  return array.reduce((acc, { balance }) => acc + balance, 0);
};

console.log(calculateTotalBalance(users)); // 20916

// =======================================
// Задача 6-8
// =======================================
// Получи массив имен всех пользователей у которых есть друг с заданным именем.
// Write code under this line

// Для бота

// const getUsersWithFriend = (array, friendName) => {
//     const { name } = array;
//     const { friends } = array;//бот без этого не принимает
//   return array
//     .filter(({ friends }) => friends.includes(friendName))
//     .map(({ name }) => name);
// };

const getUsersWithFriend = (array, friendName) =>
  array
    .filter(({ friends }) => friends.includes(friendName))
    .map(({ name }) => name);

console.log(getUsersWithFriend(users, 'Briana Decker'));
// [ 'Sharlene Bush', 'Sheree Anthony' ]

console.log(getUsersWithFriend(users, 'Goldie Gentry'));
// [ 'Elma Head', 'Sheree Anthony' ]

// =======================================
// Задача 6-9
// =======================================

// Write code under this line
const getNamesSortedByFriendsCount = array => {
  const { name } = array;
  return [...array]
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(({ name }) => name);
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// =======================================
// Задача 6-10
// =======================================

// Write code under this line
const getSortedUniqueSkills = array =>
  [...array]
    .reduce((acc, { skills }) => [...acc, ...skills], [])
    .filter((skill, index, arr) => arr.indexOf(skill) === index)
    .sort();

console.log(getSortedUniqueSkills(users));
/* [ 'adipisicing', 'amet',
 'anim', 'commodo',
 'culpa', 'elit',
 'ex', 'ipsum',
 'irure', 'laborum',
 'lorem', 'mollit',
 'non', 'nostrud',
 'nulla', 'proident',
 'tempor', 'velit',
 'veniam' ]; */
