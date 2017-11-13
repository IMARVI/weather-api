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

  Usuario.remoteMethod('disponibilidad', {
        accepts: {arg: 'email',
        type: 'string',
        required: true
      },
        returns: {arg: 'disponible', type: 'boolean'},
        http: {path:'/disponibilidad', verb: 'get'}
  });
};
