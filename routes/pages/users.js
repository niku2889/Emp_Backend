module.exports = (app) => {
    const users = require('../../controllers/users.controller.js');

    // Create a new Sport Details
    app.post('/api/users', users.create);

    // Retrieve all Sport Details
    app.get('/api/users', users.findAll);

    // Retrieve a single Sport Details with Id
    app.get('/api/users/:Id', users.findOne);

    // Update a Sport Details with Id
    app.put('/api/users/:Id', users.update);

    // Delete a Sport Details with Id
    app.delete('/api/users/:Id', users.delete);
}