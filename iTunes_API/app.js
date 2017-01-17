
var myApp = angular.module("itunesSearchApp",[ "ui.router", "AppCtrls"]);

myApp.config(function ($stateProvider, $urlRouterProvider){
   
    $urlRouterProvider.otherwise('/');
    $stateProvider.state("search", {
        url: "/?:term",
        templateUrl: "home.html",
        controller: "searchController"
      })
    .state("album", {
        url: "/album/:id",
        templateUrl: "list.html",
        controller: "albumController"
      });
});

var ctrls = angular.module("AppCtrls", []);

ctrls.controller("searchController", function ($scope, $http, $sce, $state) {
    
    $scope.doSearch = search;
    $scope.closeVideo = closeVideo;
    $scope.playVideo = playVideo;
    $scope.searchTerm = "";
    $scope.sortProp = "artistName";
    $scope.showVideo = false;
    $scope.searching = false;
    $scope.previewUrl = "";

    if ($state.params.term && $state.params.term.length > 0) {
        $scope.searchTerm = $state.params.term;
        search(false);
    }
    scope = $scope;
   
 
    function search(changeURl) {
        changeURl = changeURl == false ? false : true;
        if (changeURl) {
            $state.transitionTo('search', {term: $scope.searchTerm}, { notify: false });
        }
        $scope.closeVideo();
        $scope.mediaSearchResults = [];
        $scope.searching = true;
        $http
            .jsonp('https://itunes.apple.com/search', {
               params: { 
                term: $scope.searchTerm,
                media: "music",
                country: "US",
                callback: "JSON_CALLBACK"
                } 
            })
            .success(function (response) {
                $scope.mediaSearchResults = response.results; 
            })
            .finally(function () {
                $scope.searching = false; 
            });
    };

    function playVideo(item) {
        $scope.title = item.trackName || item.collectionName;
        $scope.artist = item.artistName;
        $scope.previewUrl = $sce.trustAsResourceUrl(item.previewUrl);
        $scope.showVideo = true;
    };

    function closeVideo() {
        $scope.previewUrl = "";
        $scope.showVideo = false;
    };

});

myApp.directive('videoplayer', function () {
  return {
    restrict: 'E',
    replace: true,
    template: '<video type="video/mp4"></video>',
    link: function (scope, element, attributes) {
      attributes.$observe('src', function (val) {
        if (val) { element[0].load(); element[0].play(); }
        else { element[0].pause(); }
      });
    }
  };
});


ctrls.controller( "albumController", function($scope, $state, $http) {
    var albumId = $state.params.id;
    console.log("Ctrl2 loaded.");
    $scope.mediaSearchResults = [];
    ss = $scope;
    $http
        .jsonp('https://itunes.apple.com/lookup', {
           params: { 
            id: albumId,
            entity: "song",
            callback: "JSON_CALLBACK"
            } 
        })
        .success(function (response) {
            $scope.mediaSearchResults = response.results; 
        });
});




ctrls.controller("demoController", function($scope, $http, $state){
  $scope.x = 1;
})

