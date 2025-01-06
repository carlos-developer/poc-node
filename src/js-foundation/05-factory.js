
const { getUUID } = require('../js-foundation/get-id.plugin');
const { getAge } = require('../js-foundation/get-age.plugin');


const obj = { name: 'John', birthdate: '1989-11-05' };

const buildPerson = ({name, birthdate}) => {

    return {
        id: getUUID(),
        name:name,
        birthdate:birthdate,
        age: getAge(birthdate), 
    }
}

const john = buildPerson(obj);

console.log(john);