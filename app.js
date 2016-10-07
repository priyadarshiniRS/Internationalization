angular.module('myApp',
['ngRoute',
'ngStorage',
'myApp.view1',
'myApp.view2',
'myApp.login',
'pascalprecht.translate'])
.config(function($translateProvider){

  var en_translations = {
    "login" : "login",
    "uid" : "User Id",
    "pwd" : "password",
    "val" : "Validate",
    "v1" : "This is view 1",
    "del" : "delete",
    "fname" : "FirstName",
    "lname" : "LastName",
    "ph" : "Phone",
    "rs" : "Reset",
    "up" : "Update",
    "clr" : "Clear",
    "value" : "20"
  }

  var ta_translations = {
    "login" : "Pukupatikai",
    "uid" : "Payanuru Adaiyalam",
    "pwd" : "Kadavu Chol",
    "val" : "Uruthi Sei",
    "v1" : "Ithu Parvai 1",
    "del" : "Neekku",
    "fname" : "Muthal Peyar",
    "lname" : "Kadaisi Peyar",
    "ph" : "Tholaipesi En",
    "rs" : "Meetamai",
    "up" : "Membaduthu",
    "clr" : "Ali",
    "value" : "50"

  }

  $translateProvider.translations('en',en_translations);

  $translateProvider.translations('ta',ta_translations);

  $translateProvider.preferredLanguage('en');

})
.controller('mainCtrl',function($localStorage,$translate,$scope){
  $localStorage.flag=0;
  $scope.lang = function(ln){
  $translate.use(ln);
 }

})

.directive('hdir',function(){
  return{
  restrict:'EA',
  transclude:true,
  template:'<h4>**MY SAMPLE PROJECT** Author:<ng-transclude></ng-transclude><h4>',
}
})

.directive('fdir',function(){
  return{
  restrict:'EA',
  transclude:true,
  template:'Copyright of techjini',
}
})
