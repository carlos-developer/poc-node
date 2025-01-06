

//const templateExport = require('./js-foundation/01-template');

//console.log(templateExport);

const {getUserById} = require ('./js-foundation/04-arrows');

const id = 2;

getUserById(id, (error, user) => {

    if(error) throw new Error(error);

    console.log(user);
});
