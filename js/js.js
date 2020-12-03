/*global $, window ,console */


$(function () {
    "use strict";
     var navheight,color;
	color=$.cookie('test')||"#ff9b51";
	
//    if( $.cookie('test')>" ")
//        {
//            color=$.cookie('test');
//            $("html").get(0).style.setProperty("--maincolor", color); 
//        }
//   else{
//       color="#ff9b51";
//   }
    /*navheight change with width  */
   
	/*nav bar select */
	$(".navbar .navbar-nav .nav-link").click(function(){
		$(".nav-item").removeClass("active");
		$(this).parent().addClass("active");
	});
	
    setTimeout(function(){ 
        $(".wait").css("display","none");
      
         var thetext=$(".header p.lead").data("text"),
        thelengh=thetext.length,n=0,
        
        thetyper =setInterval(function(){
            
            $(".header p.lead").each(function(){
                $(this).html($(this).html()+thetext[n]);
            });
            
             n++;
            if(n===thelengh){
                clearInterval(thetyper)
            }
            
        },70);
    },1000);
   

    console.log("from cookie "+ color);
    $(".navbar li a ").click(function (e) {
        e.preventDefault();
        /*navheight change with width  */
        if ($(window).width() < 768) { navheight = $(".navbar-header").outerHeight(); } else {navheight = $(".navbar").outerHeight(); }
        /*smooth scroll*/
        $('html , body').animate(
            {scrollTop : $('.' + $(this).data("class")).offset().top - navheight + 1 },
            1000
        );
        /*hide navbar in smallsize after click */
        $("#axit-nav").removeClass("in");
//        /* select active class*/        
//        $(".navbar li a ").removeClass("active");
//        $("this").addClass("active");
    });
    function autoclick(){
        $(".gallery-section .gallery  .main-gallery .left").click();
    };
    setInterval(autoclick,3000);
    $(window).scroll(function () {
        /* opacity for navbar */
        if ($(window).scrollTop() > 0) {$(".navbar").css("opacity", "0.7"); } else {$(".navbar").css("opacity", "1"); }
        /* sync blocks  */
        $(".block").each(function () {
            if ($(window).scrollTop() >= $(this).offset().top - navheight) {
                var blockid = $(this).attr("id");
//                console.log($(this).attr("id"));
//                console.log($(".block"));
                $(".navbar li a ").removeClass("active");
                $('.navbar li a[data-class="' + blockid + '"]').addClass("active");
            }
        });
        /*vscroll to top botton */
        var scroll = $(".scroll-to-top");
        if ($(window).scrollTop() > 1000) {if (scroll.is(":hidden")) {scroll.fadeIn(1000); } } else {scroll.fadeOut(500); }
    });
    $(".scroll-to-top").click(function () {
        $(" html, body ").animate({
            scrollTop: 0
        }, 1000);
    });
    /*  active class for tab */
    $(".tabs ul li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(".tabs .info2  div").hide();
        $("." + $(this).data("class")).show();
    });
    /*padding for navbar */
    $("body").css("padding-top", navheight);
    
    /*popup */
    
    $(".contact button").click(function () {
        $(".popup").fadeIn();
    });
    $(".popup").click(function (e) {
        $(this).fadeOut();
    });
    $(".popup .endix ").click(function (e) {
        e.stopPropagation();
    });
    $(".popup .button10").click(function (e) {
        $(this).parentsUntil(".popup").parent().fadeOut();
    });
        $(document).keydown(function(e) {
        
        if(e.keyCode == 18)
        {$(".popup").fadeOut();}
        
        
    });
    
    /* gallery*/
    $(".gallery-section .gallery  .sub-gallery li").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        var srcimg = $(this).children("img").attr("src");
        $(".gallery-section .gallery .main-gallery img").hide().attr("src",srcimg).fadeIn(300);
    });
    
    $(".gallery-section .gallery  .main-gallery .left").hover(function(){

              $(this).toggleClass("glyphicon-chevron-right   glyphicon-menu-right");
            });
    
    $(".gallery-section .gallery  .main-gallery .left").on ("click dblclick",function(){

        if($(".gallery-section .gallery .active ").is(":last-child")){
            $(" .sub-gallery img ").eq(0).click();
        }
           else{$(".gallery-section .gallery .active ").next().click();}
        
    });
    
    $(".gallery-section .gallery  .main-gallery .right").hover(function(){

              $(this).toggleClass("glyphicon-chevron-left glyphicon-menu-left");
            });
    
    
    $(".gallery-section .gallery  .main-gallery .right").on ("click dblclick",function(){
            if($(".gallery-section .gallery .active ").is(":first-child")){
            $(" .sub-gallery img:last").click();
        }
           else{$(".gallery-section .gallery .active ").prev().click();}  
    });
    
    function automove() {
   $(".menu span i").fadeOut(2000,function(){
       $(this).fadeIn(2000);
       automove();});
       
    }
        automove();

        


    /*standerd*/

   /*menu*/
    $(".menu span").on("click",function(){
            var left = $(".menu").css("width");
        $(this).parent(".menu").toggleClass("visible");
        if($(".menu").hasClass("visible"))
            {$(".menu").animate({
                left:"0"
            },500);
            }
        else
            {$(".menu").animate({
                left:"-"+left
            },500);
             
             
        }});
    
    /*chang color*/
    $(".menu ul li").on("click",function(){
    color = $(this).css("background-color");
    $("html").get(0).style.setProperty("--maincolor", color);
        $.cookie.raw = true;
var test=getComputedStyle(document.documentElement)
    .getPropertyValue('--maincolor'); // #999999
   $.cookie('test', test, { expires: 7, path: '/' });
console.log("from css variable "+test);
        
    $(".menu").animate({
                left:"-"+$(".menu").css("width")
            },500);
         $(".menu").toggleClass("visible");
        
    });
    
     color = $(".menu input" ).val();


    $(".menu .ok").click(function(){
        $(".menu").animate({
                left:"-"+$(".menu").css("width")
            },500);
         $(".menu").toggleClass("visible");
        $("html").get(0).style.setProperty("--maincolor", color);
        $.cookie.raw = true;
var test=getComputedStyle(document.documentElement)
    .getPropertyValue('--maincolor'); // #999999
   $.cookie('test', test, { expires: 7, path: '/' });
console.log("from css variable "+test);
       
    });
   /*form*/
    var placdata= " " ;
    $("[placeholder]").on ("focus",function(){
        placdata = $(this).attr("placeholder");
        //console.log(placdata);
        $(this).attr("placeholder", "");
    }).on("blur",function(){
        $(this).attr("placeholder", placdata);
    });
	/* input direction ==== dir=auto*/
	
