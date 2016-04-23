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
      client: () => Clients.findOne({ meteorId: Meteor.userId() })
    });


    this.zubscribe = function(){

      console.log(self.instructor);
      console.log(self.client);

      var sessionRm = {
        instructorId: self.instructor._id,
        clientId: self.client._id,
        paid: true
      }

      console.log(sessionRm);

      sessionRms.insert(sessionRm, function(err, id) {
        if (!err) {
          $state.go('app.session', { sessionId: id });
        }
      })


    };


};
