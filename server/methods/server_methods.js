import { Meteor } from 'meteor/meteor';

Meteor.methods({
  'addUser': function() {
    let newClient = {
      meteorId: this.userId,
      name: Meteor.users.findOne({ _id: this.userId }).profile.Name,
      profileImg: 'image/profile.jpg'
    }
    Clients.insert(newClient);
  },

  'setTasks': function(id) {
    let thisSession = SessionRms.findOne({ _id: id });
    let instructor = Instructors.findOne({ _id: thisSession.instructorId });
    let category = Categories.findOne({ _id: instructor.categoryId });
    let endingDate = addDays(7);
    console.log( endingDate );
    let taskGroup = {
      sessionId: thisSession._id,
      postDate: new Date(),
      published: true
    }
    
    let hasTasks = TaskGroups.find({ sessionId: thisSession._id }).fetch();
    
    if ( hasTasks.length === 0 ) {
      TaskGroups.insert( taskGroup, function(err, id){
        if (!err){
          
          if (category.name === 'Behavioral Therapists') {
            var tasks = [
              {
                taskgroupId: id,
                details: 'Identify numbers in flashcards.',
                notes: '',
                needUpdate: true,
                isDone: false
              },
              {
                taskgroupId: id,
                details: 'Identify vowels in flashcards.',
                notes: '',
                needUpdate: true,
                isDone: false
              },
              {
                taskgroupId: id,
                details: 'Identify primary colors.',
                notes: '',
                needUpdate: true,
                isDone: false
              },
              {
                taskgroupId: id,
                details: 'Identify shapes in drawings.',
                notes: '',
                needUpdate: true,
                isDone: false
              },
              {
                taskgroupId: id,
                details: 'Identify shapes with colors of paper cut-outs.',
                notes: '',
                needUpdate: true,
                isDone: false
              },
              {
                taskgroupId: id,
                details: 'Review his own identity: Name, Gender, Birthday',
                notes: '',
                needUpdate: true,
                isDone: false
              },
              {
                taskgroupId: id,
                details: 'Identify actions in flashcards.',
                notes: '',
                needUpdate: true,
                isDone: false
              },
              {
                taskgroupId: id,
                details: 'Identify consonants in flashcards.',
                notes: '',
                needUpdate: true,
                isDone: false
              },
              {
                taskgroupId: id,
                details: 'Identify secondary colors in flashcards.',
                notes: '',
                needUpdate: true,
                isDone: false
              },
            ]
            tasks.forEach(function(task){
              Tasks.insert(task);
            })
          }
          else if (category.name === 'Yoga Instructor') {
            var tasks = [
              {
                taskgroupId: id,
                details: 'Drink 4 litres of water',
                notes: '',
                needUpdate: true,
                isDone: false
              },
              {
                taskgroupId: id,
                details: 'Take 10 deep breaths.',
                notes: '',
                needUpdate: true,
                isDone: false
              },
              {
                taskgroupId: id,
                details: 'Meditate for 15mins.',
                notes: '',
                needUpdate: true,
                isDone: false
              },
              {
                taskgroupId: id,
                details: "Child's Pose. 2mins",
                notes: '',
                needUpdate: true,
                isDone: false
              },
              {
                taskgroupId: id,
                details: 'Warrior Pose. 5mins',
                notes: '',
                needUpdate: true,
                isDone: false
              },
              {
                taskgroupId: id,
                details: 'Put your hands together and focus',
                notes: '',
                needUpdate: true,
                isDone: false
              }
            ]
            tasks.forEach(function(task){
              Tasks.insert(task);
            })
          }
          else {
            for (i = 0; i < 8; i++) {
              var task = {
                taskgroupId: id,
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                notes: '',
                needUpdate: false,
                isDone: false
              }
              Tasks.insert(task);
            }
          }
        }
      });
    }
  },

  'setMessages': function(client, instructor) {
    let thisMsg = Messages.find({
      $or: [{
        for: instructor,
        by: client
      },{
        for: client,
        by: instructor
      }]
    }).fetch();

    if ( thisMsg === 0) {

      let messages = [
        {
          text:'what is happening',
          for: client,
          sent: new Date(),
          by: instructor,
        },
        {
          text:'please go away and do this again',
          for: instructor,
          sent: new Date(),
          by: client,
        },
        {
          text:'can it be true?',
          for: client,
          sent: new Date(),
          by: instructor,
        },
        {
          text:'i heard you give a great deal on many things',
          for: instructor,
          sent: new Date(),
          by: client,
        },
        {
          text:'i can make you happy',
          for: client,
          sent: new Date(),
          by: instructor,
        },
        {
          text:"let's do business",
          for: instructor,
          sent: new Date(),
          by: client,
        }
      ]
      messages.forEach(function(msg){
        Messages.insert(msg);
      })
    }
  }
});

function addDays(days) {
  var dat = new Date( this.valueOf() );
  dat.setDate( dat.getDate() + days );
  return dat;
}
