import { _meteorAngular } from 'meteor/angular';
import _ from 'underscore';

angular
    .module('productify')
    .config(config)

function config($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'client/ui/menu.html',
    controller: 'MenuCtrl as vm'
  })

  .state('app.home', {
    url: '/home',
    views: {
      'menuContent@app': {
        templateUrl: 'client/templates/home/home.html',
        controller: 'HomeCtrl as vm',
      }
    }
  })

  .state('app.instructors', {
    url: '/home/:categoryId',
    views: {
      'menuContent@app': {
        templateUrl: 'client/templates/instructor_index/instructors.html',
        controller: 'InstructCtrl as vm'
      }
    }
  })

  .state('app.mysubscriptions', {
    url: '/my-subscriptions',
    views: {
      'menuContent@app': {
        templateUrl: 'client/templates/my_subscriptions/my_subscriptions.html',
        controller: 'MySubCtrl as vm'
      }
    }
  })

  .state('app.profile', {
    cache: false,
    url: '/home/instructors/:instructorId',
    views: {
      'menuContent@app': {
        templateUrl: 'client/templates/profile_page/profile_page.html',
        controller: 'ProfileCtrl as vm'
      }
    }
  })

  .state('app.chat', {
    cache: false,
    url: '/home/instructors/profile/chat',
    views: {
      'menuContent@app': {
        templateUrl: 'client/templates/chat/chat.html',
        controller: 'ChatCtrl as vm'
      }
    }
  })

  .state('app.session', {
    cache: false,
    url: '/home/instructors/profile/:sessionId',
    views: {
      'menuContent@app': {
        templateUrl: 'client/templates/session_room/session_room.html',
        controller: 'SessionCtrl as vm'
      }
    }
  })

  .state('app.login', {
    cache: false,
    url: '/login',
    views: {
      'menuContent@app': {
        templateUrl: 'client/templates/users/login.html',
        controller: 'LoginCtrl as vm'
      }
    }
  })

  .state('app.register', {
    cache: false,
    url: '/register',
    views: {
      'menuContent@app': {
        templateUrl: 'client/templates/users/register.html',
        controller: 'SignUpCtrl as vm'
      }
    }
  })

  $urlRouterProvider.otherwise('/app/home');
};


//function loadspinner($rootScope, $ionicLoading) {
//    $rootScope.$on('loadspinner', function() {
//        $ionicLoading.show({
//            template: '<ion-spinner class="spinner-light" icon="spiral"></ion-spinner>',
//            noBackdrop: true
//        })
//    });
//    $rootScope.$on('$viewContentLoading', function(event){
//        $rootScope.$broadcast('loadspinner');
//    });
