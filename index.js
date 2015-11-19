
 //* dependencies
var request = require('request'),
    config = require('./config');


function Tierion(key, username) {

  // Auth
  this.username = username;
  this.key = key;

}


//// get auth headers

Tierion.prototype.getAuthHeaders = function() {
  return { 
    'X-Username': this.username,
    'X-Api-Key': this.key
  }; 
}


 //// get database info from Tierion

Tierion.prototype.get_database = function(datastore_id, success, err) {
  // we could add options, such as output limits / include metadata

  var options = {
    uri: config.urls.get_database,
    method: 'GET',
    headers: this.getAuthHeaders(),
    qs: {
      datastore_id: '277'
    }
  };
  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log('hello');
      console.log(body)
      console.log(response.body);
      // console.log(response)
      // success(body);
    } else {
      // err(error);
      // console.log("response", response)
      console.log('body', response.body)
      console.log(response.statusCode)
      // console.log("error", error);
    }
  });
};


tierion = new Tierion('DTUi7hmwlcumDgl1+yppA7JF91vrv2IFihlAUS19/r0=', 'alexandrag2254@gmail.com') //key and username
tierion.getAuthHeaders();
tierion.get_database();
console.log('end of code');

module.exports = Tierion;