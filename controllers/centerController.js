var centersDAO = require('../DAO/CenterDAO');

module.exports = function(app){
    //app.get - post de usuarios

  app.get('/centers', function(req,res){

    res.send(centerDAO.getAll());

  },
  app.get('/center/:id', function(req, res){
    res.send()
  })



});
