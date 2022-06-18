Решите это упражнение, используя бинарный поиск.

Реализуйте и экспортируйте по умолчанию функцию, которая ищет телефонный номер по имени. Телефонная книга отсортирована по именам

const phoneBook = [
  { name: 'Alex Bowman', number: '48-2002' },
  { name: 'Aric Almirola', number: '10-1001' },
  { name: 'Bubba Wallace', number: '23-1111' },

];

Функция принимает на вход телефонную книгу в виде массива, и имя, которое нужно найти. Если имени нет в телефонной книге или телефонная книга пуста, то функция должна вернуть null

import findNumberByName from './solution.js';
 
findNumberByName(phonebook, 'Alex Bowman'); // '48-2002'
findNumberByName(phonebook, 'None'); // null
