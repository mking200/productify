import { _meteorAngular } from 'meteor/angular';
import { Meteor } from 'meteor/meteor';

angular
    .module('productify')
    .controller('ProfileCtrl', ProfileCtrl);

function ProfileCtrl (
                    $scope,
                    $reactive,
                    $state,
                    $stateParams
                  ) {
    $reactive(this).attach($scope);
    var self = this;

    this.helpers({
      instructor: () => Instructors.findOne({ _id: $stateParams.instructorId }),

    });
};
