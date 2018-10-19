const Store = require('../models/store.model.js');

// Create and Save a new order 
exports.create = (req, res) => {
    const store = new Store({
        name: req.body.name,
    });

    // Save Order in the database
    store.save()
        .then(uni => {
            res.send(uni);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Store."
            });
        });
};

// Retrieve and return all orders from the database.
exports.findAll = (req, res) => {
    Store.find()
        .then(uni => {
            res.send(uni);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Store."
            });
        });
}

// Find a single order with a Id
exports.findOne = (req, res) => {
    Store.findById(req.params.Id)
        .then(uni => {
            if (!uni) {
                return res.status(404).send({
                    message: "Store not found with id " + req.params.Id
                });
            }
            res.send(uni);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Store not found with id " + req.params.Id
                });
            }
            return res.status(500).send({
                message: "Error retrieving Store with id " + req.params.Id
            });
        });
};

// Update a order identified by the Id in the request
exports.update = (req, res) => {
    //Validate request
    // Find order and update it with the request body
    Store.findByIdAndUpdate(req.params.Id, {
        name: req.body.name,
    }, { new: true })
        .then(uni => {
            if (!uni) {
                return res.status(404).send({
                    message: "Store not found with id " + req.params.Id
                });
            }
            res.send(uni);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Store not found with id " + req.params.Id
                });
            }
            return res.status(500).send({
                message: "Error updating Site with id " + req.params.Id
            });
        });
};

// Delete a order with the specified Id in the request
exports.delete = (req, res) => {
    Store.findByIdAndRemove(req.params.Id)
        .then(uni => {
            if (!uni) {
                return res.status(404).send({
                    message: "Store not found with id " + req.params.Id
                });
            }
            res.send({ message: "Store deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Store not found with id " + req.params.Id
                });
            }
            return res.status(500).send({
                message: "Could not delete Store with id " + req.params.Id
            });
        });
};