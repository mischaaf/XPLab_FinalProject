// generate random participant IDs
const dec2hex = function(dec) {
    return ("0" + dec.toString(16)).substr(-2);
};

// generate participant ID and typecast it into a String
const generateID = function(len) {
    let arr = new Uint8Array((len || 40) /2);
    window.crypto.getRandomValues(arr);
    return Array.from(arr, this.dec2hex).join("");
};

// generate array of all stimuli
var images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

/* to be able to present the stimuli in a randomised order as prescribed in the paper,
   we shuffle our stimuli array individually for each trial and simply traverse through the
   shuffled array */

// shuffle stimuli array for first trial, using the default shuffle function
var array_like = _.shuffle(images);

// shuffle stimuli array for second trial, using the default shuffle function
var array_object = _.shuffle(images);

// initialise empty array for first trial
trials_like = [];

/* for loop for first trial:
   traverses through all randomised stimuli images and presents the participant with
   a rating scale for each image; pushes participant answers onto the first trial array to save them */
for(i=0; i<30; i++) {
  trials_like.push({
    picture: "images/" + String(array_like[i]) + ".jpg",
    question: "  <br /> <br />   <br /> <br /> How much do you like the painting?",
    optionLeft: 'Not at all',
    optionRight: 'Very much',
    picture_nr: array_like[i]
  }
)};

// initialise empty array for second trial
trials_objects = [];

/* for loop for second trial:
   traverses through all randomised stimuli images and presents the participant with
   a rating scale for each image; pushes participant answers onto the second trial array to save them */
for(i=0; i<30; i++) {
  trials_objects.push({
    picture: "images/" + String(array_object[i]) + ".jpg",
    question: "<br /> <br />   <br /> <br /> How well can you detect objects in the painting?",
    optionLeft: 'Very hard',
    optionRight: 'Very easy',
    picture_nr: array_object[i]
});
}