//$("input").on("blur",function(){
//    
//    if($(this).val()=="")
//        {$(this).css("direction","ltr");
//         if($(this).next().is("span"))
//         {$(this).next("span").css("display","inline").delay(2000).fadeOut();}
//        
//        }
//    
//});
//$("input").keyup(function (e){
//   if($(this).val().charCodeAt(0)<200)
//       {$(this).css("direction","ltr")}
//    else{$(this).css("direction","rtl")}
//
//});
    ////////
	
    $(".standard p").each(function(){
        var text =$(".standard p").text(),termed;
        
        $(this).html($(this).text().substr(0,200)+ "<span class='readmore' style='cursor: pointer;color: var(--maincolor,red); text-decoration: underline;'>read more..</span>")

        $(this).on("click",".readmore",function(){        
                $(this).parent("p").html(text+"<span class='readless' style='cursor: pointer;color: var(--maincolor,red); text-decoration: underline;'>read less..</span>");});
        
        $(this).on("click",".readless",function(){        
                $(this).parent("p").html( $(this).parent("p").text().substr(0,200)+ "<span class='readmore' style='cursor: pointer;color: var(--maincolor,red); text-decoration: underline;'>read more..</span>")});
        
            
        
    });
    var maxheight=0;
    $(".customer .said div p").each(function(){
        if($(this).height()>maxheight)
            {  maxheight=$(this).height();}
        
    });
         //  console.log(maxheight);

        $(".customer .said div p").height(maxheight);
var zindex=0;
  $(".awesome .cards .card").on ("click",function(){
      
      $(this).animate({
          left :"-=20%",
          top :"+=20px"
      },500,function(){$(this).css("z-index",--zindex)}).
      animate({ left :"+=20%",
          top :"-=20px"});
  });
    //the typer
   
 $("body").niceScroll({
 cursorcolor:"rgb( 51, 51, 51 )",
  cursorwidth:"24px",
  cursorborderradius:20,
  zindex:2,
cursorborder: "1px solid rgb( 51, 51, 51 )", 
 });

 
});