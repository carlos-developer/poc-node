const users = [
    {
        id: 1,
        name: 'jhon doe',
    },
    {
        id:2,
        name: 'Valentina' 
    }
];

function getUserById(id, callback) {
    const user = users.find( function(user) {
        return user.id === id;
    });


if(!user) {
    return callback('User not found');
}

return callback(null, user);
}

module.exports = {
    getUserById: getUserById
} 