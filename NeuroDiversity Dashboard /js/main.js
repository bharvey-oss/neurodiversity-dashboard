// Initialize Dashboard on Load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Dashboard initializing...');
    
    // Load sections
    loadAllSections();
    
    // Initialize components
    DashboardProgress.init();
    DashboardCalendar.init();
    DashboardBudget.init();
    DashboardGrants.init();
    
    // Show overview by default
    DashboardNav.showSection('overview');
    
    console.log('Dashboard ready!');
});

function loadAllSections() {
    const container = document.getElementById('content-container');
    if (!container) return;
    
    // Load all section HTML
    container.innerHTML = 
        DashboardSections.overview() +
        DashboardSections.calendar() +
        DashboardSections.timeline() +
        DashboardSections.checklist() +
        DashboardSections.budget() +
        DashboardSections.grants() +
        DashboardSections.nonprofit() +
        DashboardSections.compliance() +
        DashboardSections.documents() +
        DashboardSections.resources();
}