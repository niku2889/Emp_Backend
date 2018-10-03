const Site = require('../models/sites.model.js');

// Create and Save a new order 
exports.create = (req, res) => {
    //Validate request
    if (!req.body.name) {
        return res.status(400).send({
            message: "name content can not be empty"
        });
    } else if (!req.body.siteNo) {
        return res.status(400).send({
            message: "SiteNo content can not be empty"
        });
    }

    const site = new Site({
        name: req.body.name,
        siteNo: req.body.siteNo
    });

    // Save Order in the database
    site.save()
        .then(uni => {
            res.send(uni);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the site."
            });
        });
};

// Retrieve and return all orders from the database.
exports.findAll = (req, res) => {
    Site.find()
        .then(uni => {
            res.send(uni);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Sites."
            });
        });
}

// Find a single order with a Id
exports.findOne = (req, res) => {
    Site.findById(req.params.Id)
        .then(uni => {
            if (!uni) {
                return res.status(404).send({
                    message: "Site not found with id " + req.params.Id
                });
            }
            res.send(uni);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Site not found with id " + req.params.Id
                });
            }
            return res.status(500).send({
                message: "Error retrieving Site with id " + req.params.Id
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
    } else if (!req.body.siteNo) {
        return res.status(400).send({
            message: "SiteNo content can not be empty"
        });
    }

    // Find order and update it with the request body
    Site.findByIdAndUpdate(req.params.Id, {
        name: req.body.name,
        siteNo: req.body.siteNo
    }, { new: true })
        .then(uni => {
            if (!uni) {
                return res.status(404).send({
                    message: "Site not found with id " + req.params.Id
                });
            }
            res.send(uni);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Site not found with id " + req.params.Id
                });
            }
            return res.status(500).send({
                message: "Error updating Site with id " + req.params.Id
            });
        });
};

// Delete a order with the specified Id in the request
exports.delete = (req, res) => {
    Site.findByIdAndRemove(req.params.Id)
        .then(uni => {
            if (!uni) {
                return res.status(404).send({
                    message: "Order not found with id " + req.params.Id
                });
            }
            res.send({ message: "Site deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Site not found with id " + req.params.Id
                });
            }
            return res.status(500).send({
                message: "Could not delete Site with id " + req.params.Id
            });
        });
};