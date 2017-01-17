describe('MyService', function() {
  beforeEach(module('AsynService'));

  var $http, $sce, $httpBackend, myService;

  beforeEach(inject(function( _$http_, _$sce_, _$httpBackend_, _myService_){
    $http = _$http_;
    $sce = _$sce_;
    $httpBackend = _$httpBackend_;
    myService = _myService_;
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should get api', function(){
    //var url = $sce.trustAsResourceUrl('https://yesno.wtf/api');
    var url = 'https://yesno.wtf/api';
    $httpBackend
      .expect('GET', url)
      .respond(200, { answer: 'yes' });
    myService.demo().then(function(ans){
      expect(ans).toEqual('yes');;
    })
    $httpBackend.flush();
  })
  

});
