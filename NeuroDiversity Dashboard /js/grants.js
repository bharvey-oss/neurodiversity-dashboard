const DashboardGrants = {
    init: function() {
        this.update();
    },
    
    update: function() {
        const tbody = document.getElementById('grantTableBody');
        if (!tbody) return;
        
        const rows = tbody.getElementsByTagName('tr');
        let totalAwarded = 0;
        let totalPending = 0;
        let totalApplications = 0;
        let successfulApplications = 0;
        
        for (let row of rows) {
            const inputs = row.getElementsByTagName('input');
            const selects = row.getElementsByTagName('select');
            
            if (inputs.length >= 3 && selects.length > 0) {
                const amount = parseFloat(inputs[2].value) || 0;
                const status = selects[0].value;
                
                totalApplications++;
                
                if (status === 'awarded') {
                    totalAwarded += amount;
                    successfulApplications++;
                } else if (status === 'pending' || status === 'submitted') {
                    totalPending += amount;
                }
            }
        }
        
        const successRate = totalApplications > 0 ? 
            Math.round((successfulApplications / totalApplications) * 100) : 0;
        
        this.updateSummary(totalAwarded, totalPending, successRate);
    },
    
    updateSummary: function(awarded, pending, rate) {
        const els = {
            grantAwarded: document.getElementById('grantAwarded'),
            grantPending: document.getElementById('grantPending'),
            grantRate: document.getElementById('grantRate')
        };
        
        if (els.grantAwarded) els.grantAwarded.textContent = '$' + awarded.toLocaleString();
        if (els.grantPending) els.grantPending.textContent = '$' + pending.toLocaleString();
        if (els.grantRate) els.grantRate.textContent = rate + '%';
    },
    
    addRow: function() {
        const tbody = document.getElementById('grantTableBody');
        if (!tbody) return;
        
        const newRow = tbody.insertRow();
        newRow.innerHTML = `
            <td><input type="text" placeholder="Grant Name" onchange="DashboardGrants.update()"></td>
            <td><input type="text" placeholder="Funder" onchange="DashboardGrants.update()"></td>
            <td><input type="number" placeholder="0" onchange="DashboardGrants.update()"></td>
            <td><input type="date" onchange="DashboardGrants.update()"></td>
            <td>
                <select onchange="DashboardGrants.update()">
                    <option value="researching">Researching</option>
                    <option value="planning">Planning</option>
                    <option value="submitted">Submitted</option>
                    <option value="pending">Pending</option>
                    <option value="awarded">Awarded</option>
                    <option value="rejected">Rejected</option>
                </select>
            </td>
            <td><input type="text" placeholder="Contact" onchange="DashboardGrants.update()"></td>
            <td><input type="text" placeholder="Notes" onchange="DashboardGrants.update()"></td>
        `;
    }
};

// Make functions globally accessible  
window.updateGrants = () => DashboardGrants.update();
window.addGrantRow = () => DashboardGrants.addRow();