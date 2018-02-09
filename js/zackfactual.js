$(document).ready(function() { 
	    
    // close navbar on user click    
    $(document).on("click",function(){
        $(".collapse").collapse("hide");
    });

    // set carousel to rotate every 3 seconds
    $(".carousel").carousel({
        interval: 3000
    });

    // set carousel to cease rotating on hover, resume rotating when off hover
    $("carousel").hover(function() {
        $(this).carousel("pause");
    }, function() {
        $(this).carousel("cycle");
    });
    
    // auto-update copyright
    var year = (new Date).getFullYear();
    $("#copy").append("&copy; " + year + " — Zachary Velcoff");
    
});