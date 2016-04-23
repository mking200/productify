import { Meteor } from 'meteor/meteor';

if ( Categories.find().count() === 0 ) {

  let categories = [
    {
      name: 'Behavioral Therapists',
      image: 'images/sped_therapist.jpeg'
    },
    {
      name: 'Gym Instructors',
      image: 'images/gym.jpeg'
    },
    {
      name: 'Music Tutors',
      image: 'images/music.jpeg'
    },
    {
      name: 'Nutritionists',
      image: 'images/nutritionist.jpg'
    },
    {
      name: 'Physical Therapists',
      image: 'images/pt.jpeg'
    },
    {
      name: 'Academic Tutor',
      image: 'images/tutor.jpg'
    },
    {
      name: 'Yoga Instructor',
      image: 'images/yoga.jpg'
    }
  ]
  categories.forEach(function(category) {
    Categories.insert(category);
  })

  if( Categories.find().count() > 0 ) {
    Categories.find().forEach(function(category){
      if ( category.name === 'Behavioral Therapists') {
        var instructors = [
          {
            categoryId: category._id,
            profileImg: 'images/profile.jpg',
            name: 'Marietta Roces',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            rating: '4',
            skills: ['Applied Behavior Analysis']
          },
          {
            categoryId: category._id,
            profileImg: 'images/profile.jpg',
            name: 'Toni Recto',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            rating: '5',
            skills: ['Applied Behavior Analysis', 'Cognitive Behaviour Therapy']
          },
          {
            categoryId: category._id,
            profileImg: 'images/profile.jpg',
            name: 'Ester Orante',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            rating: '4',
            skills: ['Cognitive Behaviour Therapy','Social Learning Theory']
          },
          {
            categoryId: category._id,
            profileImg: 'images/profile.jpg',
            name: 'Earlina Custodio',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            rating: '4',
            skills: ['Applied Behavior Analysis', 'Cognitive Behaviour Therapy']
          },
          {
            categoryId: category._id,
            profileImg: 'images/profile.jpg',
            name: 'Hugh Torres',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            rating: '5',
            skills: ['Social Learning Theory']
          },
          {
            categoryId: category._id,
            profileImg: 'images/profile.jpg',
            name: 'Brenda Europa',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            rating: '4',
            skills: ['Applied Behavior Analysis', 'Social Learning Theory']
          }
        ];
        instructors.forEach(function(instructor) {
          Instructors.insert(instructor);
        })
      }
      else if ( category.name === 'Yoga Instructor') {
        var instructors = [
          {
            categoryId: category._id,
            profileImg: 'images/profile.jpg',
            name: 'Bernard Jardenil',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            rating: '5',
            skills: ['Yin']
          },
          {
            categoryId: category._id,
            profileImg: 'images/profile.jpg',
            name: 'Madalena Cantillo',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            rating: '4',
            skills: ['Hot']
          },
          {
            categoryId: category._id,
            profileImg: 'images/profile.jpg',
            name: 'Barbara Jardenil',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            rating: '4',
            skills: ['Flow']
          },
          {
            categoryId: category._id,
            profileImg: 'images/profile.jpg',
            name: 'Rosario Dulce',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            rating: '5',
            skills: ['Vinyasa']
          },
          {
            categoryId: category._id,
            profileImg: 'images/profile.jpg',
            name: 'Declan Parker',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            rating: '4',
            skills: ['Flow']
          }
        ];
        instructors.forEach(function(instructor) {
          Instructors.insert(instructor);
        })
      }
      else {
        for (i = 0; i < 8; i++) {
          var instructor = {
            categoryId: category._id,
            profileImg: 'images/profile.jpg',
            name: 'Instructor ' + i,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            rating: '4',
            skills: ['Skill 1', 'Skill 2', 'Skill 3']
          }
          Instructors.insert(instructor);
        }
      }
    })
  }
}
