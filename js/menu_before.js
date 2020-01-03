// 코드가 다 로드된 뒤 실행(마지막에)
// window.onload = function() {
  // 메뉴가 열렸는지 여부 변수 선언
  var menuOpen = false;
  // 초록바를 위한 메뉴 위치 변수 선언
  var menu1X;
  var menu2X;
  var menu3X;
  var menu4X;
  var menu5X;
  var menu6X;
  var menu7X;
  var menu8X;
  // 메뉴들의 마진 변수 선언
  var menuMargin;

  //-------------------------------------------------------------------------------------------

  // 초록바의 위치를 위한 함수 선언
  function menubarSetting() {
    // 모든 메뉴들 검정색으로 초기화
    $("#gnb li a").css("color", "#000");

    // 브라우저 사이즈별로 변수 재 할당 start--------------------------------------
    if (window.innerWidth < 768) {
      // 데스크탑 768 보다 작을때
      $("#gnbMenu2 a").css("color", "#009070");
      $("#greenBar").css("width", $("#gnbMenu2").width());
      $("#greenBar").css("left", $("#gnbMenu2").position().left);
      $("#greenBar").css("top", 62);
      // $("html, body").scrollTop($("#section2").offset().top);
      // $("html").animate({ scrollTop: $("#section2").offset().top }, "slow");
      menuMargin = 16;
      menu2X = $("#gnbMenu2").position().left;
      menu3X = $("#gnbMenu3").position().left + menuMargin;
      menu4X = $("#gnbMenu4").position().left + menuMargin;
      menu6X = $("#gnbMenu6").position().left + menuMargin;
      menu7X = $("#gnbMenu7").position().left + menuMargin;
    } else if (window.innerWidth < 880) {
      // 데스크탑 880 보다 작을때
      $("#gnbMenu4 a").css("color", "#009070");
      $("#greenBar").css("width", $("#gnbMenu4").width());
      $("#greenBar").css("left", $("#gnbMenu4").position().left)
      $("#greenBar").css("top", 43);
      // $("html").animate({ scrollTop: $("#section4").offset().top }, "slow");
      menuMargin = 16;
      menu4X = $("#gnbMenu4").position().left;
      menu5X = $("#gnbMenu5").position().left + menuMargin;
      menu6X = $("#gnbMenu6").position().left + menuMargin;
      menu7X = $("#gnbMenu7").position().left + menuMargin;
    } else if (window.innerWidth < 1000) {
      // 데스크탑 1000 보다 작을때
      $("#gnbMenu2 a").css("color", "#009070");
      $("#greenBar").css("width", $("#gnbMenu2").width());
      $("#greenBar").css("left", $("#gnbMenu2").position().left)
      $("#greenBar").css("top", 43);
      // $("html").animate({ scrollTop: $("#section2").offset().top }, "slow");
      menuMargin = 16;
      menu2X = $("#gnbMenu2").position().left;
      menu3X = $("#gnbMenu3").position().left + menuMargin;
      menu4X = $("#gnbMenu4").position().left + menuMargin;
      menu5X = $("#gnbMenu5").position().left + menuMargin;
      menu6X = $("#gnbMenu6").position().left + menuMargin;
      menu7X = $("#gnbMenu7").position().left + menuMargin;
    } else {
      // 데스크탑 1000 이상
      $("#gnbMenu1 a").css("color", "#009070");
      $("#greenBar").css("width", $("#gnbMenu1").width());
      $("#greenBar").css("left", $("#gnbMenu1").position().left)
      $("#greenBar").css("top", 43);
      // $("html").animate({ scrollTop: $("#section1").offset().top }, "slow");
      menuMargin = 30;
      menu1X = $("#gnbMenu1").position().left;
      menu2X = $("#gnbMenu2").position().left + menuMargin;
      menu3X = $("#gnbMenu3").position().left + menuMargin;
      menu4X = $("#gnbMenu4").position().left + menuMargin;
      menu5X = $("#gnbMenu5").position().left + menuMargin;
      menu6X = $("#gnbMenu6").position().left + menuMargin;
      menu7X = $("#gnbMenu7").position().left + menuMargin;
      menu8X = $("#gnbMenu8").position().left + menuMargin;
    }
    // 브라우저 사이즈별로 변수 재 할당 end--------------------------------------
  }
  // 초록바를 위한 함수 호출
  menubarSetting();

  // trigger를 클릭할때
  document.getElementById("trigger").onclick = function() {
    if (menuOpen == false) {
      menuOpen = true;
      console.log("클릭 열기");
      document.getElementById("mobile_gnb").style.display = "block";
      document.getElementById("m_gnb_close").style.display = "block";
      // console.log(document.getElementsByClassName("trigger_span"));
      // console.log(document.getElementsByClassName("trigger_span")[0]);
      // console.log(document.getElementsByClassName("trigger_span")[1]);
      // console.log(document.getElementsByClassName("trigger_span")[2]);
      // document.getElementsByClassName("trigger_span")[0].style.backgroundColor = "red";
      document.getElementsByClassName("trigger_span")[0].style.transform =
        "translateY(15px) rotate(45deg)";
      document.getElementsByClassName("trigger_span")[1].style.opacity = "0";
      document.getElementsByClassName("trigger_span")[2].style.transform =
        "translateY(-15px) rotate(-45deg)";
    } else {
      console.log("클릭 닫기");
      menuOpen = false;
      document.getElementById("mobile_gnb").style.display = "none";
      document.getElementById("m_gnb_close").style.display = "none";
      document.getElementsByClassName("trigger_span")[0].style.transform =
        "translateY(0px) rotate(0deg)";
      document.getElementsByClassName("trigger_span")[1].style.opacity = "1";
      document.getElementsByClassName("trigger_span")[2].style.transform =
        "translateY(0px) rotate(0deg)";
    }
  };
  //m_gnb_close를 클릭할때(닫기)
  document.getElementById("m_gnb_close").onclick = function() {
    menuOpen = false;
    document.getElementById("mobile_gnb").style.display = "none";
    document.getElementById("m_gnb_close").style.display = "none";
    // this.style.display = "none";
    // console.log(this);
    document.getElementsByClassName("trigger_span")[0].style.transform =
      "translateY(0px) rotate(0deg)";
    document.getElementsByClassName("trigger_span")[1].style.opacity = "1";
    document.getElementsByClassName("trigger_span")[2].style.transform =
      "translateY(0px) rotate(0deg)";
  };
  // 윈도우 리사이즈 이벤트
  window.onresize = function() {
    // 초록바 메뉴 위치 셋팅
    menubarSetting();

    // console.log("윈도우너비: " + window.innerWidth);
    if (window.innerWidth > 1000) {
      document.getElementById("mobile_gnb").style.display = "none";
      document.getElementById("m_gnb_close").style.display = "none";
    } else {
      menuOpen = false;
      document.getElementsByClassName("trigger_span")[0].style.transform =
        "translateY(0px) rotate(0deg)";
      document.getElementsByClassName("trigger_span")[1].style.opacity = "1";
      document.getElementsByClassName("trigger_span")[2].style.transform =
        "translateY(0px) rotate(0deg)";
    }
  };
  // 초록색 바 제어
  // console.log(document.getElementById("greenBar").offsetTop);
  // console.log(document.getElementById("greenBar").offsetLeft);
  // console.log("그린바위치 top: " + $("#greenBar").offset().top);
  // console.log("그린바위치 left: " + $("#greenBar").offset().left);
  console.log("그린바위치 top: " + $("#greenBar").position().top);
  console.log("그린바위치 left: " + $("#greenBar").position().left);


  // console.log("#gnbMenu1의 너비: "+ $("#gnbMenu1").width());

  // console.log("#gnbMenu1의 위치: " + $("#gnbMenu1").position().left);
  // console.log("#gnbMenu2의 위치: " + $("#gnbMenu2").position().left);
  // console.log("#gnbMenu3의 위치: " + $("#gnbMenu3").position().left);
  // console.log("#gnbMenu4의 위치: " + $("#gnbMenu4").position().left);

  //메뉴 제어
  // $("#gnb li").on("click", function(){
  //     console.log("click");
  // });
  $("#gnbMenu1").on("click", function() {
    $("#greenBar").css("width", $("#gnbMenu1").width());
    // $("#greenBar").css("left", menu1X);
    $("#greenBar").animate({ left: menu1X });
    $("#gnb li a").css("color", "#000");
    $("#gnbMenu1 a").css("color", "#009070");
    $("html").animate({ scrollTop: $("#section1").offset().top }, "slow");
  });
  $("#gnbMenu2").on("click", function() {
    $("#greenBar").css("width", $("#gnbMenu2").width());
    // $("#greenBar").css("left", menu2X+30);
    $("#greenBar").animate({ left: menu2X });
    $("#gnb li a").css("color", "#000");
    $("#gnbMenu2 a").css("color", "#009070");
    $("html").animate({ scrollTop: $("#section2").offset().top }, "slow");
  });
  $("#gnbMenu3").on("click", function() {
    $("#greenBar").css("width", $("#gnbMenu3").width());
    // $("#greenBar").css("left", menu3X+30);
    $("#greenBar").animate({ left: menu3X });
    $("#gnb li a").css("color", "#000");
    $("#gnbMenu3 a").css("color", "#009070");
    $("html").animate({ scrollTop: $("#section3").offset().top }, "slow");
  });
  $("#gnbMenu4").on("click", function() {
    $("#greenBar").css("width", $("#gnbMenu4").width());
    // $("#greenBar").css("left", menu4X+30);
    $("#greenBar").animate({ left: menu4X });
    $("#gnb li a").css("color", "#000");
    $("#gnbMenu4 a").css("color", "#009070");
    $("html").animate({ scrollTop: $("#section4").offset().top }, "slow");
  });
  $("#gnbMenu5").on("click", function() {
    $("#greenBar").css("width", $("#gnbMenu5").width());
    // $("#greenBar").css("left", menu5X+30);
    $("#greenBar").animate({ left: menu5X });
    $("#gnb li a").css("color", "#000");
    $("#gnbMenu5 a").css("color", "#009070");
    $("html").animate({ scrollTop: $("#section5").offset().top }, "slow");
  });
  $("#gnbMenu6").on("click", function() {
    $("#greenBar").css("width", $("#gnbMenu6").width());
    // $("#greenBar").css("left", menu6X+30);
    $("#greenBar").animate({ left: menu6X });
    $("#gnb li a").css("color", "#000");
    $("#gnbMenu6 a").css("color", "#009070");
    $("html").animate({ scrollTop: $("#section6").offset().top }, "slow");
  });
  $("#gnbMenu7").on("click", function() {
    $("#greenBar").css("width", $("#gnbMenu7").width());
    // $("#greenBar").css("left", menu7X+30);
    $("#greenBar").animate({ left: menu7X });
    $("#gnb li a").css("color", "#000");
    $("#gnbMenu7 a").css("color", "#009070");
    $("html").animate({ scrollTop: $("#section7").offset().top }, "slow");
  });
  $("#gnbMenu8").on("click", function() {
    $("#greenBar").css("width", $("#gnbMenu8").width());
    // $("#greenBar").css("left", menu8X+30);
    $("#greenBar").animate({ left: menu8X });
    $("#gnb li a").css("color", "#000");
    $("#gnbMenu8 a").css("color", "#009070");
  });

  // 연습
  // $("html").animate({scrollTop: $("#section2").offset().top}, "slow");
  // console.log("section2의 위치: " + $("#section2").offset().top);
// };
