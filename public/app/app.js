angular.module('solarApp',['appRoutes','loginController','authServices','ngAnimate','regControllers','managementController','userServices','ngMap'])

.config(function($httpProvider){

$httpProvider.interceptors.push('AuthInterceptors');

});



