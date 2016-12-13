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
  })
  app.delete('/center/:id', function(req, res){
    centerDao.delete(req.params.id);
    res.writeHead(200);
    res.end('center updated');
  })



});
