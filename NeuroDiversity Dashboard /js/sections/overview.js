const DashboardSections = window.DashboardSections || {};

DashboardSections.overview = function() {
    return `
        <div class="content-section active" id="overview-section">
            <div class="card">
                <h1 style="font-size: 24px; margin-bottom: 20px;">🎯 Project Dashboard</h1>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-bottom: 20px;">
                    <div style="background: #f7fafc; padding: 15px; border-radius: 10px;">
                        <div style="font-size: 12px; color: #718096;">Project Start</div>
                        <div style="font-size: 24px; font-weight: bold;">Sept 2025</div>
                    </div>
                    <div style="background: #f7fafc; padding: 15px; border-radius: 10px;">
                        <div style="font-size: 12px; color: #718096;">Target Opening</div>
                        <div style="font-size: 24px; font-weight: bold;">Feb 2027</div>
                    </div>
                    <div style="background: #f7fafc; padding: 15px; border-radius: 10px;">
                        <div style="font-size: 12px; color: #718096;">Time Remaining</div>
                        <div style="font-size: 24px; font-weight: bold;">17 Months</div>
                    </div>
                </div>
                
                <div id="overall-percent">0%</div>
                <div id="critical-percent">0%</div>
                <div id="nonprofit-percent">0%</div>
            </div>
        </div>
    `;
};

DashboardSections.calendar = function() {
    return `
        <div class="content-section" id="calendar-section">
            <div class="card">
                <h2>📅 Calendar</h2>
                <div class="calendar-header">
                    <h3 id="currentMonth">Loading...</h3>
                    <div>
                        <button onclick="previousMonth()">Previous</button>
                        <button onclick="currentMonth()">Today</button>
                        <button onclick="nextMonth()">Next</button>
                    </div>
                </div>
                <div id="calendarGrid" style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 1px; background: #e2e8f0; margin-top: 20px;"></div>
            </div>
        </div>
    `;
};

// Add other section functions...
DashboardSections.timeline = function() {
    return `<div class="content-section" id="timeline-section"><div class="card"><h2>Timeline</h2></div></div>`;
};

DashboardSections.checklist = function() {
    return `<div class="content-section" id="checklist-section"><div class="card"><h2>Checklist</h2></div></div>`;
};

DashboardSections.budget = function() {
    return `
        <div class="content-section" id="budget-section">
            <div class="card">
                <h2>💰 Budget Tracker</h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 10px; margin-bottom: 20px;">
                    <div style="background: #f7fafc; padding: 10px; border-radius: 8px;">
                        <div style="font-size: 12px;">Total Budget</div>
                        <div id="totalBudget" style="font-size: 20px; font-weight: bold;">$0</div>
                    </div>
                    <div style="background: #f7fafc; padding: 10px; border-radius: 8px;">
                        <div style="font-size: 12px;">Spent</div>
                        <div id="totalSpent" style="font-size: 20px; font-weight: bold;">$0</div>
                    </div>
                    <div style="background: #f7fafc; padding: 10px; border-radius: 8px;">
                        <div style="font-size: 12px;">Committed</div>
                        <div id="totalCommitted" style="font-size: 20px; font-weight: bold;">$0</div>
                    </div>
                    <div style="background: #f7fafc; padding: 10px; border-radius: 8px;">
                        <div style="font-size: 12px;">Remaining</div>
                        <div id="totalRemaining" style="font-size: 20px; font-weight: bold;">$0</div>
                    </div>
                </div>
                <table style="width: 100%; border-collapse: collapse;">
                    <thead>
                        <tr>
                            <th style="text-align: left; padding: 8px; background: #f7fafc;">Category</th>
                            <th style="text-align: left; padding: 8px; background: #f7fafc;">Description</th>
                            <th style="text-align: left; padding: 8px; background: #f7fafc;">Budgeted</th>
                            <th style="text-align: left; padding: 8px; background: #f7fafc;">Spent</th>
                            <th style="text-align: left; padding: 8px; background: #f7fafc;">Committed</th>
                            <th style="text-align: left; padding: 8px; background: #f7fafc;">Remaining</th>
                            <th style="text-align: left; padding: 8px; background: #f7fafc;">Status</th>
                        </tr>
                    </thead>
                    <tbody id="budgetTableBody">
                        <tr>
                            <td><input type="text" value="Legal" onchange="updateBudget()" style="width: 100%;"></td>
                            <td><input type="text" value="LLC & 501c3" onchange="updateBudget()" style="width: 100%;"></td>
                            <td><input type="number" value="5000" onchange="updateBudget()" style="width: 100%;"></td>
                            <td><input type="number" value="0" onchange="updateBudget()" style="width: 100%;"></td>
                            <td><input type="number" value="0" onchange="updateBudget()" style="width: 100%;"></td>
                            <td>$5,000</td>
                            <td>Planning</td>
                        </tr>
                    </tbody>
                </table>
                <button onclick="addBudgetRow()" style="margin-top: 10px; padding: 8px 15px; background: #667eea; color: white; border: none; border-radius: 6px; cursor: pointer;">+ Add Row</button>
            </div>
        </div>
    `;
};

