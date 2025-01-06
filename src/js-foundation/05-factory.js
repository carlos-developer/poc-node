

const obj = { name: 'John', birthdate: '1989-11-05' };

const buildPerson = ({name, birthdate}) => {

    return {
        id: new Date().getTime(),
        name:name,
        birthdate:birthdate,
        age: new Date().getFullYear() - new Date(birthdate).getFullYear(), 
    }
}

const john = buildPerson(obj);

console.log(john);