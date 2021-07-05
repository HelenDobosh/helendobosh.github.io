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

if(requiredFieldMissing) {
    new MutationObserver(() => {
        if(requiredFieldMissing.style.display === "block") {
            document.querySelectorAll(".itemLevel").forEach(item => {
                if(item.classList.contains('show')) {
                    item.parentElement.classList.add('invalid');
                } else {
                    item.parentElement.classList.remove('invalid');
                }
            })
        } else {
            document.querySelectorAll(".itemLevel").forEach(item => {
                item.parentElement.classList.remove('invalid');
            });
        }
    }).observe(requiredFieldMissing, {attributes : true});
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

const emailFailRetry = document.querySelector('#email_fail_retry');

if(emailFailRetry) {
    new MutationObserver(() => {
        if(emailFailRetry.style.display === "inline") {
            emailVerificationInput.parentElement.classList.add("invalid")
        } else {
            emailVerificationInput.parentElement.classList.remove("invalid")
        }
    }).observe(emailFailRetry, {attributes : true});
}
