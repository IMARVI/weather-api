'use strict';

module.exports = function(Usuario) {

  Usuario.disponibilidad = function(email, cb) {
    console.log(email);
    var resp = [];
    Usuario.find({where : {email:email}}, function(err,response){
      console.log(response.length);
      if(response.length>0){
        cb(null,false);
      }else{
        cb(null,true);
      }
    });
  }

  Usuario.login = function(email, cb) {
    console.log(email);
    var resp = [];
    Usuario.find({where : {email:email}}, function(err,response){
      console.log(response);
      cb(null,response);
    });
  }

  Usuario.remoteMethod('disponibilidad', {
        accepts: {arg: 'email',
        type: 'string',
        required: true
      },
        returns: {arg: 'disponible', type: 'boolean'},
        http: {path:'/disponibilidad', verb: 'get'}
  });

  Usuario.remoteMethod('login', {
    accepts: {arg: 'email',
    type: 'string',
    required: true
  },
    returns: {arg: 'usr', type: 'Usuario'},
    http: {path:'/login', verb: 'get'}
});
};
