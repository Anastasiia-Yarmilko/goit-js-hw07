const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', (event) => {
    if (event.target.value === '') {
        return nameOutput.textContent = 'незнакомец';
    }
    nameOutput.textContent = event.target.value;
});

