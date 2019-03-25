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
        modalBody = '<p>My interest in software development began, like every good adventure, in a tavern. I was tending bar at a cider house when a young woman '
            + 'walked in and asked for a recommendation. I gave her a bad one, which turned out to be a good thing, since it got us talking. When I asked what '
            + 'she did for a living, she replied, "I work in dev/ops for an eCommerce company."</p><p><span class="thought-bubble">Her job description is '
            + 'gibberish,</span> I thought, <span class="thought-bubble">she must be a genius.</span></p><p>I did the thing that no good bartender should do: '
            + '"Hey, you wanna grab coffee some time?"</p><p>That woman is now my fiancée, and after a year of studying software development over her shoulder, '
            + 'I decided to give it a shot. I found it easier on the back—and better for the brain—than selling and making alcohol. Solving puzzles, learning '
            + 'constantly, creating unique applications and endlessly pursuing their perfection—this is the work I love.</p>';
    }
    else if (modalTitle == "Solutions Engineer, Cludo") {
        modalBody = '<ul><li>Created project demos for prospective clients in C# and ASP.NET MVC, HTML, and Less</li>'
            + '<li>Served as first technical resource for Sales team and prospective clients alike</li>'
            + '<li>Helped customers configure crawlers, engines, and tools, and interpret analytics to boost relevancy and improve content, getting the most out of their site search</li>'
            + 'Collaborated with data science team to generate vertical-specific dummy data for the creation of more robust demos'
            + '<li>Worked with leadership across departments to build efficiency, accountability, and communication standards across company</li></ul>';
    }
    else if (modalTitle == "Academy Director, The Tech Academy Seattle") {
        modalBody = '<p>Provided students support and instruction in:</p><ul><li>Computer and software development fundamentals</li><li>Version Control with '
            + 'GitHub and Team Foundation Server</li><li>Small Basic</li><li>HTML and CSS</li><li>SQL and Relational Database Management</li><li>JavaScript with '
            + 'jQuery and Bootstrap</li><li>C# with Visual Studio and ASP.NET MVC</li><li>Project management with Agile and Scrum</li></ul>';
    }
    else if (modalTitle == "Bewander") {
        modalBody = '<p>Implemented the following features for Bewander, an ASP.NET MVC project built using Visual Studio:</p><ul><li>An admin role with total '
            + 'CRUD functionality, the ability to download all user emails as a .csv file, and the ability to temporarily lock out users</li><li>Like and Unlike '
            + 'functions that use Ajax to update the number of total likes on public images without forcing a refresh</li><li>Standardized time stamp logic '
            + "across three different chat box views</li><li>A function that dynamically displays the site's current best-liked images on the home page</li></ul>"
            + '<p>Visit it here: <a href="https://bewander.com/" target="_blank">https://bewander.com/</a></p>';
    }
    else if (modalTitle == "Production Manager, Schilling Cider") {
        modalBody = '<ul><li>Performed all aspects of cidermaking process from fermentation to filtration to packaging</li><li>Conducted quality control tests on '
            + 'up to eight 6,000-gal. batches simultaneously, monitoring scent, flavor, °Bx, pH, CO2, TA, and free SO2 of fermenting and finished product</li>'
            + '<li>Wrote 70-pg. operations manual with pictures, diagrams, and step-by-step instructions detailing standard operating procedures for safe and '
            + 'efficient production of cider</li><li> Tended bar and led homebrewing classes at Schilling Cider House</li></ul>';
    }
    else if (modalTitle == "Wine & Spirits Buyer, Shawn Fine Wine & Spirits") {
        modalBody = '<ul><li>Provided consumers with descriptive recommendations and a comprehensive global selection of boutique and name brand products, '
            + 'distributing $100k monthly budget to serve the needs of an economically and culturally diverse clientele</li><li>Compiled and analyzed sales and '
            + 'inventory data to evaluate and improve practices of a small business surpassing $2M in annual sales</li><li>Broadened business outreach by '
            + 'implementing customer loyalty programs, integrating with eCommerce platforms, and running social media campaigns</li><li>Directed sales team '
            + 'staffing and daily operations, including scheduling, hiring, and firing</li><li>Worked with eCommerce partner on market analysis, promotional strategies, and inventory management integration</li></ul>';        
    }
    else if (modalTitle == "Radish Point") {
        modalBody = '<p>Wrote a cross-numeral system converter with the following features:</p><ul><li>Number conversion from numeral systems base 1 through '
            + '100</li><li>Simple cross-numeral system calculations</li><li>Results precise up to 324 fractional digits</li><li>Character key provided with '
            + 'corresponding decimal values</li><li>Mobile responsivity</li><li>IN DEV: converting to native iPhone and Android mobile app via Xamarin.Forms'
            + '</li></ul><p>Visit it here: <a href="https://radishpoint.com/" target="_blank">https://radishpoint.com/</a></p>';
    }
    else if (modalTitle == "otDay omCay") {
        modalBody = '<p>Wrote an English to Pig Latin translator in JavaScript with the following features:</p><ul><li>Recursive functions to trim leading and '
            +' trailing punctuation</li><li>Custom capitalization and suffix schemes</li><li>Regular expressions to account for edge cases</li><li>Mobile '
            + 'responsivity</li><li>IN DEV: File I/O</li><li>IN DEV: speech-to-text API</li></ul> <p>Visit it here: <a href="https://otdayomcay.com/" '
            + 'target="_blank">https://otdayomcay.com/</a></p>';
    }
    else {
        modalBody = "<p>A work in progress inspired by my time in the wine and spirits industry, Can You Drink Yet? will take end users' birthdays and time zones to create "
            + "countdown clocks for their 21st birthdays. Can You Drink Yet will feature embeddable code for users' own websites and social media platforms</p>";
    }
    return modalBody;
};