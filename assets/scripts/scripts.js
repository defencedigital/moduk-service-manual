// Utility function
function Util () {};


// Class manipulation functions
Util.hasClass = function(el, className) {
	return el.classList.contains(className);
};


Util.addClass = function(el, className) {
	var classList = className.split(' ');
 	el.classList.add(classList[0]);
 	if (classList.length > 1) Util.addClass(el, classList.slice(1).join(' '));
};


Util.removeClass = function(el, className) {
	var classList = className.split(' ');
	el.classList.remove(classList[0]);	
	if (classList.length > 1) Util.removeClass(el, classList.slice(1).join(' '));
};


Util.toggleClass = function(el, className, bool) {
	if(bool) Util.addClass(el, className);
	else Util.removeClass(el, className);
};


Util.setAttributes = function(el, attrs) {
  for(var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
};
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


    var firstElement = document.getElementById('what-were-you-looking-for');


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
      
      event.preventDefault();

      Util.addClass(form, 'js:is-hidden'); // Hide the feedback form
      Util.removeClass(prompt, 'js:is-hidden'); // Show the feedback prompt
      Util.removeClass(questions, 'js:is-hidden'); // Show the question

    });


    // Detect form submit
    form.addEventListener('submit', function (event) {
      
      event.preventDefault();

      Util.addClass(form, 'js:is-hidden'); // Hide the feedback form
      Util.removeClass(prompt, 'js:is-hidden'); // Show the feedback prompt
      Util.addClass(questions, 'js:is-hidden'); // Hide the question
      Util.removeClass(success, 'js:is-hidden'); // Show the success

    });


  };

}());
