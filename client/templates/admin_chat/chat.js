import { _meteorAngular } from 'meteor/angular';
import { Meteor } from 'meteor/meteor';

angular
    .module('productify')
    .controller('ChatCtrl', ChatCtrl);

function ChatCtrl (
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
    this.message = '';

    this.helpers({
      client: () => Clients.findOne({ _id: $stateParams.clientId }),
      category: () => Categories.findOne({ name: 'Behavioral Therapists'}),
      instructor: () => Instructors.find({ categoryId: self.getReactively('category._id') }),
      messages: () => Messages.find({ for: self.getReactively('client._id') })
    });

    this.sendMessage = function() {
      if(self.message) {
        self.instructor.forEach(function(ins){
          let newMessage = {
            text: self.message,
            for: self.client._id,
            by: ins._id,
            sent: new Date()
          }
          Messages.insert(newMessage);
        })
        self.message ='';
      }
    }

    this.showMsg = function(isLast) {
      if ( isLast === true ){
        $ionicScrollDelegate.scrollBottom();
      } else {
        return;
      }
    }

};
