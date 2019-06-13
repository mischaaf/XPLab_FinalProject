// Here, you can define all custom functions, you want to use and initialize some variables

/* Variables
*
*
*/
const coin = _.sample(["head", "tail"]); // You can flip a coin for your experiment here
// Declare your variables here



/* Helper functions
*
*
*/

/* For generating random participant IDs */
    // https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
// dec2hex :: Integer -> String
const dec2hex = function(dec) {
    return ("0" + dec.toString(16)).substr(-2);
};
// generateId :: Integer -> String
const generateID = function(len) {
    let arr = new Uint8Array((len || 40) /2);
    window.crypto.getRandomValues(arr);
    return Array.from(arr, this.dec2hex).join("");
};

var images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

var array_like = _.shuffle(images);

var array_object = _.shuffle(images);

trials_like = [];

for(i=0; i<30; i++) {
  trials_like.push({
    picture: "images/" + String(array_like[i]) + ".jpg",
    question: "  <br /> <br />   <br /> <br /> How much do you like the painting?",
    optionLeft: 'Not at all',
    optionRight: 'Very much',
    picture_nr: array_like[i]
  }
)};

trials_objects = [];

for(i=0; i<30; i++) {
  trials_objects.push({
    picture: "images/" + String(array_object[i]) + ".jpg",
    question: "<br /> <br />   <br /> <br /> How well can you detect objects in the painting?",
    optionLeft: 'Very hard',
    optionRight: 'Very easy',
    picture_nr: array_object[i]
});
}

// Hooks
const check_response = function(data, next) {
    data.response_checked = false;
    $("body").on("keydown", function(e) {
        if (data.response_checked == false) {
            const keyPressed = String.fromCharCode(
                e.which
            ).toLowerCase();
            if (keyPressed == data.key1 || keyPressed == data.key2) {
                if (data[keyPressed] === data.correct) {
                    alert('Your answer is correct! Yey!');
                } else {
                    alert('Sorry, this answer is incorrect :( The correct answer was ' + data.correct);
                }
                data.response_checked = true;
                next();
            }
        }})
}

//Error feedback if participants exceeds the time for responding
const time_limit = function(data, next) {
    if (typeof window.timeout === 'undefined'){
        window.timeout = [];
    }
    // Add timeouts to the timeoutarray
    // Reminds the participant to respond after 5 seconds
    window.timeout.push(setTimeout(function(){
          $('#reminder').text('Please answer more quickly!');
    }, 5000));
    next();
}
