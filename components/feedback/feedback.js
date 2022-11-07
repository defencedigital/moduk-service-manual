(function() {
  
  var feedback = document.getElementsByClassName('js-feedback'); 

  if (feedback.length > 0) {

    var yes       = feedback[0].getElementsByClassName('js-feedback-yes')[0],
        no        = feedback[0].getElementsByClassName('js-feedback-no')[0],
        form      = feedback[0].getElementsByClassName('js-feedback-form')[0],
        close     = feedback[0].getElementsByClassName('js-feedback-close')[0],
        prompt    = feedback[0].getElementsByClassName('js-feedback-prompt')[0],
        questions = feedback[0].getElementsByClassName('js-feedback-question')[0],
        success   = feedback[0].getElementsByClassName('js-feedback-success')[0];


    var firstElement = document.getElementById('what-guidance-were-you-looking-for');


    // Detect click on yes trigger
    yes.addEventListener('click', function (event) {
      
      event.preventDefault();

      Util.addClass(questions, 'js:is-hidden'); // Hide the question
      Util.removeClass(success, 'js:is-hidden'); // Show the success

    });


    // Detect click on no trigger
    no.addEventListener('click', function (event) {
      
      event.preventDefault();

      Util.removeClass(form, 'js:is-hidden'); // Show the feedback form
      Util.addClass(prompt, 'js:is-hidden'); // Hide the feedback prompt

      firstElement.focus(); // Focus

    });


    // Detect click on close
    close.addEventListener('click', function (event) {
      
      // Prevent form from submitting to the server
      event.preventDefault();

      Util.addClass(form, 'js:is-hidden'); // Hide the feedback form
      Util.removeClass(prompt, 'js:is-hidden'); // Show the feedback prompt
      Util.removeClass(questions, 'js:is-hidden'); // Show the question

    });


    // Detect form submit
    form.addEventListener('submit', function (event) {

      // Prevent form from submitting to the server
      event.preventDefault();

      var data = new FormData(event.target);

      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      }).then(response => {
        
        if (response.ok) {

          success.innerHTML = 'Thank you for your feedback';

          form.reset();

          // Send form data
          Util.addClass(form, 'js:is-hidden');       // Hide the feedback form
          Util.removeClass(prompt, 'js:is-hidden');  // Show the feedback prompt
          Util.addClass(questions, 'js:is-hidden');  // Hide the question
          Util.removeClass(success, 'js:is-hidden'); // Show the success

        }

      });

    });

  }

}());
