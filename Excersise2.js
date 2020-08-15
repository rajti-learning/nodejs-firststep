const fs = require('fs');

const identity = [];
let card = {};
const numbers= [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const genders =['M', 'F'];
const maleNames = ['Piotr', 'Boguslaw', 'Marian', 'Pawel', 'Tomek', 'Krzysztof', 'Krystian'];
const femaleNames = ['Sylwia', 'Agnieszka', 'Malgorzata', 'Jagoda', 'Barbara', 'Joanna', 'Wioletta'];
const lastNames = ['Rajtar', 'Kos', 'Stark', 'Kolodziej', 'Dzik', 'Szkutnik', 'Kaleta'];

const pickOne = array => {
    return array[Math.floor(Math.random()*array.length)];
};

const phoneGenerator = () => {
    const phoneNumber = [];
    let telephone = 'XXX-XXX-XXX';

    for (let i = 0; i < 9; i++) {
        phoneNumber.push(pickOne(numbers)); 
    }

    for (let i = 0; i < phoneNumber.length; i++) {
        telephone = telephone.replace('X', phoneNumber[i]);
    }

    return telephone;
};

for (let i = 0; i < 20; i++) {

    const gender = pickOne(genders);
    const firstName = gender === 'M' ? pickOne(maleNames) : pickOne(femaleNames);
    const lastName = pickOne(lastNames);
    const age = Math.floor(Math.random()*60+18);
    const mail = `${firstName}.${lastName}@mail.com`;
    const phone = phoneGenerator();

    card = {
        gender: gender,
        firstName: firstName,
        lastName: lastName,
        age: age,
        mail: mail,
        phone: phone,
    };
   
    identity.push(card);
}

fs.writeFile('people.json', JSON.stringify(identity), (err) => {
    if (err)
    throw console.log('Almost, but 2020 still...');
    console.log('File has been saved');
});
