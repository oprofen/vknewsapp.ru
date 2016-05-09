/*'use strict';

describe('MyApp', function () {
  var VKFactory, $rootScope, items;
  // You need to load modules that you want to test,
  // it loads only the "ng" module by default.
  beforeEach(module('vknewsappruApp'));

  beforeEach(function () {

    inject(function ($injector, _$rootScope_) {
      $rootScope = _$rootScope_;
      VKFactory = $injector.get('VKFactory');
      var promise = newsService.getItems('dogs', 50, false);
      promise.then(function (r) {
        items = r;
      }, function (e) {
        console.log(e)
      });
    });

  });
  it('can get items', function () {



    $rootScope.$apply();
    console.log(items);
    expect(items).toEqual(jasmine.any(Object));
  });
});
*/
