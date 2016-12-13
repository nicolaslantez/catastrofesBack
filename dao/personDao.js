var Person = require('../models/personModel');

module.exports  =  {
    insertPerson: function(person){
        var newPerson = new Person({
            name: person.name,
            last_name: person.last_name,
            age: person.age,
            directionCenter: person.directionCenter,
            photo: person.photo,
            url_image: person.url_image
        });

        newPerson.save(function(err){
            if ( err ) throw err;
            console.log("HelpCenter Saved Successfully");
        });
    },
    getAll: function(callback){
          Person.find(function(err, centers) {
            if (err)  console.error(err);
             callback(centers);
        });
    }
}