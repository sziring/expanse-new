
document.addEventListener('click', function (event) {
    var isClickInside = document.querySelector('.navbar').contains(event.target);

    if (!isClickInside) {
        // Clicked outside the navbar
        var navbarToggler = document.querySelector('.navbar-toggler');
        var navbarCollapse = document.querySelector('.navbar-collapse');

        if (navbarCollapse.classList.contains('show')) {
            navbarToggler.click(); // Simulate a click on the toggler to close the navbar
        }
    }
});
