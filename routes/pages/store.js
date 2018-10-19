module.exports = (app) => {
    const stores = require('../../controllers/store.controller.js');

    // Create a new Sport Details
    app.post('/api/stores', stores.create);

    // Retrieve all Sport Details
    app.get('/api/stores', stores.findAll);

    // Retrieve a single Sport Details with Id
    app.get('/api/stores/:Id', stores.findOne);

    // Update a Sport Details with Id
    app.put('/api/stores/:Id', stores.update);

    // Delete a Sport Details with Id
    app.delete('/api/stores/:Id', stores.delete);
}