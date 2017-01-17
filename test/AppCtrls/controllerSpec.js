describe('AppController', function() {
  beforeEach(module('AppCtrls'));

  var $controller, $state, $http, $sce = {};



  beforeEach(inject(function(_$controller_, _$state_, _$http_){
    $controller = _$controller_;
    $state = _$state_;
    $http = _$http_;
  }));

  describe('searchController', function() {
    it('check scope', function() {
      var $scope = {};
      var controller = $controller('searchController', { $scope: $scope });

      expect($scope.search).toEqual(false);
    });
  });
});
