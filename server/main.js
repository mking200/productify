import { Meteor } from 'meteor/meteor';

if ( Categories.find().count() === 0 ) {

  let categories = [
    {
      name: 'SPED Therapists',
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
      
  }
}
