
var app = angular.module("mainApp",['ui.bootstrap']);

app.controller("infoSectionCtrl",function($scope){


  $scope.sectionInfo = [
  {
    headline: "Fan Site",
    link: "https://bergstromcbb.github.io/Bergstrom/Bergstrom_Bootstrap",
    photo: "images/designatedsurvivor.png",
    description: "This was my first bootstrap website done during my pre-work phase of bootcamp.  It was exciting to learn a new framework."
  },
  {
    headline: "Movie Theatre App",
    link: "https://bergstromcbb.github.io/midterm_project",
    photo: "images/grandcircustheaters.png",
    description: "This was our midterm project.  You can watch as our seat assignment changes and our reservation get stored."
  },
  {
    headline: "Mill's Grocery",
    link: "https://bergstromcbb.github.io/midterm_project",
    photo: "images/grocery.png",
    description: "This is a simple shopping cart app."
  },
  {
    headline: "is it or not",
    link: "https://bergstromcbb.github.io/codechallenge4",
    photo: "images/isitornot.png",
    description: "This was a fun code challenge that I did where you were able to figure out if a work or phrase were a palindrome."
  },{
    headline: "Mushy Madlibs",
    link: "https://bergstromcbb.github.io/lab_15_madlibs",
    photo: "images/madlibs.png",
    description: "This is a silly, sappy, romantic version of MadLibs.  We took routing to a new level with this project."
  },{
    headline: "Angular Routing",
    link: "https://bergstromcbb.github.io/lab_14/#/cat",
    photo: "images/angularRouting.png",
    description: "This was our first angularJS project.  It was great working with so many different templates and exciting updates."
  },{
    headline: "Poorman's Reddit",
    link: "https://bergstromcbb.github.io/reddit_lab",
    photo: "images/poormans.png",
    description: "sdfgsdf"
  }
  ];
  
});

app.directive("project", function(){
  return {
    restrict: 'E',
    templateUrl: 'portsection.html'
  };
});

app.controller('ModalCtrlr', function ($uibModal) {
  var $ctrl = this;
  $ctrl.items = ['Please Visit'];

  $ctrl.open = function (link, description, headline) {
    var modalInstance = $uibModal.open({
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      controllerAs: '$ctrl',
      resolve: {
        items: function () {
          return $ctrl.items;
        },
        headline: function () {
          return headline;
        },
        link: function () {
          return link;
        },
        description: function () {
          return description;
        },
      }
    });
  };
});

app.controller('ModalInstanceCtrl', function ($uibModalInstance, items, link, description, headline) {
  var $ctrl = this;
  $ctrl.items = items;
  $ctrl.link = link;
  $ctrl.description = description;
  $ctrl.headline = headline;
  

  $ctrl.ok = function () {
    $uibModalInstance.close();
  };
});

