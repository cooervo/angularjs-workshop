angular
  .module('foobar-app')
  .service('HttpService', function($http) {
      this.baseUrl = 'http://localhost:3000'

      this.get = function(url) {
        return $http.get(this.baseUrl + url)
      }

      this.post = function(url, body) {
        return $http.post(this.baseUrl + url, body)
      }
    }
  );