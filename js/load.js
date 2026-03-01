// Function to load divisions into placeholders dynamically.
function loadHTML(file, elementId, callback)
{
    fetch(file)
        .then(function(response)
        {
            return response.text();
        })
        .then(function(html)
        {
            console.log(`Successfully loaded ${elementId} from ${file}`);
            document.getElementById(elementId).innerHTML=html;
            if(callback)
                callback();
        })
        .catch(function(error)
        {
            console.error(`Error loading HTML file: ${error}`);
        });
}
// Loading the placeholders when DOM Content is loaded.
document.addEventListener("DOMContentLoaded",
    function()
    {
        // Load header dynamically
        loadHTML("assets/pages/header.html", "header-placeholder");
        // Load about us dynamically
        loadHTML("assets/pages/aboutus.html", "about-us-placeholder");
        // Load services dynamically
        loadHTML("assets/pages/services.html", "services-placeholder");
        // Load help dynamically
        loadHTML("assets/pages/help.html", "help-placeholder");
        // Load footer dynamically
        loadHTML("assets/pages/footer.html", "footer-placeholder");
    }
);