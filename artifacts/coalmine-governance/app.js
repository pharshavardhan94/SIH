/* Coalmine AI Governance — SIH26024
   A self-contained, intentionally simulated frontend prototype. */
const mines = [
  { id: "CM-OD-042", name: "Talcher North Block", location: "Angul, Odisha", state: "Odisha", operator: "Eastern Coalfields", score: 91, risk: "Low", violations: 2, inspection: "18 Sep 2026", status: "Compliant" },
  { id: "CM-JH-012", name: "Dhanbad Central Mine", location: "Dhanbad, Jharkhand", state: "Jharkhand", operator: "Bharat Coking Coal", score: 68, risk: "High", violations: 8, inspection: "11 Sep 2026", status: "Action required" },
  { id: "CM-CT-027", name: "Korba East Opencast", location: "Korba, Chhattisgarh", state: "Chhattisgarh", operator: "South Eastern Coalfields", score: 74, risk: "Medium", violations: 5, inspection: "15 Sep 2026", status: "Monitoring" },
  { id: "CM-TS-009", name: "Singareni Kothagudem", location: "Bhadradri, Telangana", state: "Telangana", operator: "Singareni Collieries", score: 88, risk: "Low", violations: 3, inspection: "09 Sep 2026", status: "Compliant" },
  { id: "CM-WB-031", name: "Raniganj South", location: "Paschim Bardhaman, WB", state: "West Bengal", operator: "Eastern Coalfields", score: 61, risk: "Critical", violations: 11, inspection: "05 Sep 2026", status: "Escalated" },
  { id: "CM-MP-018", name: "Singrauli Sector 4", location: "Singrauli, MP", state: "Madhya Pradesh", operator: "Northern Coalfields", score: 79, risk: "Medium", violations: 4, inspection: "12 Sep 2026", status: "Monitoring" },
  { id: "CM-OD-016", name: "Ib Valley Cluster", location: "Jharsuguda, Odisha", state: "Odisha", operator: "Mahanadi Coalfields", score: 84, risk: "Medium", violations: 3, inspection: "02 Sep 2026", status: "Compliant" },
  { id: "CM-JH-034", name: "Bokaro Colliery", location: "Bokaro, Jharkhand", state: "Jharkhand", operator: "Central Coalfields", score: 86, risk: "Low", violations: 2, inspection: "30 Aug 2026", status: "Compliant" }
];
const violations = [
  { id: "VIO-2026-184", mine: "Dhanbad Central Mine", mineId: "CM-JH-012", category: "Safety", severity: "Critical", date: "11 Sep 2026", desc: "Underground ventilation readings below prescribed threshold", status: "Open", due: "17 Sep 2026" },
  { id: "VIO-2026-181", mine: "Raniganj South", mineId: "CM-WB-031", category: "Equipment", severity: "High", date: "05 Sep 2026", desc: "Emergency brake system requires immediate replacement", status: "Overdue", due: "12 Sep 2026" },
  { id: "VIO-2026-179", mine: "Korba East Opencast", mineId: "CM-CT-027", category: "Environment", severity: "Medium", date: "15 Sep 2026", desc: "Water discharge log missing for August reporting period", status: "Open", due: "22 Sep 2026" },
  { id: "VIO-2026-176", mine: "Dhanbad Central Mine", mineId: "CM-JH-012", category: "Labour", severity: "High", date: "11 Sep 2026", desc: "PPE issuance record not reconciled with contractor roster", status: "In progress", due: "20 Sep 2026" },
  { id: "VIO-2026-170", mine: "Singrauli Sector 4", mineId: "CM-MP-018", category: "Documentation", severity: "Low", date: "12 Sep 2026", desc: "Shift supervisor logbook contains incomplete entries", status: "Resolved", due: "14 Sep 2026" },
  { id: "VIO-2026-162", mine: "Talcher North Block", mineId: "CM-OD-042", category: "Safety", severity: "Medium", date: "18 Sep 2026", desc: "Two haul-road warning signs require replacement", status: "Open", due: "25 Sep 2026" }
];
const actions = [
  { id: "ACT-0924", mine: "Dhanbad Central Mine", issue: "Restore underground ventilation to statutory levels", priority: "Critical", officer: "R. K. Menon", due: "17 Sep 2026", progress: 72, status: "Verification" },
  { id: "ACT-0921", mine: "Raniganj South", issue: "Replace emergency brake assembly on HEMM-04", priority: "High", officer: "Meera Nair", due: "12 Sep 2026", progress: 48, status: "Overdue" },
  { id: "ACT-0918", mine: "Korba East Opencast", issue: "Submit missing water discharge documentation", priority: "Medium", officer: "A. K. Singh", due: "22 Sep 2026", progress: 35, status: "In progress" },
  { id: "ACT-0912", mine: "Singrauli Sector 4", issue: "Complete supervisor logbook reconciliation", priority: "Low", officer: "Vikram Rao", due: "14 Sep 2026", progress: 100, status: "Resolved" },
  { id: "ACT-0908", mine: "Dhanbad Central Mine", issue: "Reconcile contractor PPE issuance records", priority: "High", officer: "R. K. Menon", due: "20 Sep 2026", progress: 61, status: "In progress" },
  { id: "ACT-0901", mine: "Talcher North Block", issue: "Replace haul-road warning signage", priority: "Medium", officer: "S. Pradhan", due: "25 Sep 2026", progress: 20, status: "Assigned" }
];
const inspections = [
  { id: "INS-406", mine: "Dhanbad Central Mine", date: "18 Sep 2026", inspector: "R. K. Menon", type: "Focused safety audit", status: "Scheduled" },
  { id: "INS-407", mine: "Talcher North Block", date: "19 Sep 2026", inspector: "Meera Nair", type: "Routine compliance", status: "Scheduled" },
  { id: "INS-408", mine: "Korba East Opencast", date: "21 Sep 2026", inspector: "A. K. Singh", type: "Environmental review", status: "Scheduled" },
  { id: "INS-397", mine: "Raniganj South", date: "05 Sep 2026", inspector: "P. Dutta", type: "Escalated inspection", status: "Completed" },
  { id: "INS-394", mine: "Singrauli Sector 4", date: "12 Sep 2026", inspector: "Vikram Rao", type: "Routine compliance", status: "Completed" }
];
const regions = ["Telangana", "Odisha", "Jharkhand", "Chhattisgarh", "West Bengal", "Madhya Pradesh"];
let currentPage = "dashboard";

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const cap = s => s.charAt(0).toUpperCase() + s.slice(1);
const riskTag = risk => `<span class="tag tag-${risk.toLowerCase()}">${risk}</span>`;
const statusTag = status => {
  const key = status.toLowerCase().replaceAll(" ", "-");
  const style = { "in-progress":"progress", "action-required":"open", "scheduled":"progress", "completed":"resolved", "ready":"resolved", "assigned":"open", "compliant":"resolved" }[key] || key;
  return `<span class="tag tag-${style}">${status}</span>`;
};

