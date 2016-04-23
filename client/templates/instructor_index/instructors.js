import { _meteorAngular } from 'meteor/angular';
import { Meteor } from 'meteor/meteor';

angular
    .module('productify')
    .controller('InstructCtrl', InstructCtrl);

function InstructCtrl (
                    $scope,
                    $reactive,
                    $state,
                    $stateParams
                  ) {
    $reactive(this).attach($scope);
    var self = this;
    $scope.test2 = "hello";

    $scope.instructors= [
        {"id": 0,
        "categoryID": "yoga",
        "profileImg": 'http://img08.deviantart.net/25d2/i/2009/300/7/e/naruto_sage_mode_2_by_kraytos.jpg',
        "name": "John",
        "description": "yoga master with training in Indonesia",
        "rating": 4,
        "skills": ["Vinyasa", "Hot Yoga"]},
        {"id": 1,
        "categoryID": "yoga",
        "profileImg": "img",
        "name": "Jenny",
        "description": "yoga master with training in Indonesia",
        "rating": 4,
        "skills": ["Vinyasa", "Hot Yoga"]},
        {"id": 2,
        "categoryID": "yoga",
        "profileImg": "img",
        "name": "Marielle",
        "description": "yoga master with training in Indonesia",
        "rating": 4,
        "skills": ["Vinyasa", "Hot Yoga"]},
        {"id": 3,
        "categoryID": "yoga",
        "profileImg": "img",
        "name": "Candy",
        "description": "yoga master with training in Indonesia",
        "rating": 4,
        "skills": ["Vinyasa", "Hot Yoga"]}
      ]


    this.helpers({
      instructors: () => Instructors.find({ categoryId: $stateParams.categoryId })
    });

};
