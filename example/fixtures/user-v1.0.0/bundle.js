// source: src/sdk/index.coffee
require.define('./Users/zk/work/hanzo/daisho/src/sdk', function (module, exports, __dirname, __filename, process) {
  module.exports = {
    Page: require('./Users/zk/work/hanzo/daisho/src/sdk/page'),
    Module: require('./Users/zk/work/hanzo/daisho/src/sdk/module')
  }
});
// source: src/sdk/page.coffee
require.define('./Users/zk/work/hanzo/daisho/src/sdk/page', function (module, exports, __dirname, __filename, process) {
  var Page;
  module.exports = Page = function () {
    Page.prototype.el = null;
    Page.prototype.module = null;
    function Page(el, module1) {
      this.el = el;
      this.module = module1
    }
    Page.prototype.load = function () {
    };
    Page.prototype.unload = function () {
    };
    Page.prototype.annotations = function () {
    };
    return Page
  }()
});
// source: src/sdk/module.coffee
require.define('./Users/zk/work/hanzo/daisho/src/sdk/module', function (module, exports, __dirname, __filename, process) {
  var Module;
  module['export'] = Module = function () {
    Module.prototype.json = null;
    function Module(json) {
      this.json = json
    }
    Module.prototype.load = function () {
    };
    Module.prototype.unload = function () {
    };
    return Module
  }()
});
// source: example/fixtures/user-v1.0.0/main.coffee
require.async('user-v1.0.0/bundle.js', function (module, exports, __dirname, __filename, process) {
  var Module, Page, User, ref, extend = function (child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key))
          child[key] = parent[key]
      }
      function ctor() {
        this.constructor = child
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor;
      child.__super__ = parent.prototype;
      return child
    }, hasProp = {}.hasOwnProperty;
  ref = require('./Users/zk/work/hanzo/daisho/src/sdk'), Page = ref.Page, Module = ref.Module;
  module.exports = User = function (superClass) {
    extend(User, superClass);
    function User() {
      return User.__super__.constructor.apply(this, arguments)
    }
    User.name = 'User';
    User.prototype.routes = {
      '/': null,
      '/create': null,
      '/edit': null
    };
    return User
  }(Module)
})//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlVzZXJzL3prL3dvcmsvaGFuem8vZGFpc2hvL3NyYy9zZGsvaW5kZXguY29mZmVlIiwiVXNlcnMvemsvd29yay9oYW56by9kYWlzaG8vc3JjL3Nkay9wYWdlLmNvZmZlZSIsIlVzZXJzL3prL3dvcmsvaGFuem8vZGFpc2hvL3NyYy9zZGsvbW9kdWxlLmNvZmZlZSIsIm1haW4uY29mZmVlIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJQYWdlIiwicmVxdWlyZSIsIk1vZHVsZSIsInByb3RvdHlwZSIsImVsIiwibW9kdWxlMSIsImxvYWQiLCJ1bmxvYWQiLCJhbm5vdGF0aW9ucyIsImpzb24iLCJVc2VyIiwicmVmIiwiZXh0ZW5kIiwiY2hpbGQiLCJwYXJlbnQiLCJrZXkiLCJoYXNQcm9wIiwiY2FsbCIsImN0b3IiLCJjb25zdHJ1Y3RvciIsIl9fc3VwZXJfXyIsInN1cGVyQ2xhc3MiLCJuYW1lIiwicm91dGVzIl0sIm1hcHBpbmdzIjoiOztFQUFBQSxNQUFBLENBQU9DLE9BQVAsR0FBaUI7QUFBQSxJQUNmQyxJQUFBLEVBQU1DLE9BQUEsQ0FBUSwyQ0FBUixDQURTO0FBQUEsSUFFZkMsTUFBQSxFQUFRRCxPQUFBLENBQVEsNkNBQVIsQ0FGTztBQUFBLEc7Ozs7RUNBakIsSUFBSUQsSUFBSixDO0VBRUFGLE1BQUEsQ0FBT0MsT0FBUCxHQUFpQkMsSUFBQSxHQUFRLFlBQVc7QUFBQSxJQUNsQ0EsSUFBQSxDQUFLRyxTQUFMLENBQWVDLEVBQWYsR0FBb0IsSUFBcEIsQ0FEa0M7QUFBQSxJQUdsQ0osSUFBQSxDQUFLRyxTQUFMLENBQWVMLE1BQWYsR0FBd0IsSUFBeEIsQ0FIa0M7QUFBQSxJQUtsQyxTQUFTRSxJQUFULENBQWNJLEVBQWQsRUFBa0JDLE9BQWxCLEVBQTJCO0FBQUEsTUFDekIsS0FBS0QsRUFBTCxHQUFVQSxFQUFWLENBRHlCO0FBQUEsTUFFekIsS0FBS04sTUFBTCxHQUFjTyxPQUZXO0FBQUEsS0FMTztBQUFBLElBVWxDTCxJQUFBLENBQUtHLFNBQUwsQ0FBZUcsSUFBZixHQUFzQixZQUFXO0FBQUEsS0FBakMsQ0FWa0M7QUFBQSxJQVlsQ04sSUFBQSxDQUFLRyxTQUFMLENBQWVJLE1BQWYsR0FBd0IsWUFBVztBQUFBLEtBQW5DLENBWmtDO0FBQUEsSUFjbENQLElBQUEsQ0FBS0csU0FBTCxDQUFlSyxXQUFmLEdBQTZCLFlBQVc7QUFBQSxLQUF4QyxDQWRrQztBQUFBLElBZ0JsQyxPQUFPUixJQWhCMkI7QUFBQSxHQUFaLEU7Ozs7RUNGeEIsSUFBSUUsTUFBSixDO0VBRUFKLE1BQUEsQ0FBTyxRQUFQLElBQW1CSSxNQUFBLEdBQVUsWUFBVztBQUFBLElBQ3RDQSxNQUFBLENBQU9DLFNBQVAsQ0FBaUJNLElBQWpCLEdBQXdCLElBQXhCLENBRHNDO0FBQUEsSUFHdEMsU0FBU1AsTUFBVCxDQUFnQk8sSUFBaEIsRUFBc0I7QUFBQSxNQUNwQixLQUFLQSxJQUFMLEdBQVlBLElBRFE7QUFBQSxLQUhnQjtBQUFBLElBT3RDUCxNQUFBLENBQU9DLFNBQVAsQ0FBaUJHLElBQWpCLEdBQXdCLFlBQVc7QUFBQSxLQUFuQyxDQVBzQztBQUFBLElBU3RDSixNQUFBLENBQU9DLFNBQVAsQ0FBaUJJLE1BQWpCLEdBQTBCLFlBQVc7QUFBQSxLQUFyQyxDQVRzQztBQUFBLElBV3RDLE9BQU9MLE1BWCtCO0FBQUEsR0FBWixFOzs7O0VDRjVCLElBQUFBLE1BQUEsRUFBQUYsSUFBQSxFQUFBVSxJQUFBLEVBQUFDLEdBQUEsRUFBQUMsTUFBQSxhQUFBQyxLQUFBLEVBQUFDLE1BQUE7QUFBQSxlQUFBQyxHQUFBLElBQUFELE1BQUE7QUFBQSxZQUFBRSxPQUFBLENBQUFDLElBQUEsQ0FBQUgsTUFBQSxFQUFBQyxHQUFBO0FBQUEsVUFBQUYsS0FBQSxDQUFBRSxHQUFBLElBQUFELE1BQUEsQ0FBQUMsR0FBQTtBQUFBO0FBQUEsZUFBQUcsSUFBQTtBQUFBLGFBQUFDLFdBQUEsR0FBQU4sS0FBQTtBQUFBO0FBQUEsTUFBQUssSUFBQSxDQUFBZixTQUFBLEdBQUFXLE1BQUEsQ0FBQVgsU0FBQTtBQUFBLE1BQUFVLEtBQUEsQ0FBQVYsU0FBQSxPQUFBZSxJQUFBO0FBQUEsTUFBQUwsS0FBQSxDQUFBTyxTQUFBLEdBQUFOLE1BQUEsQ0FBQVgsU0FBQTtBQUFBLGFBQUFVLEtBQUE7QUFBQSxPLDJCQUFBLEM7RUFBQUYsR0FBQSxHQUdJVixPQUFBLENBQVEsc0NBQVIsQ0FISixFQUNFRCxJQUFBLEdBQUFXLEdBQUEsQ0FBQVgsSUFERixFQUVFRSxNQUFBLEdBQUFTLEdBQUEsQ0FBQVQsTUFGRixDO0VBS0FKLE1BQUEsQ0FBT0MsT0FBUCxHQUF1QlcsSUFBQSxhQUFBVyxVQUFBO0FBQUEsSSx5QkFBQTtBQUFBLEk7O0tBQUE7QUFBQSxJQUNyQlgsSUFBQSxDQUFDWSxJQUFELEdBQU8sTUFBUCxDQURxQjtBQUFBLEksZUFHckJDLE0sR0FDRTtBQUFBLFdBQVksSUFBWjtBQUFBLE1BQ0EsV0FBWSxJQURaO0FBQUEsTUFFQSxTQUFZLElBRlo7QUFBQSxLLENBSm1CO0FBQUEsSSxXQUFBO0FBQUEsSUFBYXJCLE1BQWIsQyIsInNvdXJjZVJvb3QiOiIvZXhhbXBsZS9maXh0dXJlcy91c2VyLXYxLjAuMCJ9