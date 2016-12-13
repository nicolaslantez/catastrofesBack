var centersDao = require('../dao/CenterDao');

module.exports = function(app){

  app.get('/centers', function(req,res){

    centers=centerDao.getAll();

    if (centers == 'undefined'){
      res.writeHead(404);
      res.end('centers not found')
    } else {
      res.writeHead(200);
      res.send(center);
    }
  }),
  app.get('/center/:id', function(req, res){
    var id = req.params.id;
    var center=centerDao.getCenter(id);
    if (center == 'undefined'){
      res.writeHead(404);
      res.end('center not found')
    } else {
      res.writeHead(200);
      res.send(center);
    }
  }),
  app.post('/center', function(req, res){
    centerDao.insertCenter(req.body);
    if (err){
      res.writeHead(404);
      res.end('center not added')

    }else{
      res.writeHead(200);
      res.end('center added');
    }
  }),
  app.put('/center/:id', function(req,res){
    centerDao.updateCenter(req.params.id, req.body);
    if (err){
      res.writeHead(404);
      res.end('center not updated')

    }else{
      res.writeHead(200);
      res.end('center updated');
    }
  }),
  app.delete('/center/:id', function(req, res){
    centerDao.delete(req.params.id);
    if (err){
      res.writeHead(404);
      res.end('center not deleted')
    }else{
      res.writeHead(200);
      res.end('center deleted');
    }
  }),
  // hardcode data
  app.get('/loadCenters', function(req,res){
    for (var i=0;i<5;i++){
      var center= new Center({
        name:"a"+i,
        numberOfPeople: 0,
        capacity:Math.floor((Math.random() * 1000) + 1),
        direction:"abc"+i,
        lat: Math.floor((Math.random()*180)-90),
        long: Math.floor((Math.random()*360)-180),
      });
      CenterDao.insertCenter(center);
    }
    res.writeHead(200);
    res.end('centers added');
  });

};
