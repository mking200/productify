import { _meteorAngular } from 'meteor/angular';
import { Meteor } from 'meteor/meteor';

angular
    .module('productify')
    .controller('SignUpCtrl', SignUpCtrl);

function SignUpCtrl (
                    $scope,
                    $reactive,
                    $state
                  ) {
    $reactive(this).attach($scope);
    var self = this;
    AccountsTemplates.setState("signUp");

    this.autorun( () => {
      if( Meteor.loggingIn() === true ) {
        Meteor.call('addUser', function(err){
          if (!err) {
            $state.go('app.home');
          } else {
            console.log("There was an error.")
          }
        });
      }
    });
};
