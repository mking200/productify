import { _meteorAngular } from 'meteor/angular';
import { Meteor } from 'meteor/meteor';

angular
    .module('productify')
    .controller('MenuCtrl', MenuCtrl);

function MenuCtrl (
                    $scope,
                    $reactive,
                    $state
                  ) {
    $reactive(this).attach($scope);
    var self = this;

    this.helpers({
      currentUser: () => Meteor.userId(),
    });

    this.logout = function(){
      Meteor.logout();
    }


};
