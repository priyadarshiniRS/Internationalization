angular.module('myApp.login',
['ngRoute',
'ngStorage',
])
.config(function($routeProvider){
  $routeProvider.when('/login', {
    templateUrl: 'login/login.html',
    controller: 'loginCtrl'
  });
})
.controller('loginCtrl',function($scope,$location,$localStorage){

  $scope.validate=function(){
        console.log("Login");
        if($scope.id=="demo" && $scope.psw=="demo123")
        {
        $location.path("view1");
          $localStorage.flag=1;
        }
       if($localStorage.flag!=1)
          alert("incorrect id or password");

    }
    })
