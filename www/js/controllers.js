angular.module('imageShare.controllers',[])
.controller('HomeController',['$scope','USER','$state',function($scope,USER,$state){
    $scope.user = {};
    $scope.next = function(){
        USER.nickname = $scope.user.nickname;
        $state.go('chat');
    }
}])

.controller('ChatCtrl', ['$rootScope', '$scope', function($rootScope, $scope){

}])