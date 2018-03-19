window.addEventListener('load', function() {

  var webAuth = new auth0.WebAuth({
    domain: 'ffiacco.eu.auth0.com',
    clientID: 'V4ILG7OVkDkvcyF8VP63bxpAhHvqrZDi',
    responseType: 'token id_token',
    audience: 'https://ffiacco.eu.auth0.com/userinfo',
    scope: 'openid',
    redirectUri: 'http://localhost:8000/launch.html?fhirServiceUrl=https://api-v5-stu3.hspconsortium.org/ffiacco/open&patientId=SMART-665677'
  });

  
  webAuth.authorize();
  

});