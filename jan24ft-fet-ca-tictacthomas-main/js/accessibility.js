$('input[id=accessToggle]').change(function() {
    if ($(this).is(':checked')) {
        $("p").css("font-size", "120%");
    } else {
        $("p").css("font-size", "100%");
    }
  });


