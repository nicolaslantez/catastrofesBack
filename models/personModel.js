var mongoose = require('mongoose');

var Schema = mongoose.Schema;

/* Persistir: Nombre, Cantidad de personas, cantidad de personas que soporta, dirección, coordenadas.*/

//Schema Query
var personSchema = new Schema({
    name: { type: String },
    last_name : { type: String },
    age: { type: Number }, 
    directionCenter: String,
    photo: String,
    url_image: String
}, { collection : 'people' })

var Person = mongoose.model('Person', personSchema);


module.exports = Person;