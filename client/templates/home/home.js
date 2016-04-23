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

    this.helpers({
      categories: () => Categories.find({}),
    });

};
