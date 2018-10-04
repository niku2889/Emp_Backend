const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LogsSchema = new Schema({
    userName: Schema.Types.String,
    userEmail: Schema.Types.String,
    siteName: Schema.Types.String,
    siteNo: Schema.Types.String,
    category: Schema.Types.String,
    subCategory: Schema.Types.String,
    estimatedHours: Schema.Types.String,
    spentHours: Schema.Types.String,
    purchaseReceipt: Schema.Types.String,
    notes: Schema.Types.String,
    createDate: Schema.Types.String,
    fileName: Schema.Types.String,
    fileType: Schema.Types.String,
});

module.exports = mongoose.model('Log', LogsSchema);