const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StoresSchema = new Schema({
    name:Schema.Types.String,
});

module.exports = mongoose.model('Store', StoresSchema);