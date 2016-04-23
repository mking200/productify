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

    this.contact = function() {
      Meteor.call('setMessages', self.client._id, self.instructor._id, function(err){
        if (!err) {
          $state.go('app.messages', { instructorId: self.instructor._id });
        }
      })
    }

    this.zubscribe = function(){
      var sessionRm = {
        instructorId: self.instructor._id,
        clientId: self.client._id,
        paid: true
      }
      SessionRms.insert(sessionRm, function(err, id) {
        if (!err) {
          Meteor.call('setTasks', id, function(err){
            if(!err) {
              $state.go('app.session', { sessionId: id });
            }
          });
        }
      })
    };


};
