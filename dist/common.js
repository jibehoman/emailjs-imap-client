'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var LOG_LEVEL_NONE = exports.LOG_LEVEL_NONE = 1000;
var LOG_LEVEL_ERROR = exports.LOG_LEVEL_ERROR = 40;
var LOG_LEVEL_WARN = exports.LOG_LEVEL_WARN = 30;
var LOG_LEVEL_INFO = exports.LOG_LEVEL_INFO = 20;
var LOG_LEVEL_DEBUG = exports.LOG_LEVEL_DEBUG = 10;
var LOG_LEVEL_ALL = exports.LOG_LEVEL_ALL = 0;

var toTypedArray = exports.toTypedArray = function toTypedArray(str) {
  return new Uint8Array(str.split('').map(function (char) {
    return char.charCodeAt(0);
  }));
};
var fromTypedArray = exports.fromTypedArray = function fromTypedArray(arr) {
  return String.fromCharCode.apply(null, arr);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21tb24uanMiXSwibmFtZXMiOlsiTE9HX0xFVkVMX05PTkUiLCJMT0dfTEVWRUxfRVJST1IiLCJMT0dfTEVWRUxfV0FSTiIsIkxPR19MRVZFTF9JTkZPIiwiTE9HX0xFVkVMX0RFQlVHIiwiTE9HX0xFVkVMX0FMTCIsInRvVHlwZWRBcnJheSIsIlVpbnQ4QXJyYXkiLCJzdHIiLCJzcGxpdCIsIm1hcCIsImNoYXIiLCJjaGFyQ29kZUF0IiwiZnJvbVR5cGVkQXJyYXkiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJhcHBseSIsImFyciJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxJQUFNQSwwQ0FBaUIsSUFBdkI7QUFDQSxJQUFNQyw0Q0FBa0IsRUFBeEI7QUFDQSxJQUFNQywwQ0FBaUIsRUFBdkI7QUFDQSxJQUFNQywwQ0FBaUIsRUFBdkI7QUFDQSxJQUFNQyw0Q0FBa0IsRUFBeEI7QUFDQSxJQUFNQyx3Q0FBZ0IsQ0FBdEI7O0FBRUEsSUFBTUMsc0NBQWUsU0FBZkEsWUFBZTtBQUFBLFNBQU8sSUFBSUMsVUFBSixDQUFlQyxJQUFJQyxLQUFKLENBQVUsRUFBVixFQUFjQyxHQUFkLENBQWtCO0FBQUEsV0FBUUMsS0FBS0MsVUFBTCxDQUFnQixDQUFoQixDQUFSO0FBQUEsR0FBbEIsQ0FBZixDQUFQO0FBQUEsQ0FBckI7QUFDQSxJQUFNQywwQ0FBaUIsU0FBakJBLGNBQWlCO0FBQUEsU0FBT0MsT0FBT0MsWUFBUCxDQUFvQkMsS0FBcEIsQ0FBMEIsSUFBMUIsRUFBZ0NDLEdBQWhDLENBQVA7QUFBQSxDQUF2QiIsImZpbGUiOiJjb21tb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgTE9HX0xFVkVMX05PTkUgPSAxMDAwXG5leHBvcnQgY29uc3QgTE9HX0xFVkVMX0VSUk9SID0gNDBcbmV4cG9ydCBjb25zdCBMT0dfTEVWRUxfV0FSTiA9IDMwXG5leHBvcnQgY29uc3QgTE9HX0xFVkVMX0lORk8gPSAyMFxuZXhwb3J0IGNvbnN0IExPR19MRVZFTF9ERUJVRyA9IDEwXG5leHBvcnQgY29uc3QgTE9HX0xFVkVMX0FMTCA9IDBcblxuZXhwb3J0IGNvbnN0IHRvVHlwZWRBcnJheSA9IHN0ciA9PiBuZXcgVWludDhBcnJheShzdHIuc3BsaXQoJycpLm1hcChjaGFyID0+IGNoYXIuY2hhckNvZGVBdCgwKSkpXG5leHBvcnQgY29uc3QgZnJvbVR5cGVkQXJyYXkgPSBhcnIgPT4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCBhcnIpXG4iXX0=