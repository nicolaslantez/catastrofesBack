var centersDao = require('../dao/CenterDao');

module.exports = function(app){
    //app.get - post de usuarios

  app.get('/centers', function(req,res){

    res.send(centerDao.getAll());

  },
  app.get('/center/:id', function(req, res){
    var id = req.params.id;
    res.send(centerDao.getCenter(id));
  }),
  app.post('/center', function(req, res){
    centerDao.insertCenter(req.body);
    res.writeHead(200);
    res.end('center added');
  }),
  app.put('/center/:id', function(req,res){
    centerDao.updateCenter(req.params.id, req.body);
    res.writeHead(200);
    res.end('center updated');
  }),
  app.delete('/center/:id', function(req, res){
    centerDao.delete(req.params.id);
    res.writeHead(200);
    res.end('center updated');
  }),
  // hardcode data
  app.get('/loadCenters', function(req,res){
    for (var i=0;i<5;i++){
      var center= new Center({
        name:'a'+i;
        numberOfPeople: 0;
        capacity:Math.floor((Math.random() * 1000) + 1);
        direction:'abc'+i;
        lat: Math.floor((Math.random()*180)-90);
        long: Math.floor((Math.random()*360)-180);
      });
      CenterDao.insertCenter(center);
    }
    res.writeHead(200);
    res.end('centers added');

  },



});
