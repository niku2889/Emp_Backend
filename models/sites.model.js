const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SitesSchema = new Schema({
    name:Schema.Types.String,
    siteNo: Schema.Types.String,
});

module.exports = mongoose.model('Site', SitesSchema);