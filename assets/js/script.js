$(document).ready(function () {
    $(window).scroll(function () { // check if scroll event happened
        //var initiate = document.getElementsByClassName("topImg");
        var iHeight = $(".topBar").height();
        //var imgHeight = height(initiate);
        if ($(document).scrollTop() /* > iHeight */) { // check if user scrolled more than 50 from top of the browser window
            //$(".logobar").css("background-color", "white"); // if yes, then change the color of class "fixed-top"to #ddbbac or maybe (#c48a80) 
            //$(".logobar").css("padding-bottom", "18px");
            $(".logobar").addClass("fixed-top");

        } else {
            //$(".fixed-top").css("background-color", "transparent"); // if not, change it back to transparent
            $(".logobar").removeClass("fixed-top");
        }
    });
})
 