# goit-js-hw-06

Деструктурирующее присваивание для параметра функции PS Деструктурирующее
присваивание (ДП):

//1.Объект как параметр без ДП============

const object = {num : 2}

function getNum (obj) {return obj.num; }

console.log(getNum(object)) // 2

//2.ДП=========================

const object = {num : 2}

// const num = object.num;

const { num } = object;

console.log(num) // 2

//3.Объект как параметр c ДП ===============

const object = {num : 2}

//function getNum (obj) { return obj.num; }

function getNum ({num}) { retur num; }

console.log(getNum(object)) // 2

///Задача 6-1

map

Получи массив имен всех пользователей (свойство name) используя
деструктурирующее присваивание для параметра функции ({name}) без пробелов и
переносов на новую строку.

Используй только перебирающие методы массива которые не изменяют (не мутируют)
исходный массив. Т.е. нельзя использовать for, splice, push и т.п. мутирующие
методы.

//Задача 6-2

filter

Получи массив объектов пользователей, отобранный по цвету глаз (свойство
eyeColor), используя деструктурирующее присваивание для параметра функции
({eyeColor}) без пробелов и переносов на новую строку.

Используй только перебирающие методы массива которые не изменяют (не мутируют)
исходный массив. Т.е. нельзя использовать for, splice, push и т.п. мутирующие
методы.

//Задача 6-3

filter, map

Получи массив имен пользователей (значение свойства name) по полу (значение
свойства gender).

Используй деструктурирующее присваивание для параметра функции ({name}) без
пробелов и переносов на новую строку.

Используй только перебирающие методы массива которые не изменяют (не мутируют)
исходный массив. Т.е. нельзя использовать for, splice, push и т.п. мутирующие
методы.

//Задача 6-4

filter и оператор !

Получи массив только неактивных пользователей (отфильтруй по значению свойства
isActive)

Используй деструктурирующее присваивание для параметра функции ({isActive}) без
пробелов и переносов на новую строку.

Используй оператор !.

Используй только перебирающие методы массива которые не изменяют (не мутируют)
исходный массив. Т.е. нельзя использовать for, splice, push и т.п. мутирующие
методы.

//Задача 6-5

find

Получи объект пользователя (не массив) по уникальному значению свойства email.

Используй деструктурирующее присваивание для параметра функции ({email}) без
пробелов и переносов на новую строку.

Используй только перебирающие методы массива которые не изменяют (не мутируют)
исходный массив. Т.е. нельзя использовать for, splice, push и т.п. мутирующие
методы.

//Задача 6-6

filter, map и создание анонимных объектов

Получи массив из объектов, которые состоят только из свойств name и email тех
пользователей, которые попадают в возрастную категорию от min до max лет
(значение свойства age).

Сравнение, пример

const x = 13;

// num больше 10 ? const larger = num > 10; // true

// num меньше 100 ? const smaller = 100 > num; // true

// num находитя между 10 и 100 ? const between = smaller && larger; // true
Создание анонимных объектов:

const arr = Array(3) .fill('') .map((e,i) => ({['index']: i })); //_ [ { index:
0}, { index: 1 }, { index: 2 } ] _/ /

Используй только перебирающие методы массива которые не изменяют (не мутируют)
исходный массив. Т.е. нельзя использовать for, splice, push и т.п. мутирующие
методы.

//Задача 6-7

reduce

Получи общую сумму баланса (сумму значений свойства balance) всех пользователей.

Используй деструктурирующее присваивание для параметра функции {balance} без
пробелов и переносов на новую строку

Используй только перебирающие методы массива которые не изменяют (не мутируют)
исходный массив. Т.е. нельзя использовать for, splice, push и т.п. мутирующие
методы.

//Задача 6-8

filter, includes и map

Получи массив имен всех пользователей у которых есть друг с заданным именем.

Используй деструктурирующее присваивание для параметра функции {friends}и
({name}) без пробелов и переносов на новую строку

Используй только перебирающие методы массива которые не изменяют (не мутируют)
исходный массив. Т.е. нельзя использовать for, splice, push и т.п. мутирующие
методы.

//Задача 6-9

sort и map

Получи массив имен (поле name) людей, отсортированных в зависимости от
количества их друзей (поле friends)

Избегаем мутации исходного массива: т.к. метод sort изменяет (мутирует) исходный
массив, то следует сделать копию массива и сортировать уже копию, а не исходный
массив.

Копирование массива:

const arr = [1, 3, 5];

// 1 const first = [...arr];

// 2 const second = arr.slice();

// 3 const third = arr.concat(); Используй деструктурирующее присваивание для
параметра функции ({name})` без пробелов и переносов на новую строку

Используй только перебирающие методы массива которые не изменяют (не мутируют)
исходный массив. Т.е. нельзя использовать for, splice, push и т.п. мутирующие
методы.

//Задача 6-10

reduce, filter, sort

Получи массив всех умений всех пользователей (поле skills), при этом не должно
быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

Слияние массивов:

const odd = [1, 3, 5]; const even = [2, 4, 6];

// 1 [...odd, ...even]; // [1, 3, 5, 2, 4, 6]

// 2 odd.concat(even) // [1, 3, 5, 2, 4, 6] Используй только перебирающие методы
массива которые не изменяют (не мутируют) исходный массив. Т.е. нельзя
использовать for, splice, push и т.п. мутирующие методы.
