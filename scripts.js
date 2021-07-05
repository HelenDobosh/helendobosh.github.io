const inputs = document.querySelectorAll('input');

inputs.forEach(input => validateInput(input));

function validateInput(input) {
    input.blur();
    const observer = new MutationObserver(function() {
        const parent = input.parentElement;
        if(input.classList.contains("invalid") || input.classList.contains("highlightError")) {
            parent.classList.add("invalid")
        } else {
            parent.classList.remove("invalid")
        }
    });

    observer.observe(input, {attributes : true, attributeFilter : ['class']});
}


const emailVerificationInput = document.querySelector('#email_ver_input');
const emailLabel = document.querySelector('#email_label');

if(emailVerificationInput) {

    hideEmailLabel('#email_ver_but_send');
    hideEmailLabel('#email_ver_but_resend');

    const emailInput = emailVerificationInput.parentElement.parentElement.querySelector('#email')
    const observer = new MutationObserver(() => {
        if(emailVerificationInput.style.display === "inline") {
            emailInput.style.display = 'none';
        } else {
            emailInput.style.display = 'block';
        }
    });

    observer.observe(emailVerificationInput, {attributes : true, attributeFilter : ['style']});
}

function hideEmailLabel(btnId) {
    document.querySelector(btnId).addEventListener('click', () => {
        emailLabel.style.display = 'none';
    })
}

const emailInput = document.querySelector('#email');

if(emailInput) {
    new MutationObserver(() => {
        if(emailInput.hasAttribute('disabled')) {
            emailLabel.style.display = 'block';
            emailInput.parentElement.classList.add("disabled");
        } else {
            emailInput.parentElement.classList.remove("disabled");
        }
    }).observe(emailInput, {attributes : true});
}

