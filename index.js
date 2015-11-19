
 //* dependencies

var request = require('request'),
    config = require('./config');


function Tierion(key, username, datastore) {

  // Auth
  this.username = 'alexandrag2254@gmail.com';
  this.key = 'DTUi7hmwlcumDgl1+yppA7JF91vrv2IFihlAUS19/r0=';
	// we should test auth right now
}


//// get auth headers


Tierion.prototype.getAuthHeaders = function() {
  return { 
    'X-Username': this.username,
    'X-Api-Key': this.key
  }; 
}


 //// get database info from Tierion

Tierion.prototype.get_database = function(datastore_key, success, err) {
  // we could add options, such as output limits / include metadata

  var options = {
    uri: config.urls.get_database,
    method: 'GET',
    qs: {
      datastore_key: 'h_Tn_X9uO0KVV5zxTN4Uig'
    }
  };
  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log('hello');
      console.log(body)
      console.log(response)
      success(body);
    } else {
      err(error);
      console.log(error);
      console.log('error')
    }
  });
};

module.exports = Tierion;