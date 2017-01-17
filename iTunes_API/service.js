angular.module('AsynService', [])
  .factory('myService', myService);

function myService($http) {
  return {
    demo: demo
  }

  function demo (ans) {
    return $http.get('https://yesno.wtf/api')
      .then(function(res){
        return res.data.answer;
      })
  }
}

myService.$inject = ['$http'];