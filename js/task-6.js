const validationInput = document.querySelector('#validation-input');


validationInput.onblur = (event) => {
    if (event.target.value.length !== 6) {
        validationInput.classList.add('invalid');
    }
    else if (event.target.value.length === 6) {
        validationInput.classList.remove('invalid');
        validationInput.classList.add('valid');
    }
}

