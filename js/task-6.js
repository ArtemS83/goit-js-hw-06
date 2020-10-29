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
