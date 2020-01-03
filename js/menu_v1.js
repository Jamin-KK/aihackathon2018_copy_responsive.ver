// 작업자: 김혜영 2019. 11. 21(lifelovepeople@gmail.com)
// 이 변수만 수정해서 사용 ---------------------------------------------
var menuMargin = 30;
var menuNum = 7;
// --------------------------------------------------------------------


$("#trigger").click(function() {
  $("#mobile_gnb").css("width", "170px"); // css transition
  $("body").animate({ right: "170px" }, 500);
  // $("body").css("right", "170px"); // css transition
  // $("#mobile_gnb").show();
  // $("#mobile_gnb").toggle();
  // $("#m_gnb_close").show();
  // $("#mobile_gnb").animate({width: "170px"});
});
$("#m_gnb_close").click(function() {
  $("#mobile_gnb").css("width", "0px");
  $("body").animate({ right: "0px" });
  // $("#m_gnb_close").hide();
  // $("#mobile_gnb").hide();
});

$("#gnb li").click(function() {
  console.log(this.id);
  var select = this.id.slice(7, 8);
  if (select == 1) {
    menuMargin = 0;
  } else {
    menuMargin = 30;
  }
  $("html").animate({ scrollTop: $("#section" + select).offset().top }, "slow");
  $("#greenBar").css("width", $("#gnbMenu" + select).width());
  $("#greenBar").animate(
    { left: $("#gnbMenu" + select).position().left + menuMargin },
    400
  );
});
/*
for (var i = 1; i <= menuNum; i++) {
  $("#gnbMenu" + i).click(function() {
    // console.log(this.id); // gnbMenu1
    // console.log(this.id.slice(7,8));
    var select = this.id.slice(7,8);
    $("html").animate({ scrollTop: $("#section" + select).offset().top }, "slow");
  });
}
*/

// $("#gnbMenu1").click(function(){
//     $("html").animate({scrollTop: $("#section1").offset().top}, "slow");
// });
