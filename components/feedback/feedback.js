(function() {


  var Feedback = function(element) {
    this.element       = element;
    this.prompt        = this.element.querySelector('.js-feedback-prompt');
    this.success       = this.element.querySelector('.js-feedback-success');
    this.triggers      = this.element.querySelectorAll('button:not([type=submit])');
    this.form          = this.element.querySelectorAll('.js-feedback-form');

    this.errorSummary  = this.element.querySelectorAll('.js-error-summary');
    this.errorMessage  = this.element.querySelectorAll('.govuk-error-message');
    this.errorGroup    = this.element.querySelectorAll('.govuk-form-group');
    this.errorInput    = this.element.querySelectorAll('.govuk-input, .govuk-textarea');

    this.focusableElements = 'input:not([tabindex="-1"]), textarea:not([tabindex="-1"]), .govuk-error-summary:not([tabindex="-1"]';

    this.initFeedbackEvents();
  };

  
  Feedback.prototype.initFeedbackEvents = function () {

    var self = this;

    for( var i = 0; i < this.triggers.length; i++) {

      this.triggers[i].addEventListener('click', function(event) {
        
        event.preventDefault();

        self.resetFeedback(); // Reset form initially

        var form      = document.getElementById(this.getAttribute('aria-controls'));
        var firstItem = form.querySelectorAll(self.focusableElements)[0];

        if (Util.hasClass(form, 'is-hidden')) {

          Util.removeClass(form, 'is-hidden');
          Util.addClass(self.prompt, 'is-hidden');

          firstItem.focus();

        } else {

          Util.addClass(form, 'is-hidden');
          Util.removeClass(self.prompt, 'is-hidden');

        }

      });

    }


  };


  Feedback.prototype.resetFeedback = function () {

    this.form.forEach((element) => {
      element.reset(); // Reset all forms
    });    

    this.errorSummary.forEach((element) => {
      Util.addClass(element, 'is-hidden');
    });

    this.errorGroup.forEach((element) => {
      Util.removeClass(element, 'govuk-form-group--error');
    });

    this.errorInput.forEach((element) => {
      Util.removeClass(element, 'govuk-input--error');
    });

    this.errorMessage.forEach((element) => {
      Util.addClass(element, 'is-hidden');
    });

  }


  // Initialize the Feedback objects
  var feedback = document.getElementsByClassName('js-feedback');

  if( feedback.length > 0 ) {
    for( var i = 0; i < feedback.length; i++) {
      (function(i){new Feedback(feedback[i]);})(i);
    }
  };


})();
