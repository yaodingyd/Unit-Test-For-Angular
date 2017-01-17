describe('stateRouter', function() {

  var $rootScope, $state, $location, state;

  beforeEach(function() {
    module('itunesSearchApp');
    inject(function(_$rootScope_, _$state_, _$location_) {
      $rootScope = _$rootScope_;
      $state = _$state_;
      $location = _$location_;
    })
  });

  describe('/search', function() {
    beforeEach(function() {
      state = 'search';
      inject(function($templateCache) {
        $templateCache.put('home.html', '');
      })
    });

    it('should match url', function() {
      expect($state.href(state, { term: 1 })).toEqual('#!/?term=1');
    });

    it('should activate the state', function() {
      $state.go(state);
      $rootScope.$digest();
      expect($state.current.name).toBe(state);
    });
  })

  describe('/album', function() {
    beforeEach(function() {
      state = 'album';
      inject(function($templateCache) {
        $templateCache.put('list.html', '');
      })
    });

    it('should match url', function() {
      expect($state.href(state, { id: 1 })).toEqual('#!/album/1');
    });

    it('should activate the state', function() {
      $state.go(state);
      $rootScope.$digest();
      expect($state.current.name).toBe(state);
    });
  });

  describe('otherwise', function () {
    beforeEach(function() {
      state = '';
      inject(function($templateCache) {
        $templateCache.put('home.html', '');
      })
    });
    
    it('should go to default state', function () {
      $location.url('someurl');
      $rootScope.$digest();
      expect($state.current.name).toEqual('search');
    });
  });

});
