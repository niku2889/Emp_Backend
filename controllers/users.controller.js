const User = require('../models/users.model.js');

// Create and Save a new order 
exports.create = (req, res) => {
    //Validate request
    if (!req.body.name) {
        return res.status(400).send({
            message: "name content can not be empty"
        });
    } else if (!req.body.email) {
        return res.status(400).send({
            message: "Email content can not be empty"
        });
    } else if (!req.body.password) {
        return res.status(400).send({
            message: "password content can not be empty"
        });
    }

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    // Save Order in the database
    user.save()
        .then(uni => {
            res.send(uni);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the user."
            });
        });
};

// Retrieve and return all orders from the database.
exports.findAll = (req, res) => {
    User.find()
        .then(uni => {
            res.send(uni);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving User."
            });
        });
}

// Find a single order with a Id
exports.findOne = (req, res) => {
    User.findById(req.params.Id)
        .then(uni => {
            if (!uni) {
                return res.status(404).send({
                    message: "User not found with id " + req.params.Id
                });
            }
            res.send(uni);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "User not found with id " + req.params.Id
                });
            }
            return res.status(500).send({
                message: "Error retrieving User with id " + req.params.Id
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
    } else if (!req.body.email) {
        return res.status(400).send({
            message: "Email content can not be empty"
        });
    } else if (!req.body.password) {
        return res.status(400).send({
            message: "password content can not be empty"
        });
    }

    // Find order and update it with the request body
    User.findByIdAndUpdate(req.params.Id, {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }, { new: true })
        .then(uni => {
            if (!uni) {
                return res.status(404).send({
                    message: "User not found with id " + req.params.Id
                });
            }
            res.send(uni);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "User not found with id " + req.params.Id
                });
            }
            return res.status(500).send({
                message: "Error updating User with id " + req.params.Id
            });
        });
};

// Delete a order with the specified Id in the request
exports.delete = (req, res) => {
    User.findByIdAndRemove(req.params.Id)
        .then(uni => {
            if (!uni) {
                return res.status(404).send({
                    message: "User not found with id " + req.params.Id
                });
            }
            res.send({ message: "User deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "User not found with id " + req.params.Id
                });
            }
            return res.status(500).send({
                message: "Could not delete User with id " + req.params.Id
            });
        });
};