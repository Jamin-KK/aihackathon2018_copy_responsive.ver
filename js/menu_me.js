window.onload = function(){
  
    
    
var menuMarginNum1 = 30;
var menuMarginNum2 = 16;
var firstMenu;
// const windowWidth = ($(window).width);
var menuMargin = menuMarginNum1

 




// ****************************************
// **************** desk top ************************
// ****************************************

/*                  - click -> scroll
                    - #greenBar's position
                    - #greenBar's length
*/                  

; //이런애를 맨 위로 올려서 정리해줘야해




/*************************************************************
                    - first active menu color
                    - click -> scroll
                    - #greenBar's position
                    - #greenBar's length
*************************************************************/ 


if($(window).width() <768 ){
    firstMenu = 2;
   }else if($(window).width() <880 ){
        firstMenu = 4;
    }else if($(window).width() <1000 ){
       firstMenu = 2;
   }else{
       firstMenu =1;  
   }
   

   //grennbar position width
   $("#greenBar").css("left", $("#gnbMenu" + firstMenu).position().left);
   $("#greenBar").css("width", $("#gnbMenu" + firstMenu).width());
   
   //*********처음 화면 활성화메뉴 초록색*/
    $("#gnbMenu"+firstMenu+" a").css("color", "#009070");


 
    // window.addEventListener('scroll', function(e) {
    //     if(0<= ($(window).width())
    // }








   //***** menu click */
$("#gnb li").click(function(){
    
    // console.log(this);
    // console.log(this.id);

    var i = this.id.slice(7,8);

    if($(window).scrollTop() > 400){
    $("#gnb li a").css("color", "#000000");
    $("#gnbMenu"+i+" a").css("color", "#009070"); 
    

       //***** 모바일메뉴와 데스크답 메뉴의 위치에 각각 반응하는 그린바 ㅗㅗ*/
       if($(window).width() <768 ){
        firstMenu = 2;
        menuMargin=menuMarginNum2;

        }else if($(window).width() <880 ){
            firstMenu = 4;
            menuMargin=menuMarginNum2;

        }else if($(window).width() <1000 ){
           firstMenu = 2;
           menuMargin=menuMarginNum2;

       }else{
           firstMenu =1;  
           menuMargin=menuMarginNum1;

       }

    //"if" cause gnb li:first margin=0
       if(i==firstMenu){
        menuMargin = 0;
    }

    //***** click -> scroll
    $("html").animate({scrollTop:$("#section"+i).offset().top},"slow");
    
    //***** #greenBar's position 
      $("#greenBar").animate({left:$("#gnbMenu"+i).position().left+menuMargin},'slow');
    
    //***** #greenBar's length
    $("#greenBar").css("width",$("#gnbMenu"+i).width(),100);
})








$(window









// ************************************************************
// ***************  /| /|  __  |    _ |  ___   *********************
// **************  / |/ | |  | |__  | | |___|  ****************
// ************** /     | |__| |__| | | |____  *****************
// ************************************************************





//***** mobile menu open && close
//***** w3scool Curtain Menu
 
$("#trigger").click(function(){
    $("#mobile_gnb").css("width","170px");

});




$("#m_gnb_close").click(function(){
    $("#mobile_gnb").css("width","0px");
}); 






}


