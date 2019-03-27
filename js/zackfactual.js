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

    // dynamically populate model title, body content, and background image
    $('#exampleModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget); // Button that triggered the modal
        var modalTitle = button.data('modaltitle');
        var modalBodyContent = readModalBodyContent(modalTitle);
        var modalBodyBackground = "url(./img/" + button.data('modalbackground') + ")";
        var modal = $(this)
        modal.find('.modal-title').html(modalTitle);
        modal.find('.modal-body').html(modalBodyContent);
        modal.find('.modal-body').css("background-image", modalBodyBackground);
    })
});

// add text to modal body
function readModalBodyContent(modalTitle) {
    if (modalTitle == "About Me") {
        modalBody = '<p>My interest in software development began, like every good adventure, in a tavern. I was bartending at a cider house when a young woman walked in and asked for a recommendation. I gave her a bad one, which turned out to be a good thing since it got us talking. When I asked what she did for a living she replied, "I work in dev/ops for an eCommerce company."</p>'
            + '<p><span class="thought-bubble">Her job description is gibberish,</span> I thought, <span class="thought-bubble">she must be a genius.</span></p>'
            + '<p>I did the thing that no good bartender should do, and help up the line to ask, "Hey, you wanna grab coffee some time?"</p>'
            + '<p>That woman is now my fiancée, and after a year of studying software development over her shoulder, I decided to give it a shot myself. I found it easier on the back—and more stimulating for the brain—than selling and making alcohol. Solving puzzles, learning constantly, creating unique applications and endlessly pursuing their perfection—this is the work that I love.</p>';
    }
    else if (modalTitle == "Solutions Engineer, Cludo") {
        modalBody = "<p>A site search and content enablement platform based in Copenhagen, Denmark, Cludo provides its clients with powerful tools to boost site search relevancy, improve visitor conversion rates, and derive actionable insights from end user search and 404 behavior data. As the first Solutions Engineer at Cludo, I:</p>"
            + "<ul><li>Built prospective clients product demos in C# ASP.NET MVC, JavaScript, HTML, and Less</li>"
            + "<li>Configured crawlers, engines, and boosting tools to improve clients’ site search relevancy</li>"
            + "<li>Collaborated with Data Science team, writing Python scripts to generate demo analytics</li>"
            + "<li>Served as customer-facing technical resource on Sales team calls, emails, Zendesk tickets</li>"
            + "<li>Worked with leadership to set cross-company accountability and communication standards</li></ul>";
    }
    else if (modalTitle == "Academy Director, The Tech Academy Seattle") {
        modalBody = "<p>A coding bootcamp headquartered in Portland, Oregon, The Tech Academy accepts students regardless of prior industry experience and empowers them with a comprehensive software development curriculum and a robust job placement program. As the first Academy Director of The Tech Academy's Seattle branch, I:</p>"
            + "<ul><li>Built registration flow and course view webpages using ASP.NET MVC and JavaScript</li>"
            + "<li>Assisted in data recovery efforts following company loss of main and backup databases</li>"
            + "<li>Enacted management strategies that provided 87% increase in monthly delivery value</li>" 
            + "<li>Taught version control, Agile and Scrum project management, T-SQL relational database management, HTML5/CSS3, JavaScript, jQuery, Bootstrap, and C# ASP.NET MVC</li>"
            + "<li>Designed and edited courses, including C# and Overview of Software Development</li></ul>";
    }
    else if (modalTitle == "Bewander") {
        modalBody = "<p>A client of Prosper I.T. Consulting in Portland, Oregon, Bewander is a social media platform predicated on connecting people through the shared experience of travel. As a Software Development Intern at Bewander, I:</p>"
            + "<ul><li>Created admin role with total CRUD functionality and ability to lock out problem users</li>"
            + "<li>Wrote Like/Unlike AJAX functions to update total likes on images without forcing reload</li>"
            + "<li>Standardized time stamp logic for chat box that appeared differently in three separate views</li>"
            + "<li>Made home page dynamically display site’s eight most-liked images instead of placeholders</li>"
            + '<p>Visit it here: <a href="https://bewander.com/" target="_blank">https://bewander.com/</a></p>';
    }
    else if (modalTitle == "Production Manager, Schilling Cider") {
        modalBody = "<p>The largest locally-owned craft cidery in Seattle, Washington, Schilling Cider produces over a dozen different kinds of cider from the finest Washington-grown apples. As Production Manager of Schilling Cider, I:</p>"
            + '<ul><li>Performed all aspects of cidermaking process from fermentation to filtration to packaging</li>'
            + "<li>Conducted quality control tests on up to eight 6,000-gal. batches simultaneously, monitoring scent, flavor, °Bx, pH, CO2, TA, and free SO2 of fermenting and finished product</li>"
            + '<li>Wrote 70-pg. operations manual with pictures, diagrams, and step-by-step instructions detailing standard operating procedures for safe and efficient production of cider</li>'
            + "<li> Tended bar and led homebrewing classes at Schilling Cider House</li></ul>";
    }
    else if (modalTitle == "Wine & Spirits Buyer, Shawn Fine Wine & Spirits") {
        modalBody = "<p>A Brooklyn, New York boutique wine shop, Shawn Fine Wine & Spirits has been a fixture of the Park Slope neighborhood since it opened its doors in 1970. As Wine & Spirits Buyer and General Manager of Shawn Fine Wine & Spirits, I:</p>"
            + '<ul><li>Provided consumers with descriptive recommendations and a comprehensive global selection of boutique and name brand products, distributing $100k monthly budget to serve the needs of an economically and culturally diverse clientele</li>'
            + '<li>Compiled and analyzed sales and inventory data to evaluate and improve practices of a small business surpassing $2M in annual sales</li>'
            + '<li>Broadened business outreach by implementing customer loyalty programs, integrating with eCommerce platforms, and running social media campaigns</li>'
            + '<li>Directed sales team staffing and daily operations, including scheduling, hiring, and firing</li>'
            + '<li>Worked with eCommerce partner on market analysis, promotional strategies, and inventory management integration</li></ul>';        
    }
    else if (modalTitle == "Radish Point") {
        modalBody = '<p>Wrote a cross-numeral system converter with the following features:</p>'
            + '<ul><li>Number conversion from numeral systems base 1 through 100</li>'
            + '<li>Simple cross-numeral system calculations</li>'
            + '<li>Results precise up to 324 fractional digits</li>'
            + '<li>Character key provided with corresponding decimal values</li>'
            + '<li>Mobile responsivity</li>'
            + '<li>IN DEV: converting to native iPhone and Android mobile app via Xamarin.Forms</li></ul>'
            + '<p>Visit it here: <a href="https://radishpoint.com/" target="_blank">https://radishpoint.com/</a></p>';
    }
    else if (modalTitle == "otDay omCay") {
        modalBody = '<p>Wrote an English to Pig Latin translator in JavaScript with the following features:</p>'
            + '<ul><li>Recursive functions to trim leading and trailing punctuation</li>'
            + '<li>Custom capitalization and suffix schemes</li>'
            + '<li>Regular expressions to account for edge cases</li>'
            + '<li>Mobile responsivity</li>'
            + '<li>IN DEV: File I/O</li>'
            + '<li>IN DEV: speech-to-text API</li></ul>'
            + '<p>Visit it here: <a href="https://otdayomcay.com/" target="_blank">https://otdayomcay.com/</a></p>';
    }
    else {
        modalBody = "<p>A work in progress, Can You Drink Yet? is being built in JavaScript and will have the following features:</p>"
            + "<ul><li>Accept user birth date input and detect browser time zone to dynamically generate 21st birthday countdown clock</li>"
            + "<li>Generate embeddable code for users' own websites and social media platforms</li>"
            + "<li>Mobile responsivity</li></ul>"
            + '<p>Visit it here soon: https://canyoudrinkyet.com/</p>';
    }
    return modalBody;
};