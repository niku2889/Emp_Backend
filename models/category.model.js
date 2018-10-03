const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    name:Schema.Types.String,
    hours: Schema.Types.String,
});

module.exports = mongoose.model('Category', CategorySchema);