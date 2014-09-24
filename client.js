var request = require('request'),
// Hopefully using this character works...
  badCharacter = '�';

var getText = function () {

//  var options = {
//    url: 'http://localhost:8888',
//    method: 'GET',
//    qs: {}
//  };
  request.get('http://localhost:8888', function (err, response, data) {
    if (err) {
      console.log(err);
    } else if (response.statusCode === 200) {
      console.log('[%s] Data received.', data);
      console.log('Contains corrupted character %s:', badCharacter, (data.indexOf(badCharacter) >= 0));
    } else {
      console.error('[%s] Error status code: %s', file, response.statusCode);
    }
  });
};

getText();

