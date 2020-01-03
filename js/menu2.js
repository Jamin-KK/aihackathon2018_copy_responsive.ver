// 코드가 다 로드된 뒤 실행(마지막에)
window.onload = function(){
    // 메뉴가 열렸는지 여부 변수 선언
    var menuOpen = false;

    // trigger를 클릭할때
    document.getElementById("trigger").onclick = function(){
        if(menuOpen == false){
            menuOpen = true;
            console.log("클릭 열기");
            document.getElementById("mobile_gnb").style.display = "block";
            document.getElementById("m_gnb_close").style.display = "block";
            // console.log(document.getElementsByClassName("trigger_span"));
            // console.log(document.getElementsByClassName("trigger_span")[0]);
            // console.log(document.getElementsByClassName("trigger_span")[1]);
            // console.log(document.getElementsByClassName("trigger_span")[2]);
            // document.getElementsByClassName("trigger_span")[0].style.backgroundColor = "red";
            document.getElementsByClassName("trigger_span")[0].style.transform = "translateY(15px) rotate(45deg)";
            document.getElementsByClassName("trigger_span")[1].style.opacity = "0";
            document.getElementsByClassName("trigger_span")[2].style.transform = "translateY(-15px) rotate(-45deg)";
        } else {
            console.log("클릭 닫기");
            menuOpen = false;
            document.getElementById("mobile_gnb").style.display = "none";
            document.getElementById("m_gnb_close").style.display = "none";
            document.getElementsByClassName("trigger_span")[0].style.transform = "translateY(0px) rotate(0deg)";
            document.getElementsByClassName("trigger_span")[1].style.opacity = "1";
            document.getElementsByClassName("trigger_span")[2].style.transform = "translateY(0px) rotate(0deg)";
        }

    }
    //m_gnb_close를 클릭할때(닫기)
    document.getElementById("m_gnb_close").onclick = function(){
        menuOpen = false;
        document.getElementById("mobile_gnb").style.display = "none";
        document.getElementById("m_gnb_close").style.display = "none";
        // this.style.display = "none";
        // console.log(this);
        document.getElementsByClassName("trigger_span")[0].style.transform = "translateY(0px) rotate(0deg)";
        document.getElementsByClassName("trigger_span")[1].style.opacity = "1";
        document.getElementsByClassName("trigger_span")[2].style.transform = "translateY(0px) rotate(0deg)";
    }
    // 윈도우 리사이즈 이벤트
    window.onresize = function(){
        console.log("윈도우너비: " + window.innerWidth);
        if(window.innerWidth > 1000){
            document.getElementById("mobile_gnb").style.display = "none";
            document.getElementById("m_gnb_close").style.display = "none";
        } else {
            menuOpen = false;
            document.getElementsByClassName("trigger_span")[0].style.transform = "translateY(0px) rotate(0deg)";
            document.getElementsByClassName("trigger_span")[1].style.opacity = "1";
            document.getElementsByClassName("trigger_span")[2].style.transform = "translateY(0px) rotate(0deg)";
        }
    }
    // 초록색 바 제어
    console.log(document.getElementById("greenBar").offsetTop);
    console.log(document.getElementById("greenBar").offsetLeft);

    //메뉴 제어
    document.getElementById("gnb").style.border = "2px solid red";
    $("#gnb").css("border", "2px solid pink");
}