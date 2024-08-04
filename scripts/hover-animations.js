(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const hoverIcons = document.querySelectorAll('.fa-hover')

    // Loop over them and prevent submission
    Array.from(hoverIcons).forEach(icon => {
        icon.addEventListener('mouseover', event => {
            icon.classList.add('fa-bounce')
        },
        )

        icon.addEventListener('mouseout', event => {
            icon.classList.remove('fa-bounce')
        },
        )


    })

})()