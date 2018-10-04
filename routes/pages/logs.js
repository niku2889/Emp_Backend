module.exports = (app) => {
    const logs = require('../../controllers/logs.controller.js');

    // Create a new Sport Details
    app.post('/api/logs', logs.create);

    // Retrieve all Sport Details
    app.get('/api/logs', logs.findAll);

    // Retrieve a single Sport Details with Id
    app.get('/api/logs/:Id', logs.findOne);

    // Update a Sport Details with Id
    app.put('/api/logs/:Id', logs.update);

    // Delete a Sport Details with Id
    app.delete('/api/logs/:Id', logs.delete);
}