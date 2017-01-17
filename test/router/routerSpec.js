describe('router', function() {

  var $rootScope, $state, $injector, myServiceMock, state;

  beforeEach(function() {

    module('itunesSearchApp', function($provide) {
      $provide.value('myService', myServiceMock = {});
    });

    inject(function(_$rootScope_, _$state_, _$injector_, $templateCache) {
      $rootScope = _$rootScope_;
      $state = _$state_;
      $injector = _$injector_;

      // We need add the template entry into the templateCache if we ever
      // specify a templateUrl
      $templateCache.put('template.html', '');
    })
  });

  it('/search', function() {
    state = 'search'
    expect($state.href(state, { term: 1 })).toEqual('#/?term=1');
  });

  it('/album', function() {
    state = 'album'
    expect($state.href(state, { id: 1 })).toEqual('#/album/1');
  });

});
