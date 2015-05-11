'use strict';

angular.module('portfolio')
  .controller('ProjectsCtrl', function ($scope, Project) {

    $scope.projectList = Project.getProjects();

  });