function toast(message, icon = "✓") {
  const el = document.createElement("div");
  el.className = "toast";
  el.innerHTML = `<span>${icon}</span><div>${message}</div>`;
  $("#toastRegion").appendChild(el);
  setTimeout(() => { el.classList.add("fade"); setTimeout(() => el.remove(), 300); }, 3400);
}
function pageHeading(kicker, title, subtitle, actions = "") {
  return `<div class="page-heading"><div><div class="section-kicker">${kicker}</div><h1>${title}</h1><p>${subtitle}</p></div><div class="page-actions">${actions}</div></div>`;
}
function panelHeader(title, subtitle = "", action = "") {
  return `<div class="panel-header"><div><h3>${title}</h3>${subtitle ? `<p>${subtitle}</p>` : ""}</div>${action}</div>`;
}
function statRow(label, value, color = "var(--cyan)") {
  return `<div class="progress-row"><label>${label}</label><div class="progress-bar"><span style="width:${value}%;background:${color}"></span></div><div class="progress-value">${value}%</div></div>`;
}

function dashboardPage() {
  const highRisk = mines.filter(m => m.risk === "High" || m.risk === "Critical");
  return `${pageHeading("OVERVIEW / NATIONAL NETWORK", "Coal Mine Compliance Command Center", "A live operational view of safety, compliance and governance across monitored coal mines.", `<button class="btn btn-ghost btn-small" id="refreshBtn">↻ Refresh data</button><button class="btn btn-primary btn-small" data-page-action="reports">Generate report ↗</button>`)}
    <div class="kpi-grid">
      ${[
        ["Mines monitored", "42", "↗ 3 this quarter", "trend-up", "⌂"],
        ["Overall compliance", "87%", "↗ 4.2% vs last month", "trend-up", "✓"],
        ["High-risk mines", "05", "↓ 2 since last review", "trend-up", "△"],
        ["Open violations", "18", "↗ 3 this week", "trend-down", "⚠"],
        ["Pending actions", "12", "4 due this week", "trend-down", "◷"]
      ].map(k => `<div class="kpi-card"><div class="kpi-top"><span>${k[0]}</span><b class="kpi-icon">${k[4]}</b></div><strong class="metric-value">${k[1]}</strong><div class="metric-foot ${k[3]}"><span>${k[2]}</span></div></div>`).join("")}
    </div>
    <div class="dashboard-grid">
      <section class="panel">${panelHeader("Compliance performance", "Monthly compliance score across the network", `<div class="legend"><span>2026</span><span class="secondary">2025</span></div>`)}<div class="chart-wrap"><canvas id="complianceChart"></canvas></div></section>
      <section class="panel">${panelHeader("Risk distribution", "42 monitored mines")}<div class="donut-layout"><div class="donut"><div class="donut-label"><strong>42</strong><small>MINES</small></div></div><div class="risk-legend"><span><i style="background:var(--red)"></i>Critical <b>2</b></span><span><i style="background:var(--orange)"></i>High <b>3</b></span><span><i style="background:var(--amber)"></i>Medium <b>14</b></span><span><i style="background:var(--green)"></i>Low <b>23</b></span></div></div></section>
      <section class="panel table-panel full-span">${panelHeader("High-risk mines", "Prioritised by the prototype AI risk engine", `<button class="panel-link" data-page-action="mines">View all mines →</button>`)}<div class="table-scroll"><table class="data-table"><thead><tr><th>Mine</th><th>Region / operator</th><th>Score</th><th>Risk level</th><th>Open violations</th><th>Next inspection</th><th></th></tr></thead><tbody>${highRisk.concat(mines.filter(m=>m.risk==="Medium").slice(0,1)).map(m => `<tr><td><span class="mine-name">${m.name}</span><span class="subtext">${m.id}</span></td><td>${m.location}<span class="subtext">${m.operator}</span></td><td><span class="score ${m.score > 80 ? "good" : "warn"}">${m.score}/100</span></td><td>${riskTag(m.risk)}</td><td>${m.violations}</td><td>${m.inspection}</td><td><button class="link-btn view-mine" data-id="${m.id}">Details →</button></td></tr>`).join("")}</tbody></table></div></section>
    </div>
    <div class="dashboard-lower"><section class="panel">${panelHeader("Recent violations", "Latest signals requiring attention", `<button class="panel-link" data-page-action="violations">View all →</button>`)}<div class="activity-list">${violations.slice(0,4).map((v,i)=>`<div class="activity"><div class="activity-icon ${v.severity==="Low"?"green":i===2?"blue":""}">${v.severity==="Low"?"✓":"!"}</div><div><strong>${v.desc}</strong><p>${v.mine} · ${statusTag(v.status)}</p></div><time>${v.date.replace(" 2026","")}</time></div>`).join("")}</div></section>
    <section class="panel">${panelHeader("Corrective-action health", "12 actions currently in workflow")}<div class="mini-progress">${statRow("Resolved", 42, "var(--green)")}${statRow("Verification", 25, "var(--blue)")}${statRow("In progress", 23, "var(--amber)")}${statRow("Assigned", 10, "var(--orange)")}</div><div class="disclaimer">DEMO / PROTOTYPE DATA · All mine names, statistics and compliance records shown are fictional demonstration data.</div></section></div>
    <section class="architecture-panel"><div class="architecture-copy"><div class="section-kicker">SIH26024 / PLATFORM MODEL</div><h2>From field signal to governance insight.</h2><p>The prototype connects the operational loop for mine authorities: monitor what is happening, identify what needs attention, track the response, and report with confidence.</p></div><div class="product-flow">${["Monitor","Identify","Track","Analyze","Report"].map((x,i)=>`<div class="flow-step"><b>0${i+1}</b><span>${x}</span></div>`).join("")}</div><div class="architecture-stack"><div class="arch-node"><small>USERS</small><strong>Authorities · Inspectors · Administrators</strong></div><i>↓</i><div class="arch-node"><small>WEB DASHBOARD</small><strong>Compliance workspace &amp; workflow controls</strong></div><i>↓</i><div class="arch-node arch-highlight"><small>BACKEND / APIs</small><strong>Database + AI/ML model + document engine</strong></div><i>↓</i><div class="arch-node"><small>OUTPUT</small><strong>Risk analysis · Corrective actions · Governance insights</strong></div></div></section>
    <section class="panel ai-engine" style="margin-top:17px">${aiEngineMarkup()}</section>`;
}
function aiEngineMarkup() {
  return `${panelHeader(`<div class="ai-title"><span class="ai-spark">✦</span> AI Risk Engine <span class="ai-badge">SIMULATED</span></div>`, "Explainable risk prioritisation for faster intervention", `<button class="panel-link" id="runRiskBtn">Run analysis ↗</button>`)}<div class="ai-body"><div class="risk-score-block"><div class="risk-circle"><div><strong>82</strong><small>/ 100</small></div></div><div class="risk-score-copy"><strong>HIGH RISK</strong><small>Mine #12 · Dhanbad Central</small><br /><button class="link-btn view-mine" data-id="CM-JH-012">Open mine profile →</button></div></div><div><div class="factor-list-inline"><div class="factor"><span>+</span><div>6 unresolved safety violations</div></div><div class="factor"><span>+</span><div>2 overdue corrective actions</div></div><div class="factor"><span>+</span><div>Declining inspection performance</div></div><div class="factor"><span>+</span><div>Repeated equipment issues</div></div></div><div class="ai-note">Prototype AI Risk Engine — simulated for demonstration. Risk scores are illustrative and not generated by a trained production model.</div></div></div>`;
}

