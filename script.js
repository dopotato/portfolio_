$(document).ready(function() {
    $(".black").click(function(){
        $("html").css({
        "background": "black",
        "color": "white"
        });
        $("a").css("color", "white");
    });

    $(".red").click(function(){
        $("html").css({
        "background": "rgb(241, 12, 4)",
        "color": "black"
        });
        $("a").css("color", "black");
    });

    $(".green").click(function(){
        $("html").css({
        "background": "rgb(230, 97, 64)",
        "color": "black"
        });
        $("a").css("color", "black");
    });

    $(".blue").click(function(){
        $("html").css({
        "background": "rgb(212, 177, 173)",
        "color": "black"
        });
        $("a").css("color", "black");
    });

    $(".white").click(function(){
        $("html").css({
        "background": "rgb(255, 255, 255)",
        "color": "black"
        });
        $("a").css("color", "black");
    });
    
});