var mainApp = angular.module("mainApp1", []);

mainApp.controller('myCtrl1', function($scope) {
   $scope.test = {
      subjects:[
         {treatment:'Klippning kort',price:200 + 'SEK'},
         {treatment:"Klippning lång",price:400 + 'SEK'},
         {treatment:'Färgning kort',price:400 + 'SEK'},
         {treatment:'Färgning lång',price:600 + 'SEK'},
         {treatment:'Slingor i folie',price:'Från ' + 500 + 'SEK'},
         {treatment:'Permanent',price:'Från ' + 500 + 'SEK'},
         {treatment:'Ombre Balayage',price:'Från ' + 600 + 'SEK'},
         {treatment:'Olaplex',price:300 + 'SEK'},
         {treatment:'Styling',price:190 + 'SEK'},
         {treatment:'Frans & Brynfärgning',price:180 + 'SEK'},
         {treatment:'Brynplockning',price:90 + 'SEK'},
         {treatment:'Avfärgning',price:300 + 'SEK'}
      ]};
});

mainApp.controller('myCtrl2', function($scope, $interval) {
      $scope.theTime = new Date().toLocaleTimeString();
      $interval(function () {
          $scope.theTime = new Date().toLocaleTimeString();
      }, 1000);
});
