$(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 400){
            $("#section1 p:nth-of-type(4)").css("animation-name", "textMotion2");
        }
    });
});