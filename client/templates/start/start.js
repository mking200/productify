import { _meteorAngular } from 'meteor/angular';
import { Meteor } from 'meteor/meteor';

angular
    .module('productify')
    .controller('StartCtrl', StartCtrl);

function StartCtrl (
                    $scope,
                    $reactive,
                    $state,
                    $ionicHistory,
                    $ionicViewSwitcher
                  ) {
    $reactive(this).attach($scope);
    var self = this;

};
