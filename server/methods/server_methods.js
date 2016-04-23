import { Meteor } from 'meteor/meteor';

Meteor.methods({
  'addUser': function() {
    console.log(Meteor.users.findOne({ _id: this.userId }).profile.Name);
    let newClient = {
      meteorId: this.userId,
      name: Meteor.users.findOne({ _id: this.userId }).profile.Name,
      profileImg: 'image/profile.jpg'
    }
    Clients.insert(newClient);
  }
});
