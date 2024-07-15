
$(function(){
    $("#hide").click(function(){
        $(".box").hide(1200);
    })
    $("#show").click(function(){
        $(".box").show(1200);
    })
    $("#hide_show").click(function(){
        $(".box").toggle(1200);
    })
    $("#slideUp").click(function(){
        $(".box").slideUp(1200);
    })
    $("#slideDown").click(function(){
        $(".box").slideDown(1200);
    })
    $("#slideUp_Down").click(function(){
        $(".box").toggle(1200);
    })
    $("#fadeIn").click(function(){
        $(".box").fadeIn(1200);
    })
    $("#fadeOut").click(function(){
        $(".box").fadeOut(1200);
    })

})