const inputs = document.querySelectorAll('input');

inputs.forEach(input => input.addEventListener('input', updateValue))

function updateValue(event) {
    const parent = event.target.parentElement;
    parent.classList.add('filled');
    if(event.target.value === '') {
        parent.classList.remove('filled');
    }
}


const emailVerificationInput = document.querySelector('#email_ver_input');
const emailLabel = document.querySelector('#email_label');
const emailVerButtonSend = document.querySelector('#email_ver_but_send');

if(emailVerificationInput) {
    const emailInput = emailVerificationInput.parentElement.parentElement.querySelector('#email')
    const observer = new MutationObserver(function() {
        if(emailVerificationInput.style.display === "inline") {
            emailInput.style.display = 'none';
        } else {
            emailInput.style.display = 'block';
        }
    });

    observer.observe(emailVerificationInput, {attributes : true, attributeFilter : ['style']});
}

emailVerButtonSend.addEventListener('click', () => {
    emailLabel.style.display = 'none';
})

