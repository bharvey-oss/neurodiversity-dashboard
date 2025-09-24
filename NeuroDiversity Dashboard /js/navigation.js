const DashboardNav = {
    showSection: function(section, element) {
        const sections = document.querySelectorAll('.content-section');
        sections.forEach(s => s.classList.remove('active'));
        
        const selectedSection = document.getElementById(section + '-section');
        if (selectedSection) {
            selectedSection.classList.add('active');
        }
        
        if (element) {
            const navItems = document.querySelectorAll('.nav-item');
            navItems.forEach(item => item.classList.remove('active'));
            element.classList.add('active');
        }
    },
    
    toggleSidebar: function() {
        const sidebar = document.getElementById('sidebar');
        if (sidebar) sidebar.classList.toggle('open');
    },
    
    toggleNotifications: function() {
        const panel = document.getElementById('notificationPanel');
        if (panel) panel.classList.toggle('show');
    }
};