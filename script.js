
// --------------------- N A V I G A T I O N ------------------------

$("#home-page,#store,#ipad-section,#mac-section,#iphone-section,#watch-section,#airpods-section").hide();

$(".nav-link").on("click", function () {
  $("#home-page,#store,#mac-section,#ipad-section,#iphone-section,#watch-section,#airpods-section,#tv-and-home-section").hide();
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


// ------------------ I P A D - S E C T I O N -------------

$("#ipad-accor-2").hide();

$(".ipad-accor").on("click", function () {
  $("#ipad-accor-1, #ipad-accor-2").hide();
  $($(this).attr("for")).show();
});

// ---------------- I P H O N E - S E C T I O N -------------

$("#iphone-accor-2,#iphone-accor-3").hide();

$(".iphone-accor").on("click", function () {
  $("#iphone-accor-1, #iphone-accor-2, #iphone-accor-3").hide();
  $($(this).attr("for")).show();
});

// ----------------- W A T C H - S E C T I O N -------------

$("#watch-accor-2").hide();

$(".watch-accor").on("click",function () {
  $("#watch-accor-1, #watch-accor-2").hide();
  $($(this).attr("for")).show();
})

// -------------- A I R P O D S - C A R O U S E L ---------------

$('.air-pod-content').hide();
$('.bxs-x-circle').hide();

$('.airpod-button').on('click',function(){
  $($(this).attr("for")).toggle();
})




$(function() {
  $('.selector').animatedHeadline({
      animationType: 'scale'
  });
})