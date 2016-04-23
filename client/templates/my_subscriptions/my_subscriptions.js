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
      if ( self.getCollectionReactively('mySessions') ) {
        let newSubscriptions = [];
        for (let i = 0; i < self.mySessions.length; i++) {
          newSubscriptions.push(self.mySessions[i].instructorId);
        }
        self.myInstructors = newSubscriptions;
      }
    });

    this.helpers({
      client: () => Clients.findOne({ meteorId: Meteor.userId() }),
      mySessions: () => SessionRms.find({ clientId: self.client._id }),
      instructors: () => Instructors.find({ _id: { $in: self.getReactively('myInstructors') } })
    });

    for (let i = 0; i < self.mySessions.length; i++) {
      self.myInstructors.push(self.mySessions[i].instructorId);
    }

    this.toSession = function(id){
      let session = SessionRms.findOne({ instructorId: id, clientId: self.client._id })
      $state.go('app.session', { sessionId: session._id });
    }

};
