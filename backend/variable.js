const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Todo = new Schema({
    variable_variableName: {
        type: String
    },
    variable_category: {
        type: String
    },
    variable_crfDataType: {
        type: String
    },
    variable_valueLowerLimit: {
        type: Number
    },
    variable_valueUpperLimit: {
        type: Number
    },
    variable_units: {
        type: String
    },
    variable_description: {
        type: String
    },
    variable_formName: {
        type: String
    },
    variable_isRequired: {
        type: Boolean
    }
});

module.exports = mongoose.model('Variable', Variable);