function minesPage() {
  return `${pageHeading("OPERATIONS / ASSET REGISTER", "Mine management", "Search and prioritise the national mine register.", `<button class="btn btn-primary btn-small" id="exportMines">Export register ↓</button>`)}
    <div class="control-bar"><div class="search-box"><span>⌕</span><input class="search-control" id="mineSearch" placeholder="Search by mine name, ID or operator..." /></div><div class="select-arrow"><select class="filter-control" id="riskFilter"><option value="">All risk levels</option><option>Critical</option><option>High</option><option>Medium</option><option>Low</option></select></div><div class="select-arrow"><select class="filter-control" id="stateFilter"><option value="">All regions</option>${regions.map(r=>`<option>${r}</option>`).join("")}</select></div></div>
    <section class="panel table-panel"><div class="table-scroll"><table class="data-table" id="minesTable"><thead><tr><th>Mine ID</th><th>Mine name / location</th><th>Operator</th><th>Compliance</th><th>Risk</th><th>Violations</th><th>Last inspection</th><th>Status</th><th></th></tr></thead><tbody>${mineRows(mines)}</tbody></table></div></section><div class="disclaimer">DEMO / PROTOTYPE DATA · Showing 8 of 42 monitored mines in this prototype register.</div>`;
}
function mineRows(list) {
  if (!list.length) return `<tr><td colspan="9" style="text-align:center;padding:35px;color:var(--muted)">No mines match those filters.</td></tr>`;
  return list.map(m=>`<tr><td>${m.id}</td><td><span class="mine-name">${m.name}</span><span class="subtext">${m.location}</span></td><td>${m.operator}</td><td><span class="score ${m.score>80?"good":"warn"}">${m.score}%</span></td><td>${riskTag(m.risk)}</td><td>${m.violations}</td><td>${m.inspection}</td><td>${statusTag(m.status)}</td><td><button class="link-btn view-mine" data-id="${m.id}">View →</button></td></tr>`).join("");
}
function violationsPage() {
  return `${pageHeading("COMPLIANCE / ISSUE REGISTER", "Violation management", "Review, assign and resolve compliance exceptions across the network.", `<button class="btn btn-primary btn-small" id="newViolation">+ Log violation</button>`)}
  <div class="tabs" id="violationTabs">${["All","Critical","High","Medium","Low","Open","Resolved","Overdue"].map((t,i)=>`<button class="tab ${i===0?"active":""}" data-filter="${t}">${t}</button>`).join("")}</div>
  <section class="panel table-panel"><div class="table-scroll"><table class="data-table" id="violationsTable"><thead><tr><th>Violation ID</th><th>Mine</th><th>Category</th><th>Severity</th><th>Date</th><th>Description</th><th>Status</th><th>Due date</th><th>Action</th></tr></thead><tbody>${violationRows(violations)}</tbody></table></div></section>`;
}
function violationRows(list) { return list.map(v=>`<tr><td>${v.id}</td><td><span class="mine-name">${v.mine}</span><span class="subtext">${v.mineId}</span></td><td>${v.category}</td><td>${riskTag(v.severity)}</td><td>${v.date}</td><td>${v.desc}</td><td>${statusTag(v.status)}</td><td>${v.due}</td><td><button class="link-btn action-violation" data-id="${v.id}">Manage →</button></td></tr>`).join("") || `<tr><td colspan="9" style="text-align:center;padding:35px;color:var(--muted)">No violations match this filter.</td></tr>`; }
function actionsPage() {
  return `${pageHeading("COMPLIANCE / CLOSURE LOOP", "Corrective-action center", "Move every finding from detection to verified resolution.", `<button class="btn btn-primary btn-small" id="assignAction">+ Assign action</button>`)}
  <div class="workflow">${["Violation detected","Action assigned","In progress","Verification","Resolved"].map((x,i)=>`<div class="workflow-step ${i<2?"done":""}"><b>${i<4?"✓":i+1}</b>${x}</div>`).join("")}</div><div class="action-grid" id="actionGrid">${actionCards(actions)}</div>`;
}
function actionCards(list) { return list.map(a=>`<article class="action-card"><div class="action-head"><span class="action-id">${a.id}</span>${statusTag(a.status)}</div><h3>${a.issue}</h3><p>${a.mine}</p><div class="action-meta"><div><small>Assigned officer</small><strong>${a.officer}</strong></div><div><small>Due date</small><strong>${a.due}</strong></div></div><div class="action-progress">${statRow("Progress",a.progress,a.status==="Resolved"?"var(--green)":a.status==="Overdue"?"var(--red)":"var(--cyan)")}</div><button class="btn btn-ghost btn-small update-action" data-id="${a.id}" style="width:100%;margin-top:9px">${a.status==="Resolved"?"View closure":"Update status →"}</button></article>`).join(""); }
function inspectionsPage() {
  return `${pageHeading("OPERATIONS / FIELD WORK", "Inspection management", "Plan upcoming audits and review field activity.", `<button class="btn btn-primary btn-small" id="scheduleInspection">+ Schedule inspection</button>`)}
  <div class="insights"><div class="insight"><span class="insight-icon">◫</span><small>UPCOMING THIS WEEK</small><strong>08</strong><p>Inspections scheduled across 6 regions</p></div><div class="insight"><span class="insight-icon">✓</span><small>COMPLETED THIS MONTH</small><strong>26</strong><p>92% submitted within SLA</p></div><div class="insight"><span class="insight-icon">◷</span><small>AVG. DURATION</small><strong>2.4d</strong><p>From opening to report submitted</p></div><div class="insight"><span class="insight-icon">△</span><small>ESCALATED</small><strong style="color:var(--orange)">03</strong><p>Require central oversight</p></div></div>
  <section class="panel table-panel">${panelHeader("Inspection schedule", "Upcoming and recently completed field inspections")}<div class="table-scroll"><table class="data-table"><thead><tr><th>Inspection ID</th><th>Mine</th><th>Date</th><th>Inspector</th><th>Type</th><th>Status</th><th></th></tr></thead><tbody>${inspections.map(i=>`<tr><td>${i.id}</td><td><span class="mine-name">${i.mine}</span></td><td>${i.date}</td><td>${i.inspector}</td><td>${i.type}</td><td>${statusTag(i.status)}</td><td><button class="link-btn inspect-btn" data-id="${i.id}">Open record →</button></td></tr>`).join("")}</tbody></table></div></section>`;
}
function riskMapPage() {
  const markerData = [{name:"Dhanbad Central",state:"Jharkhand",risk:"critical",x:51,y:33,score:68},{name:"Raniganj South",state:"West Bengal",risk:"critical",x:65,y:28,score:61},{name:"Talcher North",state:"Odisha",risk:"low",x:59,y:46,score:91},{name:"Korba East",state:"Chhattisgarh",risk:"high",x:42,y:53,score:74},{name:"Singrauli Sector 4",state:"Madhya Pradesh",risk:"medium",x:28,y:38,score:79},{name:"Singareni Kothagudem",state:"Telangana",risk:"low",x:45,y:70,score:88}];
  return `${pageHeading("INTELLIGENCE / GEOSPATIAL VIEW", "Compliance risk map", "Regional concentration of risk across the monitored coal belt.", `<div class="select-arrow"><select class="filter-control"><option>All regions</option>${regions.map(r=>`<option>${r}</option>`).join("")}</select></div>`)}
  <div class="map-layout"><section class="panel map-panel">${panelHeader("National risk landscape", "Click a marker to inspect a mine")}${`<div class="india-map"><div class="map-shape"></div>${markerData.map(m=>`<button class="map-marker marker-${m.risk}" style="left:${m.x}%;top:${m.y}%" data-name="${m.name}" data-state="${m.state}" data-risk="${m.risk}" data-score="${m.score}" aria-label="${m.name}"></button>`).join("")}<span class="map-label" style="left:49%;top:27%">JHARKHAND</span><span class="map-label" style="left:57%;top:42%">ODISHA</span><span class="map-label" style="left:35%;top:50%">CHHATTISGARH</span><span class="map-label" style="left:40%;top:68%">TELANGANA</span><div class="map-legend"><span>Low</span><span class="m">Medium</span><span class="h">High</span><span class="c">Critical</span></div></div>`}</section><section class="panel">${panelHeader("Regional summary", "Mines requiring active attention")}<div class="region-list">${regions.map((r,i)=>`<div class="region-row"><span>${r}</span><i class="region-status" style="background:${i===2||i===4?"var(--red)":i===1||i===3?"var(--orange)":"var(--green)"}"></i><b>${[4,8,11,7,6,6][i]} mines</b></div>`).join("")}</div><div class="disclaimer">Markers and regional counts are representative prototype data.</div></section></div>`;
}
function analyticsPage() {
  return `${pageHeading("INTELLIGENCE / GOVERNANCE SIGNALS", "Governance analytics", "Turn compliance records into decisions for regional and central authorities.", `<button class="btn btn-ghost btn-small" id="downloadAnalytics">Download snapshot ↓</button>`)}
  <div class="insights"><div class="insight"><span class="insight-icon">△</span><small>MOST COMMON VIOLATION</small><strong>Safety</strong><p>32% of all recorded findings</p></div><div class="insight"><span class="insight-icon">◷</span><small>OVERDUE ACTIONS</small><strong style="color:var(--orange)">04</strong><p>2 fewer than previous month</p></div><div class="insight"><span class="insight-icon">↗</span><small>AVG. RESOLUTION TIME</small><strong>8.6d</strong><p>Down 1.4 days quarter-on-quarter</p></div><div class="insight"><span class="insight-icon">✓</span><small>COMPLIANCE TREND</small><strong style="color:var(--green)">+4.2%</strong><p>Network score improving</p></div></div>
  <div class="analytics-grid"><section class="panel">${panelHeader("Violations by category", "Current financial year")}${barChart([["Safety",32],["Equip.",24],["Env.",19],["Labour",14],["Docs",11]])}</section><section class="panel">${panelHeader("Resolution performance", "Average days to close a violation")}<div class="chart-wrap"><canvas id="resolutionChart"></canvas></div></section><section class="panel wide">${panelHeader("Compliance by region", "Current network score vs target")}${regionBars()}</section></div>`;
}
function barChart(data) { return `<div class="bar-chart">${data.map(d=>`<div class="bar-item"><b>${d[1]}%</b><div class="bar" style="height:${d[1]*2.2}px"></div><span>${d[0]}</span></div>`).join("")}</div>`; }
function regionBars() { return `<div class="region-bars">${[["Odisha",91,85],["Telangana",88,85],["Madhya Pradesh",79,85],["Chhattisgarh",74,85],["Jharkhand",68,85],["West Bengal",61,85]].map(r=>`<div class="progress-row"><label style="width:100px">${r[0]}</label><div class="progress-bar"><span style="width:${r[1]}%;background:${r[1]>=85?"var(--green)":r[1]>=70?"var(--amber)":"var(--red)"}"></span></div><div class="progress-value">${r[1]}%</div></div>`).join("")}</div>`; }
function reportsPage() {
  const reports = [["Compliance report","Network-wide compliance score and category breakdown.","▤"],["Inspection report","Field visit status, inspector activity and findings.","◫"],["Risk summary","AI-prioritised risk profile for all monitored mines.","✦"],["Governance report","Executive view of actions, trends and regional signals.","◒"]];
  return `${pageHeading("OUTPUTS / OFFICIAL RECORDS", "Reports", "Generate presentation-ready governance summaries for review.", `<span class="muted" style="font-size:10px">Reporting period: <b style="color:var(--text)">Q3 FY 2026</b></span>`)}<div class="report-grid">${reports.map(r=>`<div class="report-card"><div class="report-icon">${r[2]}</div><div><h3>${r[0]}</h3><p>${r[1]}</p></div><button class="btn btn-ghost btn-small generate-report" data-report="${r[0]}">Generate ↗</button></div>`).join("")}</div><section class="panel" style="margin-top:17px">${panelHeader("Recent generated reports", "Available for download or sharing")}<div class="table-scroll"><table class="data-table"><thead><tr><th>Report</th><th>Generated by</th><th>Date</th><th>Format</th><th>Status</th><th></th></tr></thead><tbody><tr><td>Monthly compliance pulse — August</td><td>Arjun Verma</td><td>01 Sep 2026</td><td>PDF</td><td>${statusTag("Ready")}</td><td><button class="link-btn download-report">Download ↓</button></td></tr><tr><td>Regional risk review — Q2</td><td>Priya Menon</td><td>30 Jun 2026</td><td>PDF</td><td>${statusTag("Ready")}</td><td><button class="link-btn download-report">Download ↓</button></td></tr></tbody></table></div></section>`;
}

