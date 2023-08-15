$(document).ready(function(){

    // //네비게이션 메뉴
    // $("header .nav_box ul.main>li").mouseenter(function(){
    //     $(this).find("ul.sub_menu").stop().fadeIn();
    // });
    // $("header .nav_box ul.main>li").mouseleave(function(){
    //     $(this).find("ul.sub_menu").stop().fadeOut();
    // });


    //베스트 배너 아이콘 애니메이션
    $(".contents .best_banner .best_nav .item2,.contents .best_banner .best_nav .item2 img").mouseenter(function(){
        $(".contents .best_banner .best_nav .item2 .heart").stop().animate({"top":"5px"},280);
    });
    $(".contents .best_banner .best_nav .item2,.contents .best_banner .best_nav .item2 img").mouseleave(function(){
        $(".contents .best_banner .best_nav .item2 .heart").stop().animate({"top":"0"},280);
    });
    
    //컬렉션 배너
    $(".collection_banner .item1_wrapper .item1").mouseover(function(){
        $(".item1_wrapper .item1_box").stop().animate({"bottom":"15px"},280);
    });
    $(".collection_banner  .item1_wrapper .item1 img,.item1_wrapper .item1_box").mouseout(function(){
        $(".collection_banner .item1_wrapper .item1_box").stop().animate({"bottom":"-50px"},280);
    });
    $(".contents .item2_wrapper .item2 img,.item2_wrapper .item2_box").mouseenter(function(){
        $(".collection_banner .item2_wrapper .item2_box").stop().animate({"bottom":"15px"},280);
    });
    $(".contents .item2_wrapper .item2 img,.item2_wrapper .item2_box").mouseleave(function(){
        $(".collection_banner .item2_wrapper .item2_box").stop().animate({"bottom":"-50px"},280);
    });
    
});