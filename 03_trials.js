
const trial_info = {
    rating_scale_like: trials_like,

    rating_scale_object: trials_objects
  }

const rating_scale_question = {
  rating_scale:
  [{
    question: "The paintings you just saw are artworks by Picasso, Braque and Gris. They are part of the art movement cubism. <br /> <br /> Are you an expert in cubism?",
    optionLeft: 'not at all',
    optionRight: 'absolutely'
  }]
}

 const ishihara_trial = {
   ishihara_test:
     [{
         picture: "images/ishihara.png",
         question: "Which number do you see in the picture?",
         min_chars: 1
     }]
  }

  const vision_test_trial = {
    vision_test:
      [{
          picture: "images/snellen_eye_chart.png",
          question: "Please insert the letters from the last row you can read in the box.",
          min_chars: 1
      }]
   }

   const desktop_distance_trial = {
     desktop_distance:
     [{
       picture: 'images/Hand.png',
       question: 'It is important that you complete the experiment on your computer and not on your smartphone. <br /> <br /> For the experiment you have to be seated with a distance of 55 cm in front of your computer desktop. Because this is approximately one armlength, you can put your hand on the sketch to adjust your seating position. <br /> <br /> Are you ready?',
       option1: 'yes',
       option2: 'no'
     }]
   }
