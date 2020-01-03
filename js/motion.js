$(function(){
    $(window).scroll(function(){
        // console.log($(window).scrollTop());
        if($(window).scrollTop() > 400){
            // console.log("ok");
            $("#section1 p:nth-of-type(4)").css("animation-name", "textMotion2");
        }
    });
});