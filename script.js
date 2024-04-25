document.addEventListener('DOMContentLoaded', function () {
    const mailboxIcon = document.getElementById('mailbox-icon');

    mailboxIcon.addEventListener('click', function (event) {
        event.preventDefault();
        const defaultEmail = 'dilujilshadvkd@gmail.com'; // Default email address
        const emailInput = document.getElementById('email').value;
        const mailtoUrl = `mailto:${defaultEmail}?subject=Mailbox&body=Email: ${encodeURIComponent(emailInput)}`;
        window.location.href = mailtoUrl;
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const mailboxIcon = document.getElementById('submit');

    mailboxIcon.addEventListener('click', function (event) {
        event.preventDefault();
        const defaultEmail = 'dilujilshadvkd@gmail.com'; // Default email address
        const emailInput = document.getElementById('email').value;
        const mailtoUrl = `mailto:${defaultEmail}?subject=Mailbox&body=Email: ${encodeURIComponent(emailInput)}`;
        window.location.href = mailtoUrl;
    });
});

document.body.style.zoom = "150%"; // Adjust the percentage as per your requirement