function renderPage(page = currentPage) {
  currentPage = page;
  const pages = { dashboard: dashboardPage, mines: minesPage, violations: violationsPage, actions: actionsPage, inspections: inspectionsPage, "risk-map": riskMapPage, analytics: analyticsPage, reports: reportsPage };
  $("#pageContent").innerHTML = pages[page]();
  $$(".nav-item").forEach(n => n.classList.toggle("active", n.dataset.page === page));
  $("#breadcrumbCurrent").textContent = ({ dashboard:"Overview", mines:"Mine management", violations:"Violations", actions:"Corrective actions", inspections:"Inspections", "risk-map":"Risk map", analytics:"Analytics", reports:"Reports" })[page];
  bindPageEvents();
  if (page === "dashboard") drawComplianceChart();
  if (page === "analytics") drawResolutionChart();
}

function drawLineChart(canvas, values, secondValues = null) {
  if (!canvas) return;
  const rect = canvas.getBoundingClientRect(), dpr = window.devicePixelRatio || 1;
  canvas.width = rect.width * dpr; canvas.height = rect.height * dpr;
  const ctx = canvas.getContext("2d"); ctx.scale(dpr,dpr); const w=rect.width,h=rect.height,pad=30;
  ctx.strokeStyle="rgba(151,180,202,.1)"; ctx.lineWidth=1;
  for(let i=0;i<5;i++){const y=pad+i*(h-pad*1.7)/4;ctx.beginPath();ctx.moveTo(pad,y);ctx.lineTo(w-8,y);ctx.stroke();}
  const draw=(vals,color,fill)=>{ const max=100,min=50, step=(w-pad-10)/(vals.length-1); const pts=vals.map((v,i)=>[pad+i*step,h-pad-9-((v-min)/(max-min))*(h-pad*1.8)]); ctx.beginPath();pts.forEach((p,i)=>i?ctx.lineTo(...p):ctx.moveTo(...p)); if(fill){ctx.lineTo(pts.at(-1)[0],h-pad);ctx.lineTo(pts[0][0],h-pad);ctx.closePath();ctx.fillStyle="rgba(86,213,221,.07)";ctx.fill();ctx.beginPath();pts.forEach((p,i)=>i?ctx.lineTo(...p):ctx.moveTo(...p));} ctx.strokeStyle=color;ctx.lineWidth=2;ctx.stroke(); pts.forEach((p,i)=>{ctx.beginPath();ctx.arc(...p,3,0,Math.PI*2);ctx.fillStyle=color;ctx.fill();});};
  if(secondValues) draw(secondValues,"#54738c",false); draw(values,"#56d5dd",true);
  ctx.fillStyle="#688293";ctx.font="9px DM Mono";["Apr","May","Jun","Jul","Aug","Sep"].forEach((m,i)=>ctx.fillText(m,pad+i*((w-pad-10)/5)-8,h-5));
}
function drawComplianceChart(){ drawLineChart($("#complianceChart"),[74,76,78,80,83,87],[68,70,73,75,77,79]); }
function drawResolutionChart(){ drawLineChart($("#resolutionChart"),[14,12,13,10,9,8.6].map(x=>100-x*3),[58,61,64,67,70,73]); }

