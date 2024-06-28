 $('#store').hide()

 $(".nav-link").on("click", function () {
    $("#home-page,#store").hide();
    $($(this).attr("href")).show();
  });
  