const Category = require('../models/category.model.js');

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
    }

    const category = new Category({
        name: req.body.name,
        hours: req.body.hours
    });

    // Save Order in the database
    category.save()
        .then(uni => {
            res.send(uni);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Category."
            });
        });
};

// Retrieve and return all orders from the database.
exports.findAll = (req, res) => {
    Category.find()
        .then(uni => {
            res.send(uni);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Category."
            });
        });
}

// Find a single order with a Id
exports.findOne = (req, res) => {
    Category.findById(req.params.Id)
        .then(uni => {
            if (!uni) {
                return res.status(404).send({
                    message: "Category not found with id " + req.params.Id
                });
            }
            res.send(uni);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Category not found with id " + req.params.Id
                });
            }
            return res.status(500).send({
                message: "Error retrieving Category with id " + req.params.Id
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
    }

    // Find order and update it with the request body
    Category.findByIdAndUpdate(req.params.Id, {
        name: req.body.name,
        hours: req.body.hours
    }, { new: true })
        .then(uni => {
            if (!uni) {
                return res.status(404).send({
                    message: "Category not found with id " + req.params.Id
                });
            }
            res.send(uni);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Category not found with id " + req.params.Id
                });
            }
            return res.status(500).send({
                message: "Error updating Category with id " + req.params.Id
            });
        });
};

// Delete a order with the specified Id in the request
exports.delete = (req, res) => {
    Category.findByIdAndRemove(req.params.Id)
        .then(uni => {
            if (!uni) {
                return res.status(404).send({
                    message: "Order not found with id " + req.params.Id
                });
            }
            res.send({ message: "Category deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Category not found with id " + req.params.Id
                });
            }
            return res.status(500).send({
                message: "Could not delete Category with id " + req.params.Id
            });
        });
};