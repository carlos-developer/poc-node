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

const getUserById = (id, callback) => {
    const user = users.find( (user) => {
        return user.id === id;
    });

    (user) ? callback(null, user) : callback('User not found');

}

module.exports = {
    getUserById: getUserById
} 