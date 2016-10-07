angular.module('myApp.view1', ['ngRoute'])


.run(function($localStorage,$location){
    if($localStorage.flag==1){
      $location.path("view1");
    }
    else{
      $location.path("login");
    }

})
.config(function($routeProvider) {
  $routeProvider.when('/view1',{
    templateUrl:'view1/view1.html',
    controller:'view1Ctrl'
  })
})
.factory("empfactory",function($http){
  var localdata=[];
  return{
    "res":function(){
      return $http.get('view1/employee.json');
   },
   "setDataObj" : function(data){
     localdata = data;
   },
   "getDataObj" : function(data){
     return localdata;
   }
 }
})
.controller('view1Ctrl',function($scope,$http,empfactory,$localStorage) {
  // $http.get('view1/employee.json').success(function(data) {
  //  $scope.emp = data.emp;
// })

  $scope.cur=["$","USD$","£","¢"];
    
  if($localStorage.load==1){
    console.log('now assign me the updated object');
      var data=empfactory.getDataObj();
      $scope.emp=data;
      $localStorage.load=0;

  }
    else{

      empfactory.res().success(function(data) {

     $scope.emp = data.emp;
       empfactory.setDataObj(data.emp);

    })
  }


$scope.delete = function (index) {
    $scope.emp.splice(index, 1);
}
})
