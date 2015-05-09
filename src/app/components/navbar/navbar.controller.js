'use strict';

angular.module('portfolio')
  .controller('NavbarCtrl', function ($scope) {
    $scope.sections = [
      { name:"About", url:"about" },
      { name:"Projects", url:"projects" },
      { name:"Experience", url:"experience" },
      { name:"Contact", url:"contact" }
    ];
  });
