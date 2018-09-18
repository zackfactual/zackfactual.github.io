$(document).ready(function() { 
    // close navbar on user click or touch 
    $(document).on("click touchstart",function() {
        $(".collapse").collapse("hide");
    });
    
    // set carousel to rotate every 3 seconds
    $(".carousel").carousel( {
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

    // on aboutModal open
    $("#aboutModal").on("shown.bs.modal", function(e) {
        $("#aboutModalLabel").text("About Me");
        $("#aboutModalBody").css("background-image", "url(./img/zacharyvelcofftransparent.jpg)");
        $("#aboutModalBody").html('<p>My interest in software development began, like every good adventure,'
            + 'in a tavern. I was tending bar at a cider house when a young woman walked in and asked for a recommendation.'
            + ' I gave her a bad one, which turned out to be a good thing, since it got us talking. '
            + 'When I asked what she did for a living, she replied, "I work in dev/ops for an eCommerce company."</p><p>'
            + '<span class="thought-bubble">Her job description is gibberish,</span> I thought, <span class="thought-bubble">'
            + 'she must be a genius.</span></p><p>I did the thing that no good bartender should do: "Hey, you wanna grab coffee some time?"'
            + '</p><p>That woman is now my fiancée, and after a year of studying software development over her shoulder, I decided to give it a shot.'
            + ' I found it easier on the back—and better for the brain—than selling and making alcohol. '
            + 'Solving puzzles, learning constantly, creating unique applications and endlessly pursuing their perfection—this is the work I love.</p>'
        );
    });

    // on techAcademyModal open
    $("#techAcademyModal").on("shown.bs.modal", function(e) {
        $("#techAcademyModalLabel").html("Academy Director,<br />The Tech Academy Seattle");
        $("#techAcademyModalBody").css("background-image", "url(./img/techacademytransparent.jpg)");
        $("#techAcademyModalBody").html('<p>Provided students support and instruction in:</p><ul><li>'
            + 'Computer and software development fundamentals</li><li>Version Control with GitHub and Team Foundation Server</li>'
            + '<li>Small Basic</li><li>HTML and CSS</li><li>SQL and Relational Database Management</li><li>JavaScript with jQuery '
            + 'and Bootstrap</li><li>C# with Visual Studio and ASP.NET MVC</li><li>Project management with Agile and Scrum</li></ul>'
        );
    });

    // on wilridgeModal open
    $("#wilridgeModal").on("shown.bs.modal", function(e) {
        $("#wilridgeModalLabel").html("Sales Associate,<br />Wilridge Winery &amp; Vineyard");
        $("#wilridgeModalBody").css("background-image", "url(./img/wilridgetransparent.jpg)");
        $("#wilridgeModalBody").html('<ul><li>Sold organic and biodynamic wines directly to consumers on premise and at seasonal and '
            + 'year-round markets across the Greater Seattle Area</li><li>Worked 2017 harvest at biodynamic estate in Eastern Washington'
            + '</li></ul>'
        );
    });

    // on schillingModal open
    $("#schillingModal").on("shown.bs.modal", function(e) {
        $("#schillingModalLabel").html("Production Manager,<br />Schilling Cider");
        $("#schillingModalBody").css("background-image", "url(./img/schillingtransparent.jpg)");
        $("#schillingModalBody").html('<ul><li>Performed all aspects of cidermaking process from fermentation to filtration to packaging'
            + '</li><li>Conducted quality control tests on up to eight 6,000-gal. batches simultaneously, monitoring scent, flavor, °Bx,'
            + 'pH, CO2, TA, and free SO2 of fermenting and finished product</li><li>Wrote 70-pg. operations manual with pictures, diagrams,'
            + 'and step-by-step instructions detailing standard operating procedures for safe and efficient production of cider</li><li>'
            +'Tended bar and led homebrewing classes at Schilling Cider House</li></ul>'        
        );
    });

    // on consultantModal open
    $("#consultantModal").on("shown.bs.modal", function(e) {
        $("#consultantModalLabel").html("Beverage Industry Consultant,<br />Self-Employed");
        $("#consultantModalBody").css("background-image", "url(./img/consultanttransparent.jpg)");
        $("#consultantModalBody").html('<ul><li>Advised eCommerce client on market analysis, promotional strategies, and inventory '
            + 'management integration</li><li>Managed shipping logistics, customer communications, inventory and financial records for '
            + "client's investment in a négociant averaging €2.5M in annual production</li><li>Participated in 2015 harvest of Premier "
            + 'and Grand Cru Burgundy wines</li><li>Conducted soil analysis, laid groundwork for client to plant orchards and launch '
            + 'distillery</li></ul>'        
        );
    });

    // on shawnModal open
    $("#shawnModal").on("shown.bs.modal", function(e) {
        $("#shawnModalLabel").html("Wine &amp; Spirits Buyer,<br />Shawn Fine Wine &amp; Spirits");
        $("#shawnModalBody").css("background-image", "url(./img/shawntransparent.jpg)");
        $("#shawnModalBody").html('<ul><li>Provided consumers with descriptive recommendations and a comprehensive global selection of '
            + 'boutique and name brand products, distributing $100k monthly budget to serve the needs of an economically and culturally '
            + 'diverse clientele</li><li>Compiled and analyzed sales and inventory data to evaluate and improve practices of a small '
            + 'business surpassing $2M in annual sales</li><li>Broadened business outreach by implementing customer loyalty programs, '
            + 'integrating with eCommerce platforms, and running social media campaigns</li><li>Directed sales team staffing and daily '
            + 'operations, including scheduling, hiring, and firing</li></ul>'
        );
    });

    // on radishPointModal open
    $("#radishPointModal").on("shown.bs.modal", function(e) {
        $("#radishPointModalLabel").html('<a href="https://radishpoint.com/" target="_blank">Radish Point</a>');
        $("#radishPointModalBody").css("background-image", "url(./img/radishpointtransparent.png)");
        $("#radishPointModalBody").html('<p>Wrote a cross-numeral system converter with the following features:</p><ul><li>Number '
            + 'conversion from numeral systems base 1 through 100</li><li>Simple cross-numeral system calculations</li><li>Results '
            + 'precise up to 324 fractional digits</li><li>Character key provided with corresponding decimal values</li><li>Mobile '
            + 'responsivity</li><li>IN DEV: converting to native iPhone and Android mobile app via Xamarin.Forms</li></ul>'
        );
    });

    // on otDayOmCayModal open
    $("#otDayOmCayModal").on("shown.bs.modal", function(e) {
        $("#otDayOmCayModalLabel").html('<a href="https://otdayomcay.com/" target="_blank">otDay omCay</a>');
        $("#otDayOmCayModalBody").css("background-image", "url(./img/otdayomcaytransparent.png)");
        $("#otDayOmCayModalBody").html('<p>Wrote an English to Pig Latin translator in JavaScript with the following features:</p>'
            + '<ul><li>Recursive functions to trim leading and trailing punctuation</li><li>Custom capitalization and suffix schemes'
            + '</li><li>Regular expressions to account for edge cases</li><li>Mobile responsivity</li><li>IN DEV: File I/O</li><li>'
            + 'IN DEV: speech-to-text API</li></ul>'
        );
    });

    // on bewanderModal open
    $("#bewanderModal").on("shown.bs.modal", function(e) {
        $("#bewanderModalLabel").html('<a href="http://bewander.com/" target="_blank">Bewander</a>');
        $("#bewanderModalBody").css("background-image", "url(./img/bewandertransparent.png)");
        $("#bewanderModalBody").html('<p>Implemented the following features for Bewander, an ASP.NET MVC project built using Visual '
            + 'Studio:</p><ul><li>An admin role with total CRUD functionality, the ability to download all user emails as a .csv file, '
            + 'and the ability to temporarily lock out users</li><li>Like and Unlike functions that use Ajax to update the number of '
            + 'total likes on public images without forcing a refresh</li><li>Standardized time stamp logic across three different '
            + "chat box views</li><li>A function that dynamically displays the site's current best-liked images on the home page</li></ul>"
        );
    });
});





