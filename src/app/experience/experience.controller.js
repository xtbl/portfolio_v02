'use strict';

angular.module('portfolio')
  .controller('ExperienceCtrl', function ($scope) {

    $scope.educationList = [
      {
        year:2014,
        title: 'Education Degree',
        institution: 'University',
        type: 'degree'
      },
      {
        year:2014,
        title: 'Education Degree',
        institution: 'University',
        type: 'degree'
      },
      {
        year:2014,
        title: 'Education Degree',
        institution: 'University',
        type: 'degree'
      },
      {
        year:2014,
        title: 'Education Degree',
        institution: 'University',
        type: 'certification'
      },
      {
        year:2014,
        title: 'Education Degree',
        institution: 'University',
        type: 'certification'
      },
      {
        year:2014,
        title: 'Education Degree',
        institution: 'University',
        type: 'certification'
      },
      {
        year:2014,
        title: 'Education Degree',
        institution: 'University',
        type: 'certification'
      },
      {
        year:2014,
        title: 'Education Degree',
        institution: 'University',
        type: 'certification'
      }
    ];
    $scope.experienceList = [
      {
        position: 'Web Developer',
        company: 'Company Name',
        from: "February 2012",
        to: 'February 2014',
        description: 'Coding: HTML5, CSS3, JavaScript, jQuery, PHP.'
      },
      {
        position: 'Web Developer',
        company: 'Company Name',
        from: "February 2012",
        to: 'February 2014',
        description: 'Coding: HTML5, CSS3, JavaScript, jQuery, PHP.'
      },
      {
        position: 'Web Developer',
        company: 'Company Name',
        from: "February 2012",
        to: 'February 2014',
        description: 'Coding: HTML5, CSS3, JavaScript, jQuery, PHP.'
      }

    ];

  });
