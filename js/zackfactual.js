$(document).ready(function() { 
    // close navbar on user click or touch 
    $(document).on("click touchstart",function(){
        $(".collapse").collapse("hide");
    });
    
    // set carousel to rotate every 3 seconds
    $(".carousel").carousel({
        interval: 3000
    });

    // set carousel to cease rotating on hover, resume rotating when off hover
    $(".carousel").hover(function() {
        $(this).carousel("pause");
    }, function() {
        $(this).carousel("cycle");
    });
    
    // auto-update copyright
    var year = (new Date).getFullYear();
    $("#copy").append("&copy; " + year + " — Zachary Velcoff");
});

var isIE = /*@cc_on!@*/false || !!document.documentMode, // Internet Explorer 6-11
isEdge = !isIE && !!window.StyleMedia; // Edge 20+

// Check if Internet Explorer 6-11 OR Edge 20+
if(isIE || isEdge) {
    console.log("edge or i.e.");
    document.getElementsByClassName('timeline-image').style['border-radius: 0;'];
};