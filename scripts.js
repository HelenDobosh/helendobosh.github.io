const inputs = document.querySelectorAll('input');

inputs.forEach(input => input.addEventListener('input', updateFilledStatus))

function updateFilledStatus(event) {
    validateInput(event.target);

    const parent = event.target.parentElement;

    parent.classList.add('filled');
    if(event.target.value === '') {
        parent.classList.remove('filled');
    }
}

function validateInput(input) {
    const observer = new MutationObserver(function() {
        const parent = input.parentElement;
        if(input.classList.contains("invalid")) {
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
    document.querySelector('#email_ver_but_send').addEventListener('click', () => {
        emailLabel.style.display = 'none';
    })

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

const emailInput = document.querySelector('#email');

new MutationObserver(() => {
    if(emailInput.hasAttribute('disabled')) {
        emailLabel.style.display = 'block';
        emailInput.parentElement.classList.add("disabled");
    } else {
        emailInput.parentElement.classList.remove("disabled");
    }
}).observe(emailInput, {attributes : true});
