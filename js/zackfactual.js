$(document).ready(function() { 
	
    // auto-update copyright
    var year = (new Date).getFullYear();
    $("#copy").append("&copy; " + year + " — Zachary Velcoff");
    
    // close navbar when clicks navbar link
    $(".nav-link").click(function() {
        $(".navbar-toggler").click();
    });
    
    // close navbar when user clicks away from navbar
    $(document).click(function(e) {
        if (!$(e.target).is("a")) {
            $(".collapse").collapse("hide");	    
        }
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
		
});