function openModal(title, body, footer = "") { $("#modalRoot").innerHTML = `<div class="modal-backdrop" id="modalBackdrop"><div class="modal"><div class="modal-header"><h2>${title}</h2><button class="modal-close" id="modalClose">×</button></div><div class="modal-body">${body}</div>${footer ? `<div class="modal-footer">${footer}</div>` : ""}</div></div>`; $("#modalClose").onclick=closeModal; $("#modalBackdrop").onclick=e=>{if(e.target.id==="modalBackdrop")closeModal();}; }
function closeModal(){ $("#modalRoot").innerHTML=""; }
function mineDetail(id) {
  const m = mines.find(x=>x.id===id) || mines[1];
  openModal(`${m.name} <span class="subtext" style="display:inline;margin-left:8px">${m.id}</span>`, `<div class="detail-grid"><div><div class="detail-info"><div><small>Location</small><strong>${m.location}</strong></div><div><small>Operator</small><strong>${m.operator}</strong></div><div><small>Risk level</small><strong>${riskTag(m.risk)}</strong></div><div><small>Last inspection</small><strong>${m.inspection}</strong></div></div><div class="panel" style="margin-top:15px;padding:15px">${panelHeader("Inspection history")}<div class="activity-list"><div class="activity"><div class="activity-icon green">✓</div><div><strong>Routine compliance audit</strong><p>Score improved from 83% to ${m.score}%</p></div><time>18 Sep</time></div><div class="activity"><div class="activity-icon blue">◫</div><div><strong>Document review</strong><p>Submitted by regional inspector</p></div><time>02 Sep</time></div></div></div></div><div><div class="detail-score"><div class="score-ring"><div><strong>${m.score}%</strong><small>COMPLIANCE</small></div></div><h3>Compliance categories</h3></div><div class="factor-list">${statRow("Safety",m.risk==="Critical"?54:76,m.risk==="Critical"?"var(--red)":"var(--cyan)")}${statRow("Environment",84,"var(--green)")}${statRow("Labour",91,"var(--green)")}${statRow("Equipment",m.risk==="High"?59:81,"var(--amber)")}${statRow("Documentation",88,"var(--blue)")}</div><div class="disclaimer">Prototype detail view · Score is illustrative demonstration data.</div></div></div>`, `<button class="btn btn-ghost" id="closeDetail">Close</button><button class="btn btn-primary" id="openViolations">View violations →</button>`);
  $("#closeDetail").onclick=closeModal; $("#openViolations").onclick=()=>{closeModal();renderPage("violations");};
}
function notificationDrawer() {
  openModal("Notifications <span class='subtext' style='display:inline;margin-left:7px'>4 unread</span>", `<div class="notice"><div class="notice-icon">!</div><div><strong>Critical violation requires attention</strong><p>Ventilation threshold breach at Dhanbad Central Mine.</p><time>12 minutes ago</time></div></div><div class="notice"><div class="notice-icon">◷</div><div><strong>Corrective action overdue</strong><p>ACT-0921 has passed its due date by 5 days.</p><time>1 hour ago</time></div></div><div class="notice"><div class="notice-icon" style="color:var(--blue)">◫</div><div><strong>Inspection scheduled</strong><p>Talcher North Block · 19 Sep 2026 · Meera Nair.</p><time>3 hours ago</time></div></div><div class="notice"><div class="notice-icon" style="color:var(--green)">↗</div><div><strong>Compliance improved</strong><p>Network score crossed the 85% target this month.</p><time>Yesterday</time></div></div>`);
}

