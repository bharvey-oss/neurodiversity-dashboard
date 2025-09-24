const DashboardCalendar = {
    currentDate: new Date(),
    displayMonth: new Date(),
    
    init: function() {
        this.displayMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1);
        this.generate();
    },
    
    generate: function() {
        const grid = document.getElementById('calendarGrid');
        if (!grid) return;
        
        grid.innerHTML = '';
        
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                          'July', 'August', 'September', 'October', 'November', 'December'];
        const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        
        const currentMonthEl = document.getElementById('currentMonth');
        if (currentMonthEl) {
            currentMonthEl.textContent = monthNames[this.displayMonth.getMonth()] + ' ' + this.displayMonth.getFullYear();
        }
        
        dayNames.forEach(day => {
            const dayHeader = document.createElement('div');
            dayHeader.className = 'calendar-day-header';
            dayHeader.textContent = day;
            grid.appendChild(dayHeader);
        });
        
        const firstDay = new Date(this.displayMonth.getFullYear(), this.displayMonth.getMonth(), 1).getDay();
        const daysInMonth = new Date(this.displayMonth.getFullYear(), this.displayMonth.getMonth() + 1, 0).getDate();
        
        for (let i = 0; i < firstDay; i++) {
            const emptyDay = document.createElement('div');
            emptyDay.className = 'calendar-day other-month';
            grid.appendChild(emptyDay);
        }
        
        for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = document.createElement('div');
            dayElement.className = 'calendar-day';
            
            if (this.isToday(day)) {
                dayElement.classList.add('today');
            }
            
            const dayNumber = document.createElement('div');
            dayNumber.className = 'calendar-day-number';
            dayNumber.textContent = day;
            dayElement.appendChild(dayNumber);
            
            grid.appendChild(dayElement);
        }
    },
    
    isToday: function(day) {
        return this.displayMonth.getFullYear() === this.currentDate.getFullYear() &&
               this.displayMonth.getMonth() === this.currentDate.getMonth() &&
               day === this.currentDate.getDate();
    },
    
    previousMonth: function() {
        this.displayMonth.setMonth(this.displayMonth.getMonth() - 1);
        this.generate();
    },
    
    nextMonth: function() {
        this.displayMonth.setMonth(this.displayMonth.getMonth() + 1);
        this.generate();
    },
    
    currentMonth: function() {
        this.displayMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1);
        this.generate();
    }
};

// Make functions globally accessible
window.previousMonth = () => DashboardCalendar.previousMonth();
window.nextMonth = () => DashboardCalendar.nextMonth();
window.currentMonth = () => DashboardCalendar.currentMonth();