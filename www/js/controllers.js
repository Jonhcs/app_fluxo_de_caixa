angular.module('starter.controllers', [])

.controller('DashCtrl', ['$scope','$http', function($scope, $http) {
  $scope.login = {email: '', password: ''}
  $scope.erro = ''

  
  $scope.logar = function() {
    $http({
      method : "GET",
      headers: {
        'Accept': 'aplication/json; charset=utf-8',
        'Content-Type': 'application/json, charset=utf-8'
      },
      url : "http://localhost:3000/administradores.json?email= " + $scope.login.email + "Senha= " + $scope.login.password
    }).then(function mySucces(response) {
      alert('ok');
    }, function myError(response){
      $scope.erro = 'Ocorreu um erro'
    }); 
  }
}])

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
