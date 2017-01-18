A demo app for unit testing in Angular.

Run `npm install` and `npm test`.

### Code changes and good-to-know

1. I updated angular version to 1.6.1. Angular 1.2 was released on 2014 which is a almost obselete version. Please use at least 1.5. There are some changes I have to made because angular changes, in order to pass tests.
2. For any `JSONP` urls they have to be whitelisted in config by `$sce` service. See code line20-25.
3. `JSONP`'s `callback` parameter changes to `jsonpCallbackParam`.
4. Before I wanted to refactor `$http` services in controller into a sole `Service` module but because of code's tight couple and I'm kind of lazy, I didn't finish it. But for unit test and code modularity it is recommended to do so.
5. There is a demo `Service` called `service.js` and demo unit test specs in test/Service/demoSpec.js which showes unit test for services.
  