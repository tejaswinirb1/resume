document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    
    // Add click event listeners to all navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Get the page to show
            const pageToShow = this.getAttribute('data-page');
            
            // Hide all pages
            document.querySelectorAll('.page').forEach(page => {
                page.classList.add('hidden');
            });
            
            // Show the selected page
            document.getElementById(`${pageToShow}-page`).classList.remove('hidden');
        });
    });
});