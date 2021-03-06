const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LogsSchema = new Schema({
    userName: Schema.Types.String,
    userEmail: Schema.Types.String,
    sites: [{
        siteName: Schema.Types.String,
        hoursWorked: Schema.Types.Number,
        noOfSubSite: Schema.Types.Number,
        purchaseReceipt: [{
            storeName: Schema.Types.String,
            amount: Schema.Types.Number
        }],
        units: [{
            siteHours: Schema.Types.Number,
            siteName: Schema.Types.String,
            notes: Schema.Types.String,
            unit: [{
                subSiteName: Schema.Types.String,
                unitTask: [{
                    category: Schema.Types.String,
                    hoursWorked: Schema.Types.Number,
                    subCategory: Schema.Types.String
                }]
            }]
        }]
    }],
    totalHoursWorked: Schema.Types.Number,
    createDate: Schema.Types.String,
    noSitesWorked: Schema.Types.Number,
});

module.exports = mongoose.model('Log', LogsSchema);