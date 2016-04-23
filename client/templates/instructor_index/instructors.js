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

    this.helpers({
      instructors: () => Instructors.find({ categoryId: $stateParams.categoryId })
    });

};
