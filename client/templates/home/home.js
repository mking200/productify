import { _meteorAngular } from 'meteor/angular';
import { Meteor } from 'meteor/meteor';

angular
    .module('productify')
    .controller('HomeCtrl', HomeCtrl);

function HomeCtrl (
                    $scope,
                    $reactive,
                    $state
                  ) {
    $reactive(this).attach($scope);
    var self = this;

    $scope.categories = [
      {
        "id":0,
        "title":'Therapist',
        "image": 'http://img08.deviantart.net/25d2/i/2009/300/7/e/naruto_sage_mode_2_by_kraytos.jpg'
      },
      {
        "id":1,
        "title":'Tutor',
        "image": 'http://img08.deviantart.net/25d2/i/2009/300/7/e/naruto_sage_mode_2_by_kraytos.jpg'
      },
      {
        "id":2,
        "title":'Yoga',
        "image": 'http://img08.deviantart.net/25d2/i/2009/300/7/e/naruto_sage_mode_2_by_kraytos.jpg'
      },
      {
        "id":3,
        "title":'Trainer',
        "image": 'http://img08.deviantart.net/25d2/i/2009/300/7/e/naruto_sage_mode_2_by_kraytos.jpg'
      }
    ];

  };
    this.helpers({
      categories: () => Categories.find({}),
    });

};
