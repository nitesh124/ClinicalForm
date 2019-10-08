const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const variableRoutes = express.Router();
const PORT = 8001;

let Variable = require('./variable');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/variables', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("Database connection established");
})

variableRoutes.route('/').get(function(req, res) {
    Variable.find(function(err, variables) {
        if (err) {
            console.log(err);
        } else {
            res.json(variables);
        }
    });
});

variableRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Variable.findById(id, function(err, variable) {
        res.json(variable);
    });
});

variableRoutes.route('/add').post(function(req, res) {
    let variable = new Variable(req.body);
    variable.save()
        .then(variable => {
            res.status(200).json({'variable': 'variable added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new variable failed');
        });
});

variableRoutes.route('/update/:id').post(function(req, res) {
    Variable.findById(req.params.id, function(err, variable) {
        if (!variable)
            res.status(404).send('data is not found');
        else
            variable.variable = req.body.variable_variableName;
            variable.variable_responsible = req.body.variable_category;
            variable.variable_priority = req.body.variable_crfDataType;
            variable.variable_completed = req.body.variable_valueLowerLimit;
            variable.variable_completed = req.body.variable_valueUpperLimit;
            variable.variable_completed = req.body.variable_units;
            variable.variable_completed = req.body.variable_description;
            variable.variable_completed = req.body.variable_formName;
            variable.variable_completed = req.body.variable_isRequired;

            variable.save().then(variable => {
                res.json('Variable updated');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

app.use('/variables', variableRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});