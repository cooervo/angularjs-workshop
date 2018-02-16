angular.module('foobar-app')
  .filter('dateFormatter', function () {
  return function (value) {
    let date = new Date(value)
    return `${date.getDate()} / ${date.getMonth()} / ${date.getFullYear()}`;
  };
});
