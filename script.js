
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
    headline: "To do list",
    link: "https://bergstromcbb.github.io/lab_12",
    photo: "images/todo.png",
    description: "This was a lab we did to construct a to do list that you could add and remove tasks from",
    repolink: "https://github.com/bergstromcbb/lab_12"
  },{
    headline: "Decorating Words",
    link: "https://bergstromcbb.github.io/lab_13",
    photo: "images/wordwithdec.png",
    description: "With this project we learned how to first create a random saying generator of one word or a phrase and then decorate it at the touch of a button"
  },{
    headline: "It's that time of year",
    link: "https://lab-22.herokuapp.com/",
    photo: "images/balls.png",
    description: "This was my first experience with deplying a node server to heroko.  We pulled random sayings and graphics and even threw in an animation to smooth things out a bit."
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

