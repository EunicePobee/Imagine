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
  