function bindPageEvents() {
  $$("[data-page-action]").forEach(b=>b.onclick=()=>renderPage(b.dataset.pageAction));
  $$(".view-mine").forEach(b=>b.onclick=()=>mineDetail(b.dataset.id));
  const mineSearch=$("#mineSearch"), riskFilter=$("#riskFilter"), stateFilter=$("#stateFilter");
  const filterMines=()=>{ if(!mineSearch)return;const q=mineSearch.value.toLowerCase();const list=mines.filter(m=>(!q||`${m.id} ${m.name} ${m.operator}`.toLowerCase().includes(q))&&(!riskFilter.value||m.risk===riskFilter.value)&&(!stateFilter.value||m.state===stateFilter.value));$("#minesTable tbody").innerHTML=mineRows(list);bindPageEvents(); };
  if(mineSearch){mineSearch.oninput=filterMines;riskFilter.onchange=filterMines;stateFilter.onchange=filterMines;}
  $$(".tab").forEach(t=>t.onclick=()=>{ $$(".tab").forEach(x=>x.classList.remove("active"));t.classList.add("active");const filter=t.dataset.filter;$("#violationsTable tbody").innerHTML=violationRows(filter==="All"?violations:violations.filter(v=>v.severity===filter||v.status===filter));bindPageEvents();});
  $$(".action-violation").forEach(b=>b.onclick=()=>{const v=violations.find(x=>x.id===b.dataset.id);openModal("Manage violation",`<div class="detail-info"><div><small>Violation ID</small><strong>${v.id}</strong></div><div><small>Mine</small><strong>${v.mine}</strong></div><div><small>Category / severity</small><strong>${v.category} · ${v.severity}</strong></div><div><small>Due date</small><strong>${v.due}</strong></div></div><div class="disclaimer" style="margin-top:17px">${v.desc}</div>`,`<button class="btn btn-ghost" id="closeDetail">Close</button><button class="btn btn-primary" id="assignFromViolation">Assign corrective action</button>`);$("#closeDetail").onclick=closeModal;$("#assignFromViolation").onclick=()=>{closeModal();toast("Corrective action assigned to regional officer");renderPage("actions");};});
  $$(".update-action").forEach(b=>b.onclick=()=>{const a=actions.find(x=>x.id===b.dataset.id);if(a.status!=="Resolved"){a.progress=Math.min(100,a.progress+12);a.status=a.progress>=100?"Resolved":a.progress>70?"Verification":"In progress";renderPage("actions");toast(`${a.id} updated · ${a.status}`);}else toast("Closure record is ready to view");});
  $$(".generate-report").forEach(b=>b.onclick=()=>{openModal("Report generated successfully",`<div style="text-align:center;padding:15px 0 8px"><div style="font-size:38px;color:var(--green);margin-bottom:12px">✓</div><h3 style="margin:0 0 8px;font-size:15px">${b.dataset.report}</h3><p class="muted" style="font-size:10px;line-height:1.6">Your prototype report has been assembled with the latest network records and is ready for download.</p><div class="disclaimer">DEMO OUTPUT · This is a simulated report generation flow.</div></div>`,`<button class="btn btn-ghost" id="closeDetail">Close</button><button class="btn btn-primary" id="downloadGenerated">Download PDF ↓</button>`);$("#closeDetail").onclick=closeModal;$("#downloadGenerated").onclick=()=>{closeModal();toast("Report download prepared");};});
  $$(".download-report").forEach(b=>b.onclick=()=>toast("Download prepared · Prototype PDF export"));
  $$(".map-marker").forEach(b=>b.onclick=()=>{const r=b.dataset;const tooltip=document.createElement("div");tooltip.className="map-tooltip";tooltip.style.left=`${Math.min(70,parseFloat(b.style.left)+3)}%`;tooltip.style.top=`${Math.min(70,parseFloat(b.style.top)+4)}%`;tooltip.innerHTML=`<strong>${r.name}</strong><small>${r.state}</small><b>${cap(r.risk)} risk · ${r.score}/100</b>`;$(".india-map").appendChild(tooltip);setTimeout(()=>tooltip.remove(),3000);});
  $("#refreshBtn")?.addEventListener("click",()=>{toast("Network data refreshed just now","↻");$("#lastUpdated").textContent="just now";});
  $("#runRiskBtn")?.addEventListener("click",()=>{toast("Risk analysis complete · 5 mines prioritised","✦");});
  $("#exportMines")?.addEventListener("click",()=>toast("Mine register export prepared","↓"));
  $("#newViolation")?.addEventListener("click",()=>toast("New violation form opened for demonstration","+"));
  $("#assignAction")?.addEventListener("click",()=>toast("Action assignment form opened for demonstration","+"));
  $("#scheduleInspection")?.addEventListener("click",()=>toast("Inspection scheduler opened for demonstration","+"));
  $("#downloadAnalytics")?.addEventListener("click",()=>toast("Analytics snapshot prepared","↓"));
  $$(".inspect-btn").forEach(b=>b.onclick=()=>toast(`${b.dataset.id} record opened`));
}

