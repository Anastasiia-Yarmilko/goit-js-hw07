const value = document.querySelector('#value');
const button = document.querySelectorAll('button');
const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');


let counterValue = 0;
const updatedValue = () => {
    value.textContent = counterValue;
}

decrement.addEventListener('click', () => {
    counterValue -= 1;
    return updatedValue();
});

increment.addEventListener('click', () => {
    counterValue += 1;
    return updatedValue();
});
