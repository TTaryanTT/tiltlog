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
        // Load navigation bar dynamically
        loadHTML("assets/pages/navigation-bar.html", "navigation-bar-placeholder");
    }
)