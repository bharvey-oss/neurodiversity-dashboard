const DashboardExport = {
    exportToCSV: function() {
        let csv = 'Category,Type,Description,Amount\n';
        
        // Add budget data
        const budgetRows = document.querySelectorAll('#budgetTableBody tr');
        budgetRows.forEach(row => {
            const inputs = row.getElementsByTagName('input');
            if (inputs.length >= 3) {
                csv += `Budget,${inputs[0].value},${inputs[1].value},${inputs[2].value}\n`;
            }
        });
        
        // Add grant data
        const grantRows = document.querySelectorAll('#grantTableBody tr');
        grantRows.forEach(row => {
            const inputs = row.getElementsByTagName('input');
            if (inputs.length >= 3) {
                csv += `Grant,${inputs[0].value},${inputs[1].value},${inputs[2].value}\n`;
            }
        });
        
        // Download
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'dashboard-export.csv';
        a.click();
    },
    
    exportToPDF: function() {
        alert('PDF export would generate a report. For full functionality, integrate with a PDF library like jsPDF.');
    }
};