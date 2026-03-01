// References
const menuButton=document.querySelector(".menu-button"); // Menu Button Icon
const sidebar=document.querySelector(".sidebar"); // Sidebar Element
const closeButton=document.querySelector(".close-button"); // Close Button Icon
const sidebarOverlay=document.querySelector(".sidebar-overlay"); // Overlay Element
// Event listener to open the sidebar when the menu button is clicked.
menuButton.addEventListener("click", function()
{
    sidebar.classList.add("active");
    sidebarOverlay.classList.add("active");
});
// Event listener to close the sidebar when the close button is clicked.
closeButton.addEventListener("click", function()
{
    sidebar.classList.remove("active");
    sidebarOverlay.classList.remove("active");
});
// Event listener to close the sidebar when the overlay is clicked.
sidebarOverlay.addEventListener("click", function()
{
    sidebar.classList.remove("active");
    sidebarOverlay.classList.remove("active");
});