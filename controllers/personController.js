var personDao = require('../dao/personDao');

module.exports = function(app){

    app.get('/person', function(req,res){
        personDao.getAll(function(persons){
            res.send(persons);
        });
    },

     app.get('/loadPerson', function(req,res){
        for(var i = 0 ; i < 20 ; i ++ ){
            var newPerson = {name: "Nombre " + i, last_name: "Apellido " + i, age: i, directionCenter: "Direction " + i, photo: "Photo " + i, url_image : "Image " + i ;
            personDao.insertPerson(newPerson);
        }
    }

});
