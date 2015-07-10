angular.module('app', ['ngNewRouter', 'app.home'])
  .controller('AppController', ['$router', AppController]);

function AppController ($router) {}