
$(document).ready(function() {


    $(" .col-lg-6.mt-5.mt-lg-0 > p:eq(0)").text("I am 30 years of age");
    $(" .col-lg-6.mt-5.mt-lg-0 > p:eq(1)").text("and i have 3 dogs");
    $(".aboutme").text("Hello! I am Thomas, the code master.");




    $(" .col-lg-6.mt-5.mt-lg-0  :not(.col-lg-6.mt-5.mt-lg-0>h2)").click(function()
        {
        $(this).css ({"background-color" : "PowderBlue","color": "white" })}

    )
    


});

