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

const emailVerificationInput = document.querySelector('.VerificationCode');
const emailLabel = document.querySelector('#email_label');

if(emailVerificationInput) {
    const emailInput = emailVerificationInput.parentElement.querySelector('#email')
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
            emailLabel.style.display = 'none';
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

const btnSendVerCode = document.querySelector('.sendCode');
const emailItemLevel = document.querySelector('.TextBox.email .error.itemLevel');

if(btnSendVerCode) {
    btnSendVerCode.addEventListener('click', () => {
        if(emailItemLevel.classList.contains('show')) {
            emailItemLevel.parentElement.querySelector('input').classList.add('invalid')
        } else {
            emailItemLevel.parentElement.querySelector('input').classList.remove('invalid')
        }
    })
}

const btnVerify = document.querySelector('.verifyCode');
const verificationCodeItemLevel = document.querySelector('.TextBox.VerificationCode .error.itemLevel');

if(btnVerify) {
    btnVerify.addEventListener('click', () => {
        if(verificationCodeItemLevel.classList.contains('show') || emailVerificationSSPRControl.style.display === "inline") {
            verificationCodeItemLevel.parentElement.querySelector('input').classList.add('invalid')
        } else {
            verificationCodeItemLevel.parentElement.querySelector('input').classList.remove('invalid')
        }
    })
}

const emailVerificationSSPRControl= document.querySelector('#emailVerificationSSPRControl_error_message');
const verificationCodeInput =  document.querySelector('#verificationCode');


if(emailVerificationSSPRControl) {
    new MutationObserver(() => {
        if(emailVerificationSSPRControl.style.display === "inline") {
            verificationCodeInput.classList.add("invalid")
        } else {
            verificationCodeInput.classList.remove("invalid")
        }
    }).observe(emailFailRetry, {attributes : true});
}
