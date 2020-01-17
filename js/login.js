$(document).ready(function () {
    $('#open').click(function (e) { 
        e.preventDefault();
        $('#login form').slideToggle(300);
        $(this).toggleClass('close');      
    });
});