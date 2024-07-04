 $('#home-page,#store').hide()

 $(".nav-link").on("click", function () {
    $("#home-page,#store,#mac-section").hide();
    $($(this).attr("href")).show();
  });


  // --------------------- M A C - S E C T I O N -------------------------

  // -------------- P R O D U C T ----------------
 $('#desktop-sec,#display-sec').hide()

 $(".product-button").on("click", function () {
    $("#laptops-sec,#desktop-sec,#display-sec").hide();
    $($(this).attr("href")).show();
  });
  