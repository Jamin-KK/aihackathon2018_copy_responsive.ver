 
var menuMarginNum1 = 30;
var menuMarginNum2 = 16;
var menuNum = 7;
var greenBarTop1 = "43px";
var greenBarTop2 = "62px";
 var menuMargin;
var firstMenu;
var select;
// --------------------------------------------------------------------
 
function greenBarSetting() {
  
  if (window.innerWidth <= 768) {
    firstMenu = 2; // Schedule
    $("#greenBar").css("top", greenBarTop2);
  } else if (window.innerWidth <= 880) {
    firstMenu = 4; // Mission
    $("#greenBar").css("top", greenBarTop1);
  } else if (window.innerWidth <= 1000) {
    firstMenu = 2; // Schedule
    $("#greenBar").css("top", greenBarTop1);
  } else {
    firstMenu = 1; //Intro
    $("#greenBar").css("top", greenBarTop1);
  }
 
  $("#greenBar").css("width", "0px");
  $("#gnb li a").css("color", "#000000");
   
}
greenBarSetting();
// --------------------------------------------------------------------
// window resize
$(window).resize(function() {
  console.log("resize");
  greenBarSetting();
});
// --------------------------------------------------------------------
// trigger
$("#trigger").click(function() {
  $("#mobile_gnb").css("width", "170px"); // css transition
  $("body").animate({ right: "170px" }, 500);
});
$("#m_gnb_close").click(function() {
  $("#mobile_gnb").css("width", "0px");
  $("body").animate({ right: "0px" });
});
// --------------------------------------------------------------------
// menu 
$("#gnb li").click(function() {
  console.log(this.id);
  select = this.id.slice(7, 8);
  $("#gnb li a").css("color", "#000000");
  $("#gnbMenu" + select + " a").css("color", "#009070");

  if (window.innerWidth <= 768) {
    firstMenu = 2; // Schedule
    menuMargin = menuMarginNum2; // 16
  } else if (window.innerWidth <= 880) {
    firstMenu = 4; // Mission
    menuMargin = menuMarginNum2; // 16
  } else if (window.innerWidth <= 1000) {
    firstMenu = 2; // Schedule
    menuMargin = menuMarginNum2; // 16
  } else {
    firstMenu = 1; //Intro
    menuMargin = menuMarginNum1; //30
  }

  if (select == firstMenu) {
    menuMargin = 0;
  }
  $("html").animate({ scrollTop: $("#section" + select).offset().top }, "slow");
  $("#greenBar").css("width", $("#gnbMenu" + select).width());
  $("#greenBar").animate(
    { left: $("#gnbMenu" + select).position().left + menuMargin },
    400
  );
});
// --------------------------------------------------------------------
