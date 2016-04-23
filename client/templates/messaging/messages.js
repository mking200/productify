import { _meteorAngular } from 'meteor/angular';
import { Meteor } from 'meteor/meteor';

angular
    .module('productify')
    .controller('MessageCtrl', MessageCtrl);

function MessageCtrl (
                    $scope,
                    $reactive,
                    $state,
                    $ionicHistory,
                    $ionicViewSwitcher,
                    $ionicScrollDelegate,
                    $stateParams
                  ) {
    $reactive(this).attach($scope);
    var self = this;

    this.helpers({
      myId: () => Meteor.userId(),
      client: () => Clients.findOne({ meteorId: Meteor.userId() }),
      instructor: () => Instructors.findOne({ _id: $stateParams.instructorId }),
      messages: () => Messages.find({
        $or: [{
          for: self.instructor._id,
          by: self.client._id
        },{
          for: self.client._id,
          by: self.instructor._id
        }]
      })
    });

    this.sendMessage = function() {
      let newMessage = {
        text: self.msg,
        for: self.instructor._id,
        by: self.client._id,
        sent: new Date()
      }
      Messages.insert(newMessage);
      self.msg ='';
    }

    this.showMsg = function(isLast) {
      if ( isLast === true ){
        $ionicScrollDelegate.scrollBottom();
      } else {
        return;
      }
    }

};
