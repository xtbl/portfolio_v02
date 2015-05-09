angular.module('portfolio').directive('projectCard', function () {
  return {
    templateUrl: 'app/directives/projectCard.html',
    restrict: 'AE',
    link: function (scope, element, attrs) {
      console.log(element);
    }
  };
});
