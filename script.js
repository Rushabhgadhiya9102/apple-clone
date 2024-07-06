
// --------------------- N A V I G A T I O N ------------------------

$("#home-page,#store,#mac-section").hide();

$(".nav-link").on("click", function () {
  $("#home-page,#store,#mac-section,#ipad-section").hide();
  $($(this).attr("href")).show();
});

// --------------------- M A C - S E C T I O N -------------------------

// -------------- P R O D U C T ----------------
$("#desktop-sec,#display-sec").hide();

$(".product-button").on("click", function () {
  $("#laptops-sec,#desktop-sec,#display-sec").hide();
  $($(this).attr("href")).show();
});

$("#mac-accor-2,#mac-accor-3").hide();

$(".mac-accor").on("click", function () {
  $("#mac-accor-1, #mac-accor-2, #mac-accor-3").hide();
  $($(this).attr("for")).show();
});