DashboardSections.grants = function() {
    return `
        <div class="content-section" id="grants-section">
            <div class="card">
                <h2>🎁 Grant Tracker</h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 10px; margin-bottom: 20px;">
                    <div style="background: #f7fafc; padding: 10px; border-radius: 8px;">
                        <div style="font-size: 12px;">Target</div>
                        <div style="font-size: 20px; font-weight: bold;">$250,000</div>
                    </div>
                    <div style="background: #f7fafc; padding: 10px; border-radius: 8px;">
                        <div style="font-size: 12px;">Awarded</div>
                        <div id="grantAwarded" style="font-size: 20px; font-weight: bold;">$0</div>
                    </div>
                    <div style="background: #f7fafc; padding: 10px; border-radius: 8px;">
                        <div style="font-size: 12px;">Pending</div>
                        <div id="grantPending" style="font-size: 20px; font-weight: bold;">$0</div>
                    </div>
                    <div style="background: #f7fafc; padding: 10px; border-radius: 8px;">
                        <div style="font-size: 12px;">Success Rate</div>
                        <div id="grantRate" style="font-size: 20px; font-weight: bold;">0%</div>
                    </div>
                </div>
                <table style="width: 100%; border-collapse: collapse;">
                    <thead>
                        <tr>
                            <th style="text-align: left; padding: 8px; background: #f7fafc;">Grant Name</th>
                            <th style="text-align: left; padding: 8px; background: #f7fafc;">Funder</th>
                            <th style="text-align: left; padding: 8px; background: #f7fafc;">Amount</th>
                            <th style="text-align: left; padding: 8px; background: #f7fafc;">Deadline</th>
                            <th style="text-align: left; padding: 8px; background: #f7fafc;">Status</th>
                            <th style="text-align: left; padding: 8px; background: #f7fafc;">Contact</th>
                            <th style="text-align: left; padding: 8px; background: #f7fafc;">Notes</th>
                        </tr>
                    </thead>
                    <tbody id="grantTableBody">
                        <tr>
                            <td><input type="text" value="First 5 LA" onchange="updateGrants()" style="width: 100%;"></td>
                            <td><input type="text" value="First 5 Los Angeles" onchange="updateGrants()" style="width: 100%;"></td>
                            <td><input type="number" value="150000" onchange="updateGrants()" style="width: 100%;"></td>
                            <td><input type="date" value="2026-01-15" onchange="updateGrants()" style="width: 100%;"></td>
                            <td>
                                <select onchange="updateGrants()" style="width: 100%;">
                                    <option value="researching">Researching</option>
                                    <option value="planning">Planning</option>
                                    <option value="submitted">Submitted</option>
                                    <option value="pending">Pending</option>
                                    <option value="awarded">Awarded</option>
                                    <option value="rejected">Rejected</option>
                                </select>
                            </td>
                            <td><input type="text" value="" onchange="updateGrants()" style="width: 100%;"></td>
                            <td><input type="text" value="" onchange="updateGrants()" style="width: 100%;"></td>
                        </tr>
                    </tbody>
                </table>
                <button onclick="addGrantRow()" style="margin-top: 10px; padding: 8px 15px; background: #667eea; color: white; border: none; border-radius: 6px; cursor: pointer;">+ Add Grant</button>
            </div>
        </div>
    `;
};

DashboardSections.nonprofit = function() {
    return `<div class="content-section" id="nonprofit-section"><div class="card"><h2>501(c)(3) Setup</h2></div></div>`;
};

DashboardSections.compliance = function() {
    return `<div class="content-section" id="compliance-section"><div class="card"><h2>Compliance</h2></div></div>`;
};

DashboardSections.documents = function() {
    return `<div class="content-section" id="documents-section"><div class="card"><h2>Documents</h2></div></div>`;
};

DashboardSections.resources = function() {
    return `<div class="content-section" id="resources-section"><div class="card"><h2>Resources</h2></div></div>`;
};