import { Meteor } from 'meteor/meteor';

if ( Categories.find().count() === 0 ) {

  let categories = [
    {
      name: 'Behavioral Therapists',
      image: 'images/BTherapist.png'
    },
    {
      name: 'Gym Instructors',
      image: 'images/gyminstructor.png'
    },
    {
      name: 'Music Tutors',
      image: 'images/musictutor.png'
    },
    {
      name: 'Nutritionists',
      image: 'images/dietitian.png'
    },
    {
      name: 'Physical Therapists',
      image: 'images/PTherapist.png'
    },
    {
      name: 'Academic Tutor',
      image: 'images/tutor.png'
    },
    {
      name: 'Yoga Instructor',
      image: 'images/yoga.png'
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
            profileImg: 'images/instructors/ashley.png',
            name: 'Marietta Roces',
            description: 'I am a licensed Marriage & Family Therapist in the states of RI and MA, with 8 years of experience focused on assisting clients in realizing their full potential within the scoop of their own personal goals.',
            rating: '4',
            skills: ['Applied Behavior Analysis']
          },
          {
            categoryId: category._id,
            profileImg: 'images/instructors/alec.png',
            name: 'Toni Recto',
            description: 'I am a licensed Marriage and Family Therapist, in California. I have over 14 years experience working with, children,families, and individuals. I also have extensive experience working with children with learning disabilities, ADHD, angry outbursts, trauma, and loss.',
            rating: '5',
            skills: ['Applied Behavior Analysis', 'Cognitive Behaviour Therapy']
          },
          {
            categoryId: category._id,
            profileImg: 'images/instructors/arjay.png',
            name: 'Ester Orante',
            description: 'Whether you are struggling with relationship, family, or individual issues, you deserve help that is professional, intelligent, respectful, and that will make a real difference.',
            rating: '4',
            skills: ['Cognitive Behaviour Therapy','Social Learning Theory']
          },
          {
            categoryId: category._id,
            profileImg: 'images/instructors/cheene.png',
            name: 'Earlina Custodio',
            description: 'I am a professionally trained and licensed counselor and therapist. I graduated with a Doctorate in Professional Counseling and Supervision from University of West Georgia.',
            rating: '4',
            skills: ['Applied Behavior Analysis', 'Cognitive Behaviour Therapy']
          },
          {
            categoryId: category._id,
            profileImg: 'images/instructors/christian.png',
            name: 'Hugh Torres',
            description: 'Hi. My name is Ken Fields. I am a nationally certified, state licensed mental health counselor. I am available online to provide you with quality, professional online counseling. Whatever problems and troubles you are faced with, I can offer you positive, non-judgmental support and effective therapeutic intervention.',
            rating: '5',
            skills: ['Social Learning Theory']
          },
          {
            categoryId: category._id,
            profileImg: 'images/instructors/jin.png',
            name: 'Brenda Europa',
            description: 'I am a licensed clinical social worker with an extensive and diverse experience working with adults, children, couples, and families. I earned my master’s degree from the University of Chicago in Illinois in 1997. I also hold a Bachelor’s degree from Roosevelt University in Illinois with a major in psychology. I enjoy the work I do and have worked in both the public and private sectors in the fields of social services and mental health.',
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
            profileImg: 'images/instructors/darren.png',
            name: 'Bernard Jardenil',
            description: 'Bernard started practicing Iyengar yoga in Sydney, Australia in 1986 and started his teacher training with Peter Scott in Melbourne in 1990. He completed his teacher training at the Maida Vale Iyengar Institute, London in 1994.',
            rating: '5',
            skills: ['Yin']
          },
          {
            categoryId: category._id,
            profileImg: 'images/instructors/phia.png',
            name: 'Madalena Cantillo',
            description: 'Madalena has been practicing Iyengar yoga since 1994 at the Iyengar Institute in Maida Vale. She is a qualified Junior Intermediate Level 2 teacher and continues to study under the guidance of Alaric Newcombe, one of the most senior teachers in this country.',
            rating: '4',
            skills: ['Hot']
          },
          {
            categoryId: category._id,
            profileImg: 'images/instructors/ashley.png',
            name: 'Barbara Jardenil',
            description: 'Barbara started practising yoga in her late thirties, trying several different styles before discovering Vinyasa Flow. She felt a profound connection to the practice which opened her body, heart and mind, and continues to help her overcome the challenges of modern city living.',
            rating: '4',
            skills: ['Flow']
          },
          {
            categoryId: category._id,
            profileImg: 'images/jin.jpg',
            name: 'Rosario Dulce',
            description: "Rosario's yoga practice began in 2003 with Vaccasin, at his yoga centre in Bristol. Rosario initially turned to yoga to help a rotator cuff injury and was greatly inspired by the healing transformation that took place in her body as her yoga practice deepened.",
            rating: '5',
            skills: ['Vinyasa']
          },
          {
            categoryId: category._id,
            profileImg: 'images/instructors/gab.png',
            name: 'Declan Parker',
            description: 'Declan started practicing yoga when looking for something to heal a hip injury and aid the flow of his writing. He started with Ashtanga yoga in the gym. Declan soon became passionate about yoga and its physical and mental benefits and went on to explore and study "Yoga Monks" intensively for one and a half years while also studying the philosophical side of yoga with David Sye. Declan went on to complete his yoga teacher training at Sonic Yoga in New York city in 2010.',
            rating: '4',
            skills: ['Flow']
          }
        ];
        instructors.forEach(function(instructor) {
          Instructors.insert(instructor);
        })
      }
      else {
        for (i = 1; i < 9; i++) {
          var instructor = {
            categoryId: category._id,
            profileImg: 'https://s3-ap-southeast-1.amazonaws.com/dutchbaghk/icon-profile-default-linkedin-image.png',
            name: 'Instructor ' + i,
            description: "This profile hasn't been completed yet. Please contact the instructor for more details",
            rating: '4',
            skills: ['Skill 1', 'Skill 2', 'Skill 3']
          }
          Instructors.insert(instructor);
        }
      }
    })
  }
}
