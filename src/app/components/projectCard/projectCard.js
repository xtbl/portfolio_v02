'use strict';

angular.module('portfolio').directive('projectCard', function () {
  return {
    templateUrl: 'app/components/projectCard/projectCard.html',
    restrict: 'AE',
    scope: {
      projectData: '='
    },
    link: function (scope, element, attrs) {

      console.log(scope);
      console.log(element);
    }
  };
});
//TODO:
//  - add isolate scope
//  - add cards
//  - create projects service
