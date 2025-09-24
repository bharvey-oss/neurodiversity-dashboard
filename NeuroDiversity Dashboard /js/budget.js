const DashboardBudget = {
    init: function() {
        this.update();
    },
    
    update: function() {
        const tbody = document.getElementById('budgetTableBody');
        if (!tbody) return;
        
        const rows = tbody.getElementsByTagName('tr');
        let totalBudget = 0;
        let totalSpent = 0;
        let totalCommitted = 0;
        
        for (let row of rows) {
            const inputs = row.getElementsByTagName('input');
            if (inputs.length >= 3) {
                const budgeted = parseFloat(inputs[2].value) || 0;
                const spent = parseFloat(inputs[3].value) || 0;
                const committed = parseFloat(inputs[4].value) || 0;
                const remaining = budgeted - spent - committed;
                
                const remainingCell = row.cells[5];
                if (remainingCell) {
                    remainingCell.textContent = '$' + remaining.toLocaleString();
                }
                
                totalBudget += budgeted;
                totalSpent += spent;
                totalCommitted += committed;
            }
        }
        
        this.updateSummary(totalBudget, totalSpent, totalCommitted);
    },
    
    updateSummary: function(budget, spent, committed) {
        const remaining = budget - spent - committed;
        
        const els = {
            totalBudget: document.getElementById('totalBudget'),
            totalSpent: document.getElementById('totalSpent'),
            totalCommitted: document.getElementById('totalCommitted'),
            totalRemaining: document.getElementById('totalRemaining')
        };
        
        if (els.totalBudget) els.totalBudget.textContent = '$' + budget.toLocaleString();
        if (els.totalSpent) els.totalSpent.textContent = '$' + spent.toLocaleString();
        if (els.totalCommitted) els.totalCommitted.textContent = '$' + committed.toLocaleString();
        if (els.totalRemaining) els.totalRemaining.textContent = '$' + remaining.toLocaleString();
    },
    
    addRow: function() {
        const tbody = document.getElementById('budgetTableBody');
        if (!tbody) return;
        
        const newRow = tbody.insertRow();
        newRow.innerHTML = `
            <td><input type="text" placeholder="Category" onchange="DashboardBudget.update()"></td>
            <td><input type="text" placeholder="Description" onchange="DashboardBudget.update()"></td>
            <td><input type="number" placeholder="0" onchange="DashboardBudget.update()"></td>
            <td><input type="number" placeholder="0" onchange="DashboardBudget.update()"></td>
            <td><input type="number" placeholder="0" onchange="DashboardBudget.update()"></td>
            <td>$0</td>
            <td><span class="grant-status planning">Planning</span></td>
        `;
    }
};

// Make function globally accessible
window.updateBudget = () => DashboardBudget.update();
window.addBudgetRow = () => DashboardBudget.addRow();