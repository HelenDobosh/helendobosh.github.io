const inputs = document.querySelectorAll('input');

inputs.forEach(input => input.addEventListener('input', updateValue))

function updateValue(event) {
    const parent = event.target.parentElement;
    parent.classList.add('filled');
    if(event.target.value === '') {
        parent.classList.remove('filled');
    }
}

const emailVerification = document.querySelector('#email_ver_input');
const emailInput = emailVerification.parentElement.querySelector('#email')
console.log(emailVerification.style.display, 1)
if(emailVerification.style.display === "inline") {
    emailInput.style.display = 'none';
    console.log(emailVerification.style.display)
} else {
    emailInput.style.display = 'block';
}
