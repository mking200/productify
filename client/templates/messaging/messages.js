import { _meteorAngular } from 'meteor/angular';
import { Meteor } from 'meteor/meteor';

angular
    .module('productify')
    .controller('MessageCtrl', HomeCtrl);

function HomeCtrl (
                    $scope,
                    $reactive,
                    $state,
                    $ionicHistory,
                    $ionicViewSwitcher
                  ) {
    $reactive(this).attach($scope);
    var self = this;

    $scope.messages = [
      {
        "id":0,
        "text":'what is happening',
        'own': true,
      },
      {
        "id":1,
        "text":'please go away and do this again',
        'own': false,
      },
      {
        "id":2,
        "text":'can it be true?',
        'own': true,
      },
      {
        "id":3,
        "text":'i heard you give a great deal on many things',
        'own': false,
      },
      {
        "id":4,
        "text":'i can make you happy',
        'own': true,
      },
      {
        "id":5,
        "text":"let's do business",
        'own': false,
      }
    ];

};
