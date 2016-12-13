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
        Center.findOne({'_id': centerId}, function(err, center){
            if (err) return console.error(err);
            if(center != undefined){
                callback(center);
            }else{
                console.log("center is undefined");
                callback(center);
            };
        });
    },
    getAll: function(fn){
        Center.find(function(err, centers) {
            if (err)  console.error(err);
            fn(centers);
        });
    },
    updateCenter: function(centerId, center){
        Center.findOne({'_id': centerId}, function(err, centro){
            if (err) return console.error(err);
            if(centro != undefined){
                centro.name = center.name;
                centro.numberOfPeople = center.numberOfPeople;
                centro.capacity = center.capacity;
                centro.direction = center.direction;
                centro.lat = center.lat;
                centro.long = center.long;
                centro.save(function(err){
                    if ( err ) throw err;
                    console.log("Center updated Successfully");
                    callback(centro);
                });
            };
        });
    },


}
