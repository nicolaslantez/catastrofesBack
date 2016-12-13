var mongoose = require('mongoose');

var Schema = mongoose.Schema;

/* Persistir: Nombre, Cantidad de personas, cantidad de personas que soporta, dirección, coordenadas.*/

//Schema Query
var helpCenterSchema = new Schema({
    name: { type: String },
    numberOfPeople: { type: Number }, // { type: Number,  min: 1, max: 500 } another example
    capacity: Number,
    direction: String,
    lat: String,
    long: String,
}, { collection : 'help_centers' })

var Centro = mongoose.model('help_center', helpCenterSchema);


module.exports = help_center;