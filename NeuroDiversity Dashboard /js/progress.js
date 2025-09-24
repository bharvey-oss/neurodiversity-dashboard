const DashboardProgress = {
    completed: {
        main: 0,
        sub: 0,
        critical: 0,
        nonprofit: 0
    },
    
    init: function() {
        this.update();
    },
    
    update: function() {
        const config = DashboardConfig.TASK_COUNTS;
        const totalTasks = config.totalMain + config.totalSub;
        const completedTasks = this.completed.main + this.completed.sub;
        
        const overallPercent = Math.round((completedTasks / totalTasks) * 100);
        const criticalPercent = Math.round((this.completed.critical / config.critical) * 100);
        const nonprofitPercent = Math.round((this.completed.nonprofit / config.nonprofit) * 100);
        
        this.updateDisplay(overallPercent, criticalPercent, nonprofitPercent);
        this.updateRings(overallPercent, criticalPercent, nonprofitPercent);
    },
    
    updateDisplay: function(overall, critical, nonprofit) {
        const overallEl = document.getElementById('overall-percent');
        const criticalEl = document.getElementById('critical-percent');
        const nonprofitEl = document.getElementById('nonprofit-percent');
        
        if (overallEl) overallEl.textContent = overall + '%';
        if (criticalEl) criticalEl.textContent = critical + '%';
        if (nonprofitEl) nonprofitEl.textContent = nonprofit + '%';
    },
    
    updateRings: function(overall, critical, nonprofit) {
        this.updateRing('overall-progress-ring', overall);
        this.updateRing('critical-progress-ring', critical);
        this.updateRing('nonprofit-progress-ring', nonprofit);
    },
    
    updateRing: function(id, percent) {
        const ring = document.getElementById(id);
        if (ring) {
            const circumference = 2 * Math.PI * 60;
            const offset = circumference - (percent / 100 * circumference);
            ring.style.strokeDashoffset = offset;
        }
    }
};