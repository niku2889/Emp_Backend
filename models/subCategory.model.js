const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubCategorySchema = new Schema({
    name:Schema.Types.String,
    hours: Schema.Types.String,
    categoryName:Schema.Types.String,
});

module.exports = mongoose.model('SubCategory', SubCategorySchema);