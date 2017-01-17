describe('AppCtrls', function() {
  beforeEach(module('ui.router'));
  beforeEach(module('AppCtrls'));

  var $controller, $state, $http, $sce, controller, $scope, $httpBackend;

  beforeEach(inject(function(_$controller_, _$state_, _$http_, _$sce_, _$httpBackend_ ){
    $controller = _$controller_;
    $state = _$state_;
    $http = _$http_;
    $sce = _$sce_;
    $scope = {};
    $httpBackend = _$httpBackend_;
  }));

  describe('/searchController', function() {
    beforeEach(function(){
      controller = $controller('searchController', { 
        $scope: $scope,
        $http: $http,
        $sce: $sce,
        $state: $state
      });
    });

    it('shoud be defined', function() {
      expect(controller).toBeDefined();
    });

    it('should have correct defaults', function(){
      expect($scope.sortProp).toEqual('artistName');
      expect($scope.showVideo).toBe(false);
      expect($scope.searching).toBe(false);
    });

    it('should correctly play video', function(){
      var item = {
        trackName: 'test',
        artistName: 'tester'
      }
      $scope.playVideo(item);
      expect($scope.title).toEqual('test');
      expect($scope.artist).toEqual('tester');
      expect($scope.showVideo).toBe(true);
    });

    function closeVideo() {
        $scope.previewUrl = "";
        $scope.showVideo = false;
    };

    it('should correctly play video', function(){
      $scope.closeVideo();
      expect($scope.previewUrl).toEqual('');
      expect($scope.showVideo).toBe(false);
    });



  });

});
