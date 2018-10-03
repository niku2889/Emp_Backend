module.exports = (app) => {
    const sites = require('../../controllers/sites.controller.js');

    // Create a new Sport Details
    app.post('/api/sites', sites.create);

    // Retrieve all Sport Details
    app.get('/api/sites', sites.findAll);

    // Retrieve a single Sport Details with Id
    app.get('/api/sites/:Id', sites.findOne);

    // Update a Sport Details with Id
    app.put('/api/sites/:Id', sites.update);

    // Delete a Sport Details with Id
    app.delete('/api/sites/:Id', sites.delete);
}