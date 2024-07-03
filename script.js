 $('#home-page,#store').hide()

 $(".nav-link").on("click", function () {
    $("#home-page,#store,#mac-section").hide();
    $($(this).attr("href")).show();
  });
  