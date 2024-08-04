// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            } else {
                // Send email via EmailJS (www.emailjs.com/)
                var contactForm = document.getElementById('contact-form');
                event.preventDefault();
                emailjs.sendForm('service_8w81iv5', 'contact_form', contactForm)
                    .then(() => {
                        console.log('SUCCESS!');
                        document.getElementById('contact-submit-success').classList.remove('d-none');
                        contactForm.reset();
                        contactForm.classList.remove('was-validated');
                    }, (error) => {
                        console.log('FAILED...', error);
                        document.getElementById('contact-submit-fail').classList.remove('d-none');
                    });
            }
            form.classList.add('was-validated')
        }, false
        )


    })

})()