function init() {
  $("#loginForm").onsubmit=e=>{e.preventDefault();enterApp();};
  $("#demoAccess").onclick=enterApp;
  $(".password-toggle").onclick=()=>{const i=$("#loginPassword");i.type=i.type==="password"?"text":"password";};
  function enterApp(){ $("#loginScreen").classList.add("hidden");$("#appShell").classList.remove("hidden");renderPage("dashboard"); }
  $$(".nav-item").forEach(n=>n.onclick=()=>{renderPage(n.dataset.page);$("#sidebar").classList.remove("open");$("#sidebarOverlay").classList.remove("open");});
  $("#menuToggle").onclick=()=>{$("#sidebar").classList.add("open");$("#sidebarOverlay").classList.add("open");};
  $("#closeSidebar").onclick=$("#sidebarOverlay").onclick=()=>{$("#sidebar").classList.remove("open");$("#sidebarOverlay").classList.remove("open");};
  $("#logoutBtn").onclick=()=>{ $("#appShell").classList.add("hidden");$("#loginScreen").classList.remove("hidden");toast("You have been signed out"); };
  $("#notificationBtn").onclick=notificationDrawer;
  $("#globalSearchToggle").onclick=()=>{$("#globalSearchBar").classList.toggle("hidden");if(!$("#globalSearchBar").classList.contains("hidden"))$("#globalSearch").focus();};
  $("#globalSearch").oninput=e=>{const q=e.target.value.toLowerCase();if(q.length>1){const m=mines.find(x=>`${x.id} ${x.name}`.toLowerCase().includes(q)),v=violations.find(x=>`${x.id} ${x.mine}`.toLowerCase().includes(q));if(m){renderPage("mines");setTimeout(()=>{$("#mineSearch").value=q;$("#mineSearch").dispatchEvent(new Event("input"));},0);}else if(v){renderPage("violations");toast(`Found ${v.id} · ${v.mine}`,"⌕");}}};
  document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeModal();$("#globalSearchBar").classList.add("hidden");}});
  window.addEventListener("resize",()=>{if(currentPage==="dashboard")drawComplianceChart();if(currentPage==="analytics")drawResolutionChart();});
}
init();