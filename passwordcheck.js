function onChange() {
    const password = document.querySelector('input[name="pwd"]');
    const confirm = document.querySelector('input[name="confirm"]');

    if (confirm.value === password.value) {
        confirm.setCustomValidity('');
    } else {
        confirm.setCustomValidity('Passwords do not match');
    }
}

