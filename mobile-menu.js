// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Toggle mobile menu
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const navContent = document.getElementById('nav-content');

    if (mobileMenuButton && navContent) {
        mobileMenuButton.addEventListener('click', function() {
            navContent.classList.toggle('hidden');

            // Change icon based on menu state
            const icon = this.querySelector('i');
            if (navContent.classList.contains('hidden')) {
                icon.classList.replace('fa-times', 'fa-bars');
            } else {
                icon.classList.replace('fa-bars', 'fa-times');
            }
        });

        // Close menu when clicking on a link (for mobile)
        document.querySelectorAll('#nav-content a').forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth < 1024) { // lg breakpoint
                    navContent.classList.add('hidden');
                    const icon = mobileMenuButton.querySelector('i');
                    icon.classList.replace('fa-times', 'fa-bars');
                }
            });
        });

        // Close menu when clicking outside (optional)
        document.addEventListener('click', function(event) {
            if (!navContent.contains(event.target) &&
                event.target !== mobileMenuButton &&
                !mobileMenuButton.contains(event.target) {
                if (window.innerWidth < 1024 && !navContent.classList.contains('hidden')) {
                    navContent.classList.add('hidden');
                    const icon = mobileMenuButton.querySelector('i');
                    icon.classList.replace('fa-times', 'fa-bars');
                }
            }
        });
    }
});
