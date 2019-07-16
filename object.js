console.log('Here is : ', 'Object')


/*
1
Create an object represents you
have your first name, last name, age, dob(date of birth), favorite food (3),favorite movie (5)
*/

var abdala = {
  firstName : 'Abdullah',
  lastName: 'Alsqoor',
  age: 25,
  dob: 1993,
  favoriteFood: ['Mansaf', 'Kabsa', 'Mandi'],
  favoriteMovie: ['Start Trick', 'Training Day', 'American Ganstar', 'Slumdog Millionaire']
};










var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];

/*
2
Using the variable persons
Create a function called firstName
that accept an object
and return all the first name of the person insides

Ex: firstName(persons) => ['John', 'Alex', 'Alice', 'Thor', 'Soso']
*/



function firstName (arr) {
  var firstNamesArray = [];
  var personObj;
  var nameObj;

  for(var i = 0; i < arr.length; i++) {
    personObj = arr[i];

    for(var outerKey in personObj) {
      if(outerKey === 'name') {
        nameObj = personObj[outerKey];
        for(var innerKey in nameObj) {
          if(innerKey === 'first') {
            firstNamesArray.push(nameObj[innerKey]);
          }
        }
      }
    }
  }

  return firstNamesArray;
}



/*
3
Using the varabile persons
Create a function called averageAge
that accept an object
and return the average age of those persons

Ex: averageAge(persons) => 41.2
*/

function  averageAge(arr) {
  var personObj;
  var sum = 0;
  var averageAges;

  for(var i = 0; i < arr.length; i++) {
    personObj = arr[i];

    for(var key in personObj) {
      if(key === 'age') {
        sum += personObj[key];
      }
    }
  }

  averageAges = sum / arr.length
  return averageAges;
}




/*
4
Using the varabile persons
Create a function called olderPerson
that accept an object
and return the full name of the older person

Ex: olderPerson(persons) => "Soso Al-Amora"
*/


function olderPerson(arr) {
  var personObj;
  var maxAge = 0;
  var OlderPersonName;

  for(var i = 0; i < arr.length; i++) {
    personObj = arr[i];

    for(var key in personObj) {
      if(key === 'age') {
        if(maxAge < personObj[key]) {
           maxAge =  personObj[key];
           OlderPersonName = personObj['name']['first'] + ' ' + personObj['name']['last'];
        }
      }
    }
  }

  return OlderPersonName;
}






/*
5
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name

Ex: longestName(persons) => "Soso Al-Amora"
*/


function longestName(arr) {
  var personObj;
  var nameObj;
  var longestFullName = '';
  var tempName;

  for(var i = 0; i < arr.length; i++) {
    personObj = arr[i];

    for(var outerKey in personObj) {
      if(outerKey === 'name') {
        nameObj = personObj[outerKey];
        for(var innerKey in nameObj) {
          tempName = nameObj['first'] + ' ' + nameObj['last'];
          
          if(longestFullName.length < tempName.length)
            longestFullName = tempName;
        }
      }
    }
  }

  return longestFullName;
}






/*
6
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name

Ex: longestName(persons) => "Soso Al-Amora"
*/


function longestName(arr) {
  var personObj;
  var nameObj;
  var longestFullName = '';
  var tempName;

  for(var i = 0; i < arr.length; i++) {
    personObj = arr[i];

    for(var outerKey in personObj) {
      if(outerKey === 'name') {
        nameObj = personObj[outerKey];
        for(var innerKey in nameObj) {
          tempName = nameObj['first'] + ' ' + nameObj['last'];
          
          if(longestFullName.length < tempName.length)
            longestFullName = tempName;
        }
      }
    }
  }

  return longestFullName;
}





//////////////////////////////////////////////////////////////////

/*
7
Create a function called repeatWord
that accept a string
and return an object that represents how many times each word repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to words??

Ex: repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO")
=> {
  my:1,
  name:2,
  is:1,
  alex:1,
  mercer:1,
  class:1,
  b:1,
  baba:1,
  mama:1,
  hello:3
}
*/


function repeatWord(str) {
  var strArray = str.split(' ');
  var repeatedWords = {};
  var element;

  for(var i = 0; i < strArray.length; i++) {
    element = strArray[i];
    element = element.toLowerCase();

    if(repeatedWords[element])
      repeatedWords[element] += 1;
    else 
      repeatedWords[element] = 1
  }

  return repeatedWords;
}



/*
8
Create a function called repeatChar
that accept a string
and return an object that represents how many times each char repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to char??

Ex: repeatChar("mamababatetacedo")
=> { m:2,  a:5, b:2, t2:, e:2, c:1, d:1, o:1}
*/


