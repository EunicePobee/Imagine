const btn = document.getElementById('btn');
        btn.onclick = function () {
            const name = prompt('Enter your full name.');
            document.getElementById('name').innerText = name;
        }

// Variables
const pi = 3.142;
let username = 'EunicePobee';
let age = '73';
let present = false;

// Objects
const person = {
    username: 'EunicePobee',
    age: '73',
    present: false,
    child: {
        name: 'Baby',
        friend: {
            name: 'Baobao',
        }
    }
}
console.log(person.username);
person.age = 105;
console.log(person);


// Arrays
const bottle1 = {
    size: 'large',
    color: 'yellow'
  }
  
  const bottle2 = {
    size: 'small',
    color: 'blue',
  }
  
  const bottles = [bottle1, bottle2, ];
  bottles;
  bottles.push(bottle1);
  bottles.push(bottle2);
  bottles;
  bottles[1].size;
  
  const date = new Date();
  date.toString();
  date.getDay();
  
  // If/Else
//   +
  if (age >= 18) {
    'You are true';
  } else {
    'You are false';
  }
  
  // For loop
  for (let i = 0; i <= 5; i+=1) {
    console.log('We did it!', i);
  }
  
  // Functions
// Defining a function
function login(username, password) {
  // Validate username and password
  if (!username || !password) {
    return 'Username or password not provided'
  }
  // Verify username and password
  if (username == 'EunicePobee' && password == '1234') {
    return 'User is logged in';
  } else {
    return 'Invalid username or password';
  }
}
// Invoking a function
login('EunicePobee');




// Basic Arithmetic Operations
11 + 12;
43 - 12;
1 + 0.5;
45 / 7;
5 * 3;
14 % 3;

Math.round (45/24)
Math.floor (45/24)
Math.random () * 1000
Math.max(34,32,37);
'2' + '2';
'2' - '2';
'2' * '2';
Number('2') + 2;
Number('ty') + 2

// Strings in JavaScript
// Concatenation
const firstname = 'Eunice';
const lastname = 'Pobee';
const middlename = 'Araba';
firstname + ' ' + middlename + ' ' + lastname;
// Template literal
`${firstname} ${middlename} ${lastname}`;

// String Methods
let fullName = "eunice pobee"
fullName.length

for (let i = 0; i<=fullName.length-1; i++){
  console.log(i)
}

for (let i = 0; i<fullName.length; i++){
  console.log(i)
}

fullName.toUpperCase()
fullName.toLowerCase()
fullName.charAt(3)
fullName.slice(7,12)
fullName.slice(0,6)
fullName.split("")
fullName.replace("pobee", "araba")
fullName.indexOf("nice")

// String Conversion
Number("3.243")
parseInt("3.243")
parseFloat("3.243")
let amount = 18000
amount.toString()
console.log(`GHS${amount}`)