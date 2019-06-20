// initialise and configure experiment
$("document").ready(function() {
    window.onkeydown = function(e) {
        if (e.keyCode === 32 && e.target === document.body) {
            e.preventDefault();
        }
    };

    /* call babeInit:
       in debug mode this returns the babe-object, in all other modes it returns null */
    window.babe_monitor = babeInit({
        // declaration of all views we use in the experiment in their correct order
        views_seq: [
            intro,
            desktop_distance,
            instructions_like,
            rating_scale_like,
            instructions_object,
            rating_scale_object,
            instructions_vision,
            vision_test,
            ishihara,
            expert,
            post_test,
            thanks,
        ],

        // specification of all deployment information
        deploy: {
            experimentID: "INSERT_A_NUMBER",
            serverAppURL: "https://babe-demo.herokuapp.com/api/submit_experiment/",
            deployMethod: "debug",
            contact_email: "YOUREMAIL@wherelifeisgreat.you",
            prolificURL: "https://app.prolific.ac/submissions/complete?cc=SAMPLE1234"
        },
        
        // generate progress bar
        progress_bar: {
            in: [
                // specify trials for which progress bar is needed
                rating_scale_object.name,
                rating_scale_like.name
            ],
            style: "separate",
            width: 100
        }
    });
});
