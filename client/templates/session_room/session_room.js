import { _meteorAngular } from 'meteor/angular';
import { Meteor } from 'meteor/meteor';

angular
    .module('productify')
    .controller('SessionCtrl', SessionCtrl);

function SessionCtrl (
                    $scope,
                    $reactive,
                    $state,
                    $stateParams,
                    $ionicPopup
                  ) {
    $reactive(this).attach($scope);
    var self = this;

    this.helpers({
      taskGrp: () => TaskGroups.findOne({ sessionId: $stateParams.sessionId }),
      tasks: () => Tasks.find({ taskgroupId: self.getReactively('taskGrp._id') }),
      session: () => SessionRms.findOne({ _id: $stateParams.sessionId }),
      instructor: () => Instructors.findOne({ _id: self.getReactively('session.instructorId') })
    });

    this.sendUpdate = function(isDone) {
      console.log(isDone);
        if ( isDone === true ) {
          var myPopup = $ionicPopup.show({
            template: '<input type="text" ng-model="vm.myUpdate" autofocus>',
            title: 'Which items are difficult for him?',
            scope: $scope,
            buttons: [{
              text: '<b>None</b>'
            },{
              text: '<b>Update</b>',
              type: 'button-positive',
              onTap: function(e) {
                if (self.myUpdate) {
                  self.myUpdate='';
                }
                else {
                  e.preventDefault();
                }
              }
            }]
          });
        };
      }
};
