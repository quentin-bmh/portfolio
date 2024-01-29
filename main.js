document.addEventListener('DOMContentLoaded', function () {
    var scrollbar = document.querySelector('.scrollbar');
    var body = document.body;
    var html = document.documentElement;
    var navbarHeight = document.querySelector('.navbar').offsetHeight;

    window.addEventListener('scroll', function () {
        var scrollTop = window.scrollY;
        var documentHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        var windowHeight = window.innerHeight;

        // Calculate the scroll progress as a percentage
        var scrollProgress = ((scrollTop - navbarHeight) / (documentHeight - windowHeight - navbarHeight)) * 100;

        // Ensure scrollProgress is within the 0 to 100 range
        scrollProgress = Math.max(0, Math.min(scrollProgress, 100));

        // Set the width of the scrollbar based on the scroll progress
        scrollbar.style.width = scrollProgress + '%';
    });
});