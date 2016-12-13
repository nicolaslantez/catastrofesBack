var Center = require('../models/helpCenterModel');

module.exports  =  {
    insertCenter: function(centro){
        var center = new Center({
            name: centro.name,
            numberOfPeople: centro.numberOfPeople,
            capacity: centro.capacity,
            direction: centro.direction,
            lat: centro.lat,
            long: centro.long
        });

        center.save(function(err){
            if ( err ) throw err;
            console.log("HelpCenter Saved Successfully");
        });
    },
    getCenter: function(centerId, callback){
        Center.findOne({'id': centerId}, function(err, center){
            if (err) return console.error(err);
            if(center != undefined){
                callback(center);
            }else{
                callback(center);
            };
        });
    },

    getUser: function(centerId, callback){
        Center.findOne({'id': centerId}, function(err, center){
            if (err) return console.error(err);
            if(user != undefined){
                callback(center);
            }else{
                callback(center);
            };
        });
    },

    getAll: function(fn){
        Center.find(function(err, centers) {
            if (err)  console.error(err);
            fn(centers);
        });
    }
}