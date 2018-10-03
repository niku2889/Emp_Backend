module.exports = (app) => {
    const category = require('../../controllers/category.controller.js');

    // Create a new Sport Details
    app.post('/api/category', category.create);

    // Retrieve all Sport Details
    app.get('/api/category', category.findAll);

    // Retrieve a single Sport Details with Id
    app.get('/api/category/:Id', category.findOne);

    // Update a Sport Details with Id
    app.put('/api/category/:Id', category.update);

    // Delete a Sport Details with Id
    app.delete('/api/category/:Id', category.delete);
}