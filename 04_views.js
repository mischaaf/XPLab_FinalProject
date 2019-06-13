// In this file you can instantiate your views
// First instantiate your wrapping views, then you can instantiate your trial views


/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

* More about the properties and functions of the wrapping views - https://github.com/babe-project/babe-project/blob/master/docs/views.md#wrapping-views-properties

*/

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = babeViews.view_generator('intro', {
    trials: 1,
    name: 'intro',
    // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
    text:   `Give Me Gestalt!
            <br />
            <br />
            We welcome you to our experiment.
            <br />
            <br />
            Our experiment is divided into two blocks in which you will see different paintings.
            In the first block, you are asked to rate how much you like the painting you see.
            In the second block, you are asked to rate how well you are able to detect objects in the painting.`,
   buttonText: 'Begin the experiment'
});

// For most tasks, you need instructions views
const instructions_like = babeViews.view_generator('instructions',{
    trials: 1,
    name: 'instructions_like',
    title: 'Instructions for the first block',
    text:  `Please read the instructions before starting the experiment.
            <br />
            <br />
            You will see one painting in each trial.
            You are asked to rate how much you like the painting on a scale from 1 ("not at all") to 7 ("very much").
            Please stay focused during the experiment.`,
    buttonText: 'Start the first block'
});

const instructions_object = babeViews.view_generator('instructions',{
    trials: 1,
    name: 'instructions_object',
    title: 'Instructions for the second block',
    text:  `Please read the instructions before starting the experiment.
            <br />
            <br />
            You will see one painting in each trial.
            You are asked to rate how well you are able to detect objects in the painting from 1 ("very hard") to 7 ("very easy").`,
    buttonText: 'Start the second block'
});

// In the post test questionnaire you can ask your participants addtional questions
const post_test = babeViews.view_generator('post_test',{
    trials: 1,
    name: 'post_test',
    title: 'Additional information',
    text: 'Answering the following questions is optional, but your answers will help us analyze our results.'

    // You can change much of what appears here, e.g., to present it in a different language, as follows:
    //buttonText: 'Weiter',
    //age_question: 'Alter',
    //gender_question: 'Geschlecht',
    //gender_male: 'männlich',
    //gender_female: 'weiblich',
    //gender_other: 'divers'
    // edu_question: 'Höchster Bildungsabschluss',
    // edu_graduated_high_school: 'Abitur',
    // edu_graduated_college: 'Hochschulabschluss',
    // edu_higher_degree: 'Universitärer Abschluss',
    // languages_question: 'Muttersprache',
    // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
    // comments_question: 'Weitere Kommentare'
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = babeViews.view_generator('thanks',{
    trials: 1,
    name: 'thanks',
    title: 'Thank you for taking part in this experiment!',
    prolificConfirmText: 'Press the button'
});

const desktop_distance = babeViews.view_generator('forced_choice',{
    trials: 1,
    name: 'desktop_distance',
    trial_type: 'desktop_distance',
    data: desktop_distance_trial.desktop_distance,
});

const expert = babeViews.view_generator('rating_scale',{
    trials: 1,
    name: 'expert',
    trial_type: 'expert',
    data: rating_scale_question.rating_scale,
});

const ishihara = babeViews.view_generator('textbox_input', {
    trials: 1,
    name: 'ishihara',
    trial_type: 'ishihara',
    data: ishihara_trial.ishihara_test,
});

const vision_test = babeViews.view_generator('textbox_input', {
  trials: 1,
  name: 'vision_test',
  trial_type: 'vision_test',
  data: vision_test_trial.vision_test,
});

const instructions_vision = babeViews.view_generator('instructions',{
    trials: 1,
    name: 'instructions_vision',
    title: 'You have almost finished',
    text:  `Before the end, we would like to shortly assess your vision and color vision.
            <br />
            <br />
            If you are wearing glasses or contact lenses at the moment, this is fine. Please keep them on.`,
    buttonText: 'Check my vision'
});
/** trial (babe's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _babe (e.g. for use with a progress bar)
    - trial_type: string - the name of the trial type as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
        More about trial life cycle - https://github.com/babe-project/babe-project/blob/master/docs/views.md#trial-views-lifecycle

    - hook: object - option to hook and add custom functions to the view
        More about hooks - https://github.com/babe-project/babe-project/blob/master/docs/views.md#trial-views-hooks

* All about the properties of trial - https://github.com/babe-project/babe-project/blob/master/docs/views.md#properties-of-trial
*/


// Here, we initialize a rating scale task view
const rating_scale_like = babeViews.view_generator('rating_scale',{
    // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
    trials: trial_info.rating_scale_like.length,
    // name and trial_type should be identical to the variable name
    name: 'rating_scale_like',
    trial_type: 'rating_scale_like',
    data: trial_info.rating_scale_like,
});

const rating_scale_object = babeViews.view_generator('rating_scale',{
    // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
      trials: trial_info.rating_scale_object.length,
    // name and trial_type should be identical to the variable name
      name: 'rating_scale_object',
      trial_type: 'rating_scale_object',
      data: trial_info.rating_scale_object,
});

// There are many more templates available:
// forcedChoice, sliderRating, dropdownChoice, testboxInput, ratingScale, imageSelection, sentenceChoice, keyPress, selfPacedReading and selfPacedReading_ratingScale

// If the provided templates are not enough, we can just create custom view templates in 02_custom_views_templates.js and use them here
