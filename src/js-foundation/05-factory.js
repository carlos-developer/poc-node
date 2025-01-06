
const { v4: uuidv4 } = require('uuid');
const getAge = require('get-age')


const obj = { name: 'John', birthdate: '1989-11-05' };

const buildPerson = ({name, birthdate}) => {

    return {
        id: uuidv4(),
        name:name,
        birthdate:birthdate,
        age: getAge(birthdate), 
    }
}

const john = buildPerson(obj);

console.log(john);