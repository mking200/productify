import { _meteorAngular } from 'meteor/angular';
import { Meteor } from 'meteor/meteor';

angular
    .module('productify')
    .controller('MySubCtrl', MySubCtrl);

function MySubCtrl (
                    $scope,
                    $reactive,
                    $state
                  ) {
    $reactive(this).attach($scope);
    var self = this;
    self.myInstructors = [];

    this.autorun( () => {
      if (self.getCollectionReactively('mySessions') ) {
        for (let i = 0; i < self.mySessions.length; i++) {
          self.myInstructors.push(self.mySessions[i]._id)
        }
      }
    });

    this.helpers({
      mySessions: () => SessionRms.find({clientId: Meteor.userId()}),
      instructors: () => Instructors.find({ _id: { $in: self.getReactively('myInstructors') } })
    });

};
