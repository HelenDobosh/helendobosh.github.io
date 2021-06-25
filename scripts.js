const inputs = document.querySelectorAll('input');

inputs.forEach(input => input.addEventListener('input', updateValue))

function updateValue(event) {
    const parent = event.target.parentElement;
    parent.classList.add('filled');
    if(event.target.value === '') {
        parent.classList.remove('filled');
    }
}


const emailVerificationBtn = document.querySelector("#email_ver_but_verify");
const emailVerificationInput = document.querySelector('#email_ver_input');
const emailInput = emailVerificationInput.parentElement.parentElement.querySelector('#email')
console.log(emailVerificationInput.style.display, 1)
console.log(emailVerificationInput.style.display === "inline")
emailVerificationBtn.addEventListener("click", () => {
    if(emailVerificationInput.style.display === "inline") {
        emailInput.style.display = 'none';
        console.log(emailVerificationInput.style.display)
    } else {
        console.log(emailVerificationInput.style.display)
        emailInput.style.display = 'block';
    }
})
