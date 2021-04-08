var AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-2'});
var rek = new AWS.Rekognition();

exports.handler = function(req,ctx,callback) {

  let imagen1 = req.imagen1;
  let imagen2 = req.imagen2;
  let ext = req.extension;
  let similar_p = req.similitud;
  
  let params = {
    SourceImage: {
        Bytes: Buffer.from(imagen1, 'base64')     
    }, 
    TargetImage: {
        Bytes: Buffer.from(imagen2, 'base64')    
    },
    SimilarityThreshold: similar_p
  };

  rek.compareFaces(params, function(err, data) {
    if (err) {
      callback("Error: ",err);
    }else {   
      callback(null,data);      
    }
  });
};
