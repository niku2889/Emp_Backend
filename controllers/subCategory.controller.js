const SubCategory = require('../models/subCategory.model.js');

// Create and Save a new order 
exports.create = (req, res) => {
    //Validate request
    if (!req.body.name) {
        return res.status(400).send({
            message: "name content can not be empty"
        });
    } else if (!req.body.hours) {
        return res.status(400).send({
            message: "Hours content can not be empty"
        });
    } else if (!req.body.categoryName) {
        return res.status(400).send({
            message: "categoryName content can not be empty"
        });
    }

    const subcategory = new SubCategory({
        name: req.body.name,
        hours: req.body.hours,
        categoryName: req.body.categoryName,
    });

    // Save Order in the database
    subcategory.save()
        .then(uni => {
            res.send(uni);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the SubCategory."
            });
        });
};

// Retrieve and return all orders from the database.
exports.findAll = (req, res) => {
    SubCategory.find()
        .then(uni => {
            res.send(uni);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving SubCategory."
            });
        });
}

// Find a single order with a Id
exports.findOne = (req, res) => {
    SubCategory.findById(req.params.Id)
        .then(uni => {
            if (!uni) {
                return res.status(404).send({
                    message: "SubCategory not found with id " + req.params.Id
                });
            }
            res.send(uni);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "SubCategory not found with id " + req.params.Id
                });
            }
            return res.status(500).send({
                message: "Error retrieving SubCategory with id " + req.params.Id
            });
        });
};

// Update a order identified by the Id in the request
exports.update = (req, res) => {
    //Validate request
    if (!req.body.name) {
        return res.status(400).send({
            message: "name content can not be empty"
        });
    } else if (!req.body.hours) {
        return res.status(400).send({
            message: "Hours content can not be empty"
        });
    } else if (!req.body.categoryName) {
        return res.status(400).send({
            message: "categoryName content can not be empty"
        });
    }
    // Find order and update it with the request body
    SubCategory.findByIdAndUpdate(req.params.Id, {
        name: req.body.name,
        hours: req.body.hours,
        categoryName: req.body.categoryName,
    }, { new: true })
        .then(uni => {
            if (!uni) {
                return res.status(404).send({
                    message: "SubCategory not found with id " + req.params.Id
                });
            }
            res.send(uni);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "SubCategory not found with id " + req.params.Id
                });
            }
            return res.status(500).send({
                message: "Error updating SubCategory with id " + req.params.Id
            });
        });
};

// Delete a order with the specified Id in the request
exports.delete = (req, res) => {
    SubCategory.findByIdAndRemove(req.params.Id)
        .then(uni => {
            if (!uni) {
                return res.status(404).send({
                    message: "SubCategory not found with id " + req.params.Id
                });
            }
            res.send({ message: "SubCategory deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "SubCategory not found with id " + req.params.Id
                });
            }
            return res.status(500).send({
                message: "Could not delete SubCategory with id " + req.params.Id
            });
        });
};