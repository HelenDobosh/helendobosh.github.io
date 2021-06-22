const inputs = document.querySelectorAll('input');

inputs.forEach(input => input.addEventListener('input', updateValue))

function updateValue(event) {
    const parent = event.target.parentElement;
    parent.classList.add('filled');
    if(event.target.value === '') {
        parent.classList.remove('filled');
    }
}