function repeatChar(str) {
  str = str.toLowerCase();``
  var charArray = str.split('');
  var charsObj = {};
  var element;

  for(var i = 0; i < charArray.length; i++) {
    element = charArray[i];
    element = element.toLowerCase();

    if(charsObj[element])
      charsObj[element] += 1;
    else 
      charsObj[element] = 1
  }

  return charsObj;
}



/*
9
Create a function called selectFromObject
that accept an object and an array
and return an object have the key that inside the array

Ex: selectFromObject({a: 1, cat: 3}, ['a', 'cat', 'd'])
=>  {a: 1, cat: 3}
*/

function selectFromObject(obj, arr) {
  var arrElement;

  for(var i = 0; i < arr.length; i++) {
    arrElement = arr[i];
    
    if(!obj[arrElement])
      delete obj[arrElement];
  }

  return obj;
}



/*
10
Create a function called objectToArray
that accept an object
and return an array of the keys and values in this object

Ex: objectToArray({firstName:"Moh",age:24})
=> ["firstName","Moh","age",24]
*/

function objectToArray(obj) {
  var keys = Object.keys(obj);
  var newArray = [];

  for(var i = 0; i < keys.length; i++) {
    newArray.push(keys[i]);
    newArray.push(obj[keys[i]]);
  }

    return newArray;
}



/*
11
Create a function called arrayToObject
that accept an array
and return an object of the keys and values in this object

Ex: arrayToObject(["firstName","Moh","age",24])
=> {firstName:"Moh",age:24}
*/

function arrayToObject(array) {
  var newObj = {};

  for(var i = 0; i < array.length; i += 2) {
    newObj[array[i]] = array[i + 1];
  }

  return newObj;
}




/*
12
Create a function called onlyNumber
that accept an object
and return a new object that have only the values that is a number
**hint: search in MDN how to know the type of variable

Ex: onlyNumber({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {age:24}
*/


function onlyNumber(obj) {
  var isElementNaN;
  
  for(var key in obj) {
    isElementNaN = typeof(obj[key]) !== 'number';

    if(isElementNaN)
      delete obj[key]
  }

  return obj;
}


/*
13
Create a function called onlyString
that accept an object
and return a new object that have only the values that is a string
**hint: search in MDN how to know the type of variable

Ex: onlyString({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {firstName:"Moh"}
*/


function onlyString(obj) {
  var isElementNotString;
  
  for(var key in obj) {
    isElementNotString = typeof(obj[key]) !== 'string';

    if(isElementNotString)
      delete obj[key]
  }

  return obj;
}


/*
14
Create a function called onlyArray
that accept an object
and return a new object that have only the values that is a array
**hint: search in MDN how to know the type of variable

Ex: onlyArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {movies:[1,5,"string"]}
*/

function onlyArray(obj) {
  var isElementNotArray;
  
  for(var key in obj) {
    isElementNotArray = Array.isArray(obj[key]);

    if(isElementNotArray)
      delete obj[key]
  }

  return obj;
}


/*
15
Create a function called keysArray
that accept an object
and return an array have the key inside this object

Ex: keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> ['firstName', 'age', 'movies']

*/

function keysArray(obj) {
  return Object.keys(obj);
}


/*
16
Create a function called valuesArray
that accept an object
and return an array have the values inside this object

Ex: keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> ["Moh", 24, [1,5,"string"]]

*/


function valuesArray(obj) {
  var valuesArray = [];

  for(var key in obj)
    valuesArray.push(obj[key]);

  return valuesArray;
}


/*
17
make this object => {a:1,b:3,c:4}
to be this object {a:4,c:66}
**hint: Search on MDN how to remove a key/value from an object
*/

var object = {a:1,b:3,c:4}
delete object['b'];

/*
18
Create a function called objectLength
that accept an object
and return the number of keys inside this object

Ex: keysArray({a:1,b:2,c:3,d:4})
=> 4
*/

function objectLength(obj) {
  var numberOfKeys = Object.keys(obj).length;
  return numberOfKeys;
}


/*
19
Create a function called evenValue
that accept an object
and return a new object that have only the key/values if the value is even

Ex: evenValue({a:1, b:2, c:3, d:4})
=> {b:2, d:4}
*/

function evenValue(obj) {
  var newObj = {};

  for(var key in obj)
    if(obj[key] % 2 === 0)
      newObj[key] = obj[key];

  return newObj;
}


/*
20
Create a function called longestKey
that accept an object
and return the value inside the longest key

Ex: longestKey({car:1, school:2, monster:3, alexMercer:4})=> 4
*/


function longestKey(obj) {
  var keys = Object.keys(obj);
  
  var key = keys[0];
  var maxKeyLenth = keys[0].length;
  var valueMaxKey = obj[0];

  for(var i = 1; i < keys.length; i++) {
    if(maxKeyLenth < keys[i].length) {
      key = keys[i];
      maxKeyLenth = keys[i].length;
      valueMaxKey = obj[key];
    }
  }

  return valueMaxKey;
}