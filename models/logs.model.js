const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LogsSchema = new Schema({
    userName: Schema.Types.String,
    userEmail: Schema.Types.String,
    sites: [{
        siteName: Schema.Types.String,
        hoursWorked: Schema.Types.Number,
        noOfSubSite: Schema.Types.Number,
        notes:Schema.Types.String,
        purchaseReceipt: [{
            storeName: Schema.Types.String,
            amount: Schema.Types.Number
        }],
        units: [{
            siteHours: Schema.Types.Number,
            siteName: Schema.Types.String,
            unit: [{
                category: Schema.Types.String,
                hoursWorked: Schema.Types.Number,
                subCategory: Schema.Types.String,
                subSiteName: Schema.Types.String
            }]
        }]
    }],
    totalHoursWorked: Schema.Types.Number,
    createDate: Schema.Types.String,
    noSitesWorked: Schema.Types.Number,
});

module.exports = mongoose.model('Log', LogsSchema);