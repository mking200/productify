import { Meteor } from 'meteor/meteor';
import { _meteorAngular } from 'meteor/angular';
import ngFileUpload from 'ng-file-upload';
import ngSanitize from 'angular-sanitize';
import angularElastic from 'angular-elastic';

angular
    .module('productify', [
    'ionic',
    'angular-meteor',
    ngFileUpload,
    ngSanitize,
    'angularMoment',
    angularElastic,
  ]);

function onReady() {
  angular.bootstrap(document, ['productify']);
}

if (Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}
