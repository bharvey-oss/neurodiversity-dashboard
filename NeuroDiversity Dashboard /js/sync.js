const DashboardSync = {
    showSetupModal: function() {
        alert('Sync setup modal - implement Firebase/Google Sheets connection here');
    },
    
    updateStatus: function(status, text) {
        const statusEl = document.getElementById('syncStatus');
        const textEl = document.getElementById('syncText');
        
        if (statusEl) statusEl.className = 'sync-status ' + status;
        if (textEl) textEl.textContent = text;
    }
};