angular.module('myApp.view2', ['ngRoute'])
.config(function($routeProvider) {
  $routeProvider.when('/view2/:id',{
    templateUrl:'view2/view2.html',
    controller:'view2Ctrl'
  })
})
.controller('view2Ctrl',function($scope,$http,$routeParams,$location,empfactory,$localStorage) {
  // $http.get('view1/employee.json').success(function(data) {
  //  $scope.det = data.emp[$routeParams.id - 1];
  //

      var data=empfactory.getDataObj();

     $scope.det = data[$routeParams.id - 1];
    //
     $scope.obj={"firstname":$scope.det.firstname,"lastname":$scope.det.lastname,"phone":$scope.det.phone}



  console.log($scope.obj);

  $scope.reset=function(){
  $scope.obj = {"firstname":$scope.det.firstname,"lastname":$scope.det.lastname,"phone":$scope.det.phone};
  }
  $scope.update=function(){
        console.log($scope.det);
    $scope.det = {"firstname":$scope.obj.firstname,"lastname":$scope.obj.lastname,"phone":$scope.obj.phone};
    // console.log($scope.det);
    data[$routeParams.id - 1] = $scope.det;
    //console.log($scope.det);
    empfactory.setDataObj(data);
    $localStorage.load=1;
    $location.path("view1");
  }
  $scope.clear=function(){
    $scope.obj.firstname=" ";
    $scope.obj.lastname=" ";
    $scope.obj.phone=" ";
  }

})
