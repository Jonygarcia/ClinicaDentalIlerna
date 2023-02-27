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
    $(this).removeClass("text-primary-emphasis").addClass("text-dark-emphasis");
});

// Form validation
let namePattern = "^[a-zA-Z]{4,30}$";
let emailPattern = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$";

function checkInput(idInput, pattern) {
    if ($(idInput).val().match(pattern)) {
        $(idInput + "Check").attr("hidden", "true");
        return true;
    } else {
        $(idInput + "Check").removeAttr("hidden");
        return false;
    }
}

function checkTextarea(idText) {
    let value = $(idText).val();
    if (value.length >= 10) {
        $(idText + "Check").attr("hidden", "true");
        return true;
    } else {
        $(idText + "Check").removeAttr("hidden");
        return false;
    }
}

function enableSubmit() {
    $("#contactFormSubmit").removeAttr("disabled");
}

function disableSubmit() {
    $("#contactFormSubmit").attr("disabled", "disabled");
}

function checkForm(idForm) {
    $(idForm + " *").change(function () {
        if (
            checkInput("#name", namePattern) &&
            checkInput("#email", emailPattern) &&
            checkInput("#reason", namePattern) &&
            checkTextarea("#message")
        ) {
            enableSubmit();
        } else {
            disableSubmit();
        }
    });
}

jQuery(function () {
    checkForm("#contactForm");
});
