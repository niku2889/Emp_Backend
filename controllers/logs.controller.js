const Log = require('../models/logs.model.js');

// Create and Save a new order 
exports.create = (req, res) => {
    //Validate request
    if (!req.body.spentHours) {
        return res.status(400).send({
            message: "spentHours content can not be empty"
        });
    }

    const log = new Log({
        userName: req.body.userName,
        userEmail: req.body.userEmail,
        siteName: req.body.siteName,
        siteNo: req.body.siteNo,
        category: req.body.category,
        subCategory: req.body.subCategory,
        estimatedHours: req.body.estimatedHours,
        spentHours: req.body.spentHours,
        purchaseReceipt: req.body.purchaseReceipt,
        notes: req.body.notes,
        createDate: req.body.createDate,
        fileName: req.body.fileName,
        fileType: req.body.fileType
    });

    // Save Order in the database
    log.save()
        .then(uni => {
            res.send(uni);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the log."
            });
        });
};

// Retrieve and return all orders from the database.
exports.findAll = (req, res) => {
    Log.find()
        .then(uni => {
            res.send(uni);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Log."
            });
        });
}

// Find a single order with a Id
exports.findOne = (req, res) => {
    Log.findById(req.params.Id)
        .then(uni => {
            if (!uni) {
                return res.status(404).send({
                    message: "Log not found with id " + req.params.Id
                });
            }
            res.send(uni);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Log not found with id " + req.params.Id
                });
            }
            return res.status(500).send({
                message: "Error retrieving Log with id " + req.params.Id
            });
        });
};

// Update a order identified by the Id in the request
exports.update = (req, res) => {
    //Validate request
    if (!req.body.spentHours) {
        return res.status(400).send({
            message: "spentHours content can not be empty"
        });
    }


    // Find order and update it with the request body
    Log.findByIdAndUpdate(req.params.Id, {
        userName: req.body.userName,
        userEmail: req.body.userEmail,
        siteName: req.body.siteName,
        siteNo: req.body.siteNo,
        category: req.body.category,
        subCategory: req.body.subCategory,
        estimatedHours: req.body.estimatedHours,
        spentHours: req.body.spentHours,
        purchaseReceipt: req.body.purchaseReceipt,
        notes: req.body.notes,
        createDate: req.body.createDate,
        fileName: req.body.fileName,
        fileType: req.body.fileType
    }, { new: true })
        .then(uni => {
            if (!uni) {
                return res.status(404).send({
                    message: "Log not found with id " + req.params.Id
                });
            }
            res.send(uni);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Log not found with id " + req.params.Id
                });
            }
            return res.status(500).send({
                message: "Error updating Log with id " + req.params.Id
            });
        });
};

// Delete a order with the specified Id in the request
exports.delete = (req, res) => {
    Log.findByIdAndRemove(req.params.Id)
        .then(uni => {
            if (!uni) {
                return res.status(404).send({
                    message: "Log not found with id " + req.params.Id
                });
            }
            res.send({ message: "Log deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Log not found with id " + req.params.Id
                });
            }
            return res.status(500).send({
                message: "Could not delete Log with id " + req.params.Id
            });
        });
};