import { _meteorAngular } from 'meteor/angular';
import { Meteor } from 'meteor/meteor';

angular
    .module('productify')
    .controller('ChatListCtrl', ChatListCtrl);

function ChatListCtrl (
                    $scope,
                    $reactive,
                    $state
                  ) {
    $reactive(this).attach($scope);
    var self = this;

    this.helpers({
      clients: () => Clients.find({}),
    });

};
