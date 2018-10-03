module.exports = (app) => {
    const subcategory = require('../../controllers/subCategory.controller.js');

    // Create a new Sport Details
    app.post('/api/subcategory', subcategory.create);

    // Retrieve all Sport Details
    app.get('/api/subcategory', subcategory.findAll);

    // Retrieve a single Sport Details with Id
    app.get('/api/subcategory/:Id', subcategory.findOne);

    // Update a Sport Details with Id
    app.put('/api/subcategory/:Id', subcategory.update);

    // Delete a Sport Details with Id
    app.delete('/api/subcategory/:Id', subcategory.delete);
}