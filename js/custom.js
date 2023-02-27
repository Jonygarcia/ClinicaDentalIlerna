"use strict";

// Dont show the carousel if load the page from mobile phone
jQuery(function () {
    if ($(window).width() <= 820) {
        $("section#carousel").hide();
    } else {
        $("section#carousel").show();
    }
});

// Hide the carousel when resize the page under 820px
$(window).on("resize", function () {
    if ($(window).width() <= 820) {
        $("section#carousel").hide();
    } else {
        $("section#carousel").show();
    }
});

// Progressive show elements
jQuery(function () {
    $(window).on("scroll", function () {
        $(".hidden-content").each(function (i) {
            let underObject = $(this).offset().top + $(this).outerHeight();
            let underWindow = $(window).scrollTop() + $(window).height();

            if (underWindow > underObject) {
                $(this).animate({ opacity: "1" }, 750);
            }
        });
    });
});

// Mouseover on navbar links
$(".nav-title").mouseover(function () {
    $(this).removeClass("text-dark-emphasis").addClass("text-primary-emphasis");
});

// Mouseleave on navbar links
$(".nav-title").mouseleave(function () {
    $(this)
        .removeClass("text-primary-emphasis")
        .addClass("text-dark-emphasis");
});
