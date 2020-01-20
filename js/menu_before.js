 
  var menuOpen = false;
   var menu1X;
  var menu2X;
  var menu3X;
  var menu4X;
  var menu5X;
  var menu6X;
  var menu7X;
  var menu8X;
   var menuMargin;

  //-------------------------------------------------------------------------------------------

   function menubarSetting() {
     $("#gnb li a").css("color", "#000");

     if (window.innerWidth < 768) {
       $("#gnbMenu2 a").css("color", "#009070");
      $("#greenBar").css("width", $("#gnbMenu2").width());
      $("#greenBar").css("left", $("#gnbMenu2").position().left);
      $("#greenBar").css("top", 62);

      menuMargin = 16;
      menu2X = $("#gnbMenu2").position().left;
      menu3X = $("#gnbMenu3").position().left + menuMargin;
      menu4X = $("#gnbMenu4").position().left + menuMargin;
      menu6X = $("#gnbMenu6").position().left + menuMargin;
      menu7X = $("#gnbMenu7").position().left + menuMargin;
    } else if (window.innerWidth < 880) {
      $("#gnbMenu4 a").css("color", "#009070");
      $("#greenBar").css("width", $("#gnbMenu4").width());
      $("#greenBar").css("left", $("#gnbMenu4").position().left)
      $("#greenBar").css("top", 43);
      menuMargin = 16;
      menu4X = $("#gnbMenu4").position().left;
      menu5X = $("#gnbMenu5").position().left + menuMargin;
      menu6X = $("#gnbMenu6").position().left + menuMargin;
      menu7X = $("#gnbMenu7").position().left + menuMargin;
    } else if (window.innerWidth < 1000) {
      // less than 1000  
      $("#gnbMenu2 a").css("color", "#009070");
      $("#greenBar").css("width", $("#gnbMenu2").width());
      $("#greenBar").css("left", $("#gnbMenu2").position().left)
      $("#greenBar").css("top", 43);
      menuMargin = 16;
      menu2X = $("#gnbMenu2").position().left;
      menu3X = $("#gnbMenu3").position().left + menuMargin;
      menu4X = $("#gnbMenu4").position().left + menuMargin;
      menu5X = $("#gnbMenu5").position().left + menuMargin;
      menu6X = $("#gnbMenu6").position().left + menuMargin;
      menu7X = $("#gnbMenu7").position().left + menuMargin;
    } else {
      //more than 1000  
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
    //   end--------------------------------------
  }
  // green bar
  menubarSetting();

  // trigger click
  document.getElementById("trigger").onclick = function() {
    if (menuOpen == false) {
      menuOpen = true;
      console.log("클릭 열기");
      document.getElementById("mobile_gnb").style.display = "block";
      document.getElementById("m_gnb_close").style.display = "block";
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
  //m_gnb_close click
  document.getElementById("m_gnb_close").onclick = function() {
    menuOpen = false;
    document.getElementById("mobile_gnb").style.display = "none";
    document.getElementById("m_gnb_close").style.display = "none"; 
    document.getElementsByClassName("trigger_span")[0].style.transform =
      "translateY(0px) rotate(0deg)";
    document.getElementsByClassName("trigger_span")[1].style.opacity = "1";
    document.getElementsByClassName("trigger_span")[2].style.transform =
      "translateY(0px) rotate(0deg)";
  };
  // window rerize
  window.onresize = function() {
    // 초록바 메뉴 위치 셋팅
    menubarSetting();

    // console.log("window size: " + window.innerWidth);
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
   //trigger greenbar
  console.log("그린바위치 top: " + $("#greenBar").position().top);
  console.log("그린바위치 left: " + $("#greenBar").position().left);
 
  $("#gnbMenu1").on("click", function() {
    $("#greenBar").css("width", $("#gnbMenu1").width());
    $("#greenBar").animate({ left: menu1X });
    $("#gnb li a").css("color", "#000");
    $("#gnbMenu1 a").css("color", "#009070");
    $("html").animate({ scrollTop: $("#section1").offset().top }, "slow");
  });
  $("#gnbMenu2").on("click", function() {
    $("#greenBar").css("width", $("#gnbMenu2").width());
    $("#greenBar").animate({ left: menu2X });
    $("#gnb li a").css("color", "#000");
    $("#gnbMenu2 a").css("color", "#009070");
    $("html").animate({ scrollTop: $("#section2").offset().top }, "slow");
  });
  $("#gnbMenu3").on("click", function() {
    $("#greenBar").css("width", $("#gnbMenu3").width());
    $("#greenBar").animate({ left: menu3X });
    $("#gnb li a").css("color", "#000");
    $("#gnbMenu3 a").css("color", "#009070");
    $("html").animate({ scrollTop: $("#section3").offset().top }, "slow");
  });
  $("#gnbMenu4").on("click", function() {
    $("#greenBar").css("width", $("#gnbMenu4").width());
    $("#greenBar").animate({ left: menu4X });
    $("#gnb li a").css("color", "#000");
    $("#gnbMenu4 a").css("color", "#009070");
    $("html").animate({ scrollTop: $("#section4").offset().top }, "slow");
  });
  $("#gnbMenu5").on("click", function() {
    $("#greenBar").css("width", $("#gnbMenu5").width());
    $("#greenBar").animate({ left: menu5X });
    $("#gnb li a").css("color", "#000");
    $("#gnbMenu5 a").css("color", "#009070");
    $("html").animate({ scrollTop: $("#section5").offset().top }, "slow");
  });
  $("#gnbMenu6").on("click", function() {
    $("#greenBar").css("width", $("#gnbMenu6").width());
    $("#greenBar").animate({ left: menu6X });
    $("#gnb li a").css("color", "#000");
    $("#gnbMenu6 a").css("color", "#009070");
    $("html").animate({ scrollTop: $("#section6").offset().top }, "slow");
  });
  $("#gnbMenu7").on("click", function() {
    $("#greenBar").css("width", $("#gnbMenu7").width());
    $("#greenBar").animate({ left: menu7X });
    $("#gnb li a").css("color", "#000");
    $("#gnbMenu7 a").css("color", "#009070");
    $("html").animate({ scrollTop: $("#section7").offset().top }, "slow");
  });
  $("#gnbMenu8").on("click", function() {
    $("#greenBar").css("width", $("#gnbMenu8").width());
    $("#greenBar").animate({ left: menu8X });
    $("#gnb li a").css("color", "#000");
    $("#gnbMenu8 a").css("color", "#009070");
  });

  
