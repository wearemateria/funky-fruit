'use strict';

angular.module('fruitGameApp')
  .controller('MainCtrl', function ($scope, $http, $state) {

    function detectKey(event){

      switch(event.which)
      {         
          case 97: //A
              $state.go('level');
              break;
           
          case 115: //S
              console.log("S");
              break;
           
          case 100: //D
              console.log("D");
              break;
           
          case 102: //F
              console.log("F");
              break;
               
          case 103: //G
              console.log("G");
              break;
      }
  }
  document.onkeypress=detectKey;

  });
