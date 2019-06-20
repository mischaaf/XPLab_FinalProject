// instantiate intro view to welcome participants and give an introduction to the experiment
const intro = babeViews.view_generator('intro', {
    trials: 1,
    name: 'intro',
    text:   `Hello dear participant!
            <br />
            <br />
            We welcome you to our experiment.
            <br />
            <br />
            Our experiment is divided into two blocks in which you will see different paintings.
            In the first block, you are asked to rate how much you like the painting you see.
            In the second block, you are asked to rate how well you are able to detect objects in the painting.
            <br />
            <br />
            If you're ready, let's go and push the button below!`,
   buttonText: 'Begin the experiment'
});

// present instructions to explain the given task for the first block
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

// present instructions to explain the given task for the second block
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

// initialise default post test questionnaire to gain additional information
const post_test = babeViews.view_generator('post_test',{
    trials: 1,
    name: 'post_test',
    title: 'Additional information',
    text: 'Please answer the following questions to help us analyse our results.'
});

// present thanks views and submit results
const thanks = babeViews.view_generator('thanks',{
    trials: 1,
    name: 'thanks',
    title: 'Thank you for taking part in our experiment!',
    prolificConfirmText: 'Press the button'
});

// present desktop distance view to ensure that participants adhere to the mandatory distance of 55cm
const desktop_distance = babeViews.view_generator('forced_choice',{
    trials: 1,
    name: 'desktop_distance',
    trial_type: 'desktop_distance',
    data: desktop_distance_trial.desktop_distance,
});

// initialse question whether participants are experts in cubism
const expert = babeViews.view_generator('rating_scale',{
    trials: 1,
    name: 'expert',
    trial_type: 'expert',
    data: rating_scale_question.rating_scale,
});

// initialise first trial block
const rating_scale_like = babeViews.view_generator('rating_scale',{
    trials: trial_info.rating_scale_like.length,
    name: 'rating_scale_like',
    trial_type: 'rating_scale_like',
    data: trial_info.rating_scale_like,
});

// initialise second trial block
const rating_scale_object = babeViews.view_generator('rating_scale',{
    // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
      trials: trial_info.rating_scale_object.length,
    // name and trial_type should be identical to the variable name
      name: 'rating_scale_object',
      trial_type: 'rating_scale_object',
      data: trial_info.rating_scale_object,
});

// present instruction view for the eyesight tests
const instructions_vision = babeViews.view_generator('instructions',{
    trials: 1,
    name: 'instructions_vision',
    title: 'You have almost finished',
    text:  `Before the end, we would like to shortly assess your vision and colour vision.
            <br />
            <br />
            If you are wearing glasses or contact lenses at the moment, this is fine. Please keep them on.`,
    buttonText: 'Check my vision'
});

// initiate Ishihara colour vision test
const ishihara = babeViews.view_generator('textbox_input', {
    trials: 1,
    name: 'ishihara',
    trial_type: 'ishihara',
    data: ishihara_trial.ishihara_test,
});

// initiate Snellen eyesight test
const vision_test = babeViews.view_generator('textbox_input', {
  trials: 1,
  name: 'vision_test',
  trial_type: 'vision_test',
  data: vision_test_trial.vision_test,
});
