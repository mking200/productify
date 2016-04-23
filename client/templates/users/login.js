import { _meteorAngular } from 'meteor/angular';
import { Meteor } from 'meteor/meteor';

angular
    .module('productify')
    .controller('LoginCtrl', LoginCtrl);

function LoginCtrl (
                    $scope,
                    $reactive,
                    $state
                  ) {
    $reactive(this).attach($scope);
    var self = this;
    AccountsTemplates.setState("signIn");

    this.autorun( () => {
      if( Meteor.userId() ) {
        $state.go('app.home');
      }
    });
};
