var path = require('path');
var mime = require('mime');
var fs = require('fs');


module.exports = function(app){

  app.get('/download', function(req, res){

    console.log('teste');

    var file = 'C:/teste.doc';
    console.log(file);
    var filename = path.basename(file);
    var mimetype = mime.lookup(file);

    res.setHeader('Content-disposition', 'attachment; filename=' + filename);
    res.setHeader('Content-type', mimetype);

    var filestream = fs.createReadStream(file);
    filestream.pipe(res);
  });
}