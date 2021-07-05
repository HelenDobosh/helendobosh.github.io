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

const requiredFieldMissing = document.querySelector('#requiredFieldMissing');
const continueBtn = document.querySelector('#continue');

if(continueBtn) {
    continueBtn.addEventListener('click', () => {
        if(requiredFieldMissing && requiredFieldMissing.style.display === "block") {
            document.querySelectorAll(".itemLevel").forEach(item => {
                if(item.classList.contains('show')) {
                    item.parentElement.classList.add('invalid');
                } else {
                    item.parentElement.classList.remove('invalid');
                }
            })
        }
    });
}

const emailVerificationInput = document.querySelector('#email_ver_input');
const emailLabel = document.querySelector('#email_label');

if(emailVerificationInput) {
    const emailInput = emailVerificationInput.parentElement.parentElement.querySelector('#email')
    const observer = new MutationObserver(() => {
        if(emailVerificationInput.style.display === "inline") {
            emailInput.style.display = 'none';
            emailLabel.style.display = 'none';
        } else {
            emailInput.style.display = 'block';
            emailLabel.style.display = 'block';
        }
    });

    observer.observe(emailVerificationInput, {attributes : true, attributeFilter : ['style']});
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

const emailVarBtn = document.querySelector('#email_ver_but_verify');

if(emailVarBtn) {
    emailVarBtn.addEventListener('click', () => {
        if(document.querySelector('#email_fail_retry').style.display === "inline") {
            emailVerificationInput.classList.add("invalid")
        } else {
            emailVerificationInput.classList.remove("invalid")
        }
    })
}
