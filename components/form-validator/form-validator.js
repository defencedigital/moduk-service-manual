(function () {


  var Form = function (element) {
    this.element = element;
    this.errorSummary = this.element.getElementsByClassName('govuk-error-summary')[0];
    this.formGroup = this.element.getElementsByClassName('govuk-form-group');
    this.formField = this.element.querySelectorAll('.govuk-input, .govuk-textarea, .govuk-radios__input');
    this.requiredFields = this.element.querySelectorAll('[required], [data-validate]');
    this.formError = this.element.getElementsByClassName('govuk-error-message');
    this.initForm(this);
  };


  Form.prototype.initForm = function () {
    this.element.setAttribute('novalidate', true); // Stop HTML5 validation, in favour of our own
    this.validateForm();
  }


  Form.prototype.validateForm = function () {

    var self = this;

    this.element.addEventListener('submit', function (event) {

      event.preventDefault();

      for (var i = 0; i < self.requiredFields.length; i++) {
        var input = self.requiredFields[i];
        self.validateFields(input);
      }

      self.submit();

    });

  };


  Form.prototype.submit = function () {

    var errors = this.element.getElementsByClassName('govuk-input--error');

    // If no errors exist, submit form
    if (errors.length === 0) {

      Util.addClass(this.errorSummary, 'js:is-hidden');

      // If yes or no feedback form
      var form = this.element;

      var prompt = document.getElementsByClassName('js-feedback-prompt')[0];
      var questions = document.getElementsByClassName('js-feedback-question')[0];
      var success = document.getElementsByClassName('js-feedback-success')[0];

      if (form.classList.contains('js-feedback-form')) {

        document.querySelectorAll('.js-feedback-form').forEach(item => {

          Util.addClass(item, 'is-hidden')        // Hide feedback form
          Util.removeClass(prompt, 'is-hidden');  // Show the feedback prompt
          Util.addClass(questions, 'is-hidden');  // Hide the question
          Util.removeClass(success, 'is-hidden'); // Show the success

        });

      }

      // Send form data
      var formData = new FormData(form);
      var submitted = false;

      // Prevent more than one submission
      if (!submitted) {

        submitted = true;

        // Yes or no feedback form
        if (form.id === 'moduk-feedback__yes' || form.id === 'moduk-feedback__no') {

          fetch('/', {
              method: 'POST',
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
              body: new URLSearchParams(formData).toString(),
            })
              .then(() => console.log('Thank you for your feedback'))
              .catch((error) => alert(error));

        // Standard feedback form
        } else {

          form.submit();

        }

      }


    } else {

      Util.removeClass(this.errorSummary, 'is-hidden');
      Util.setAttributes(this.errorSummary, { 'tabindex': '0' });

      this.errorSummary.scrollIntoView({
        behavior: 'smooth'
      }, true);

      Util.moveFocus(this.errorSummary); // Focus

    }

  };


  Form.prototype.validateFields = function (input) {


    // Check for required fields have a value
    if (input.value.trim() === '') {
      this.setStatus(input, 'error');
    } else {
      this.setStatus(input, 'success');
    }


    // Check that radios have a value
    if (input.type === 'radio') {

      var radioGroup = this.element.querySelectorAll('input[name]:checked').length;

      var hasCheckedItem = (!!parseInt(radioGroup) ? true : false)

      if (hasCheckedItem === false) {
        this.setStatus(input, 'error');
      } else {
        this.setStatus(input, 'success');
      }

    }


    // Check for a valid email address, if an email address has a value 
    if (input.type === 'email') {

      var regEx = /\S+@\S+\.\S+/

      if (input.value.trim() !== '' && !regEx.test(input.value)) {
        this.setStatus(input, 'error');
      } else {
        this.setStatus(input, 'success');
      }

    }


  };


  Form.prototype.setStatus = function (input, status) {

    var formGroup = input.closest('.govuk-form-group'); // Parent container
    var errorMessage = formGroup.querySelector('.govuk-error-message'); // Error message
    var summaryError = document.getElementById(input.id + '-summary-error');

    if (status === 'error') {
      Util.addClass(formGroup, 'govuk-form-group--error');
      Util.addClass(input, 'govuk-input--error');
      Util.removeClass(summaryError, 'is-hidden');
      Util.removeClass(errorMessage, 'is-hidden');
    }

    if (status === 'success') {
      Util.removeClass(formGroup, 'govuk-form-group--error');
      Util.removeClass(input, 'govuk-input--error');
      Util.addClass(summaryError, 'is-hidden');
      Util.addClass(errorMessage, 'is-hidden');
    }

  };


  // Initialize the Form objects
  var form = document.getElementsByClassName('js-form');

  if (form.length > 0) {
    for (var i = 0; i < form.length; i++) {
      (function (i) { new Form(form[i]); })(i);
    }
  }


})();
