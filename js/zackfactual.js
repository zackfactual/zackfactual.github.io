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
        modalBody = "<p>Besides software development, my hobbies include:</p>"
            + "<li>Hiking with my wife and our lab-husky mix</li>"
            + "<li>Running</li>"
            + "<li>Reading books</li>"
            + "<li>Sustainably homebrewing kombucha and cider</li>"
            + "<li>Tabletop gaming, mostly Dungeons &amp; Dragons</li></ul>";
    }
    else if (modalTitle == "IT Developer, Allianz Life") {
        modalBody = "<p>As an IT Developer in the actuarial department of Allianz Life Insurance Company of North America, I:</p>"
            + '<ul><li>In order to detect possible admin system defects in older products, updated console app and API of policy lifetime projection engine with support for two-tiered account values</li>'
            + '<li>Wrote requirements, designs, tests, and code, improving UI/UX, reporting capacity, and product coverage of actuarial applications in .NET Core, SQL, and MongoDB</li>'
            + '<li>Volunteered for ad hoc committee conducting breakout sessions and deriving actionable recommendations for improving employee engagement</li>'
    }
    else if (modalTitle == "IT Contractor, QSI") {
        modalBody = "<p>In my contract-to-hire position at client Allianz Life, I:</p>"
            + '<ul><li>Updated IRR calculation software with grouped I/O support, expanding product coverage</li>'
            + '<li>Debugged, maintained, and updated web applications in .NET MVC, Vue, and Angular</li>'
            + '<li>Added restart capability to multithreaded Windows Service, reducing runtime</li></ul>';        
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
    return modalBody;
};