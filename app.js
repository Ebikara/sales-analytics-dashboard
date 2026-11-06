/**
 * ApexSales Analytics Dashboard
 * Pure Vanilla JavaScript with LocalStorage WebStorage Persistence
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'apex_sales_dashboard_records_v2';
  const MONTHLY_GOAL = 150000;

  // Initial Seed Data spanning recent 2026 months
  const DEFAULT_SALES = [
    {
      id: 'INV-2026-1041',
      customer: 'Acme Cloud Dynamics',
      email: 'billing@acmecloud.io',
      product: 'Enterprise Cloud Suite',
      category: 'Software & SaaS',
      amount: 14500,
      quantity: 1,
      channel: 'Direct Sales',
      rep: 'Sarah Jenkins',
      status: 'Completed',
      date: '2026-11-05'
    },
    {
      id: 'INV-2026-1040',
      customer: 'Nexus Fintech Corp',
      email: 'payments@nexusfintech.com',
      product: 'AI Data Engine Pro',
      category: 'Software & SaaS',
      amount: 22800,
      quantity: 2,
      channel: 'Partner Referral',
      rep: 'Marcus Vance',
      status: 'Completed',
      date: '2026-11-04'
    },
    {
      id: 'INV-2026-1039',
      customer: 'Hyperion BioLabs',
      email: 'procure@hyperionbio.org',
      product: 'High-Density Rack Servers',
      category: 'Hardware',
      amount: 18900,
      quantity: 3,
      channel: 'Wholesale',
      rep: 'Elena Rostova',
      status: 'Completed',
      date: '2026-11-03'
    },
    {
      id: 'INV-2026-1038',
      customer: 'Vanguard Retail Systems',
      email: 'ops@vanguardretail.com',
      product: 'CyberSec Shield Pro',
      category: 'Cloud Services',
      amount: 7200,
      quantity: 1,
      channel: 'Inbound Leads',
      rep: 'David Kim',
      status: 'Pending',
      date: '2026-11-02'
    },
    {
      id: 'INV-2026-1037',
      customer: 'Aura Media Global',
      email: 'accounts@auramedia.net',
      product: 'Cloud Migration Sprint',
      category: 'Consulting',
      amount: 12500,
      quantity: 1,
      channel: 'Direct Sales',
      rep: 'Rachel Adams',
      status: 'Completed',
      date: '2026-10-29'
    },
    {
      id: 'INV-2026-1036',
      customer: 'Summit Logistics Group',
      email: 'fleet@summitlogistics.com',
      product: 'AI Data Engine Pro',
      category: 'Software & SaaS',
      amount: 11400,
      quantity: 1,
      channel: 'Online Portal',
      rep: 'Sarah Jenkins',
      status: 'Completed',
      date: '2026-10-25'
    },
    {
      id: 'INV-2026-1035',
      customer: 'Orbital Health Partners',
      email: 'finance@orbitalhealth.com',
      product: 'Executive Security Audit',
      category: 'Consulting',
      amount: 8600,
      quantity: 1,
      channel: 'Partner Referral',
      rep: 'Elena Rostova',
      status: 'Completed',
      date: '2026-10-20'
    },
    {
      id: 'INV-2026-1034',
      customer: 'Quantum Robotics Inc',
      email: 'purchasing@quantumrobotics.io',
      product: 'Edge Compute Module Gen4',
      category: 'Hardware',
      amount: 26400,
      quantity: 4,
      channel: 'Direct Sales',
      rep: 'Marcus Vance',
      status: 'Completed',
      date: '2026-10-15'
    },
    {
      id: 'INV-2026-1033',
      customer: 'Pinnacle Capital Group',
      email: 'tech@pinnaclecap.com',
      product: 'Enterprise Cloud Suite',
      category: 'Software & SaaS',
      amount: 14500,
      quantity: 1,
      channel: 'Online Portal',
      rep: 'David Kim',
      status: 'Refunded',
      date: '2026-10-11'
    },
    {
      id: 'INV-2026-1032',
      customer: 'Starlight E-commerce',
      email: 'merchant@starlight.shop',
      product: 'Staff DevOps Certification',
      category: 'Training & Support',
      amount: 4800,
      quantity: 2,
      channel: 'Inbound Leads',
      rep: 'Rachel Adams',
      status: 'Completed',
      date: '2026-10-06'
    },
    {
      id: 'INV-2026-1031',
      customer: 'BlueWave Maritime',
      email: 'maritime@bluewave.com',
      product: 'CyberSec Shield Pro',
      category: 'Cloud Services',
      amount: 9600,
      quantity: 1,
      channel: 'Direct Sales',
      rep: 'Sarah Jenkins',
      status: 'Completed',
      date: '2026-09-28'
    },
    {
      id: 'INV-2026-1030',
      customer: 'Zenith Architecture Ltd',
      email: 'cad@zenitharch.co.uk',
      product: 'Edge Compute Module Gen4',
      category: 'Hardware',
      amount: 13200,
      quantity: 2,
      channel: 'Wholesale',
      rep: 'Elena Rostova',
      status: 'Completed',
      date: '2026-09-19'
    },
    {
      id: 'INV-2026-1029',
      customer: 'Krypton Interactive',
      email: 'studio@kryptongames.com',
      product: 'AI Data Engine Pro',
      category: 'Software & SaaS',
      amount: 22800,
      quantity: 2,
      channel: 'Partner Referral',
      rep: 'Marcus Vance',
      status: 'Completed',
      date: '2026-09-12'
    },
    {
      id: 'INV-2026-1028',
      customer: 'Nova Renewable Energy',
      email: 'solar@novarenew.com',
      product: 'Cloud Migration Sprint',
      category: 'Consulting',
      amount: 16000,
      quantity: 1,
      channel: 'Direct Sales',
      rep: 'David Kim',
      status: 'Completed',
      date: '2026-08-30'
    },
    {
      id: 'INV-2026-1027',
      customer: 'Apex Global Logistics',
      email: 'freight@apexglobe.com',
      product: 'Enterprise Cloud Suite',
      category: 'Software & SaaS',
      amount: 14500,
      quantity: 1,
      channel: 'Online Portal',
      rep: 'Rachel Adams',
      status: 'Completed',
      date: '2026-08-18'
    },
    {
      id: 'INV-2026-1026',
      customer: 'Crestview Diagnostics',
      email: 'lab@crestview.med',
      product: 'High-Density Rack Servers',
      category: 'Hardware',
      amount: 12600,
      quantity: 2,
      channel: 'Wholesale',
      rep: 'Marcus Vance',
      status: 'Completed',
      date: '2026-07-27'
    },
    {
      id: 'INV-2026-1025',
      customer: 'Titan Heavy Industries',
      email: 'steel@titanindustries.com',
      product: 'Staff DevOps Certification',
      category: 'Training & Support',
      amount: 7200,
      quantity: 3,
      channel: 'Direct Sales',
      rep: 'Sarah Jenkins',
      status: 'Completed',
      date: '2026-07-14'
    },
    {
      id: 'INV-2026-1024',
      customer: 'Prism Telecom Europe',
      email: 'network@prismtel.eu',
      product: 'CyberSec Shield Pro',
      category: 'Cloud Services',
      amount: 14400,
      quantity: 2,
      channel: 'Inbound Leads',
      rep: 'Elena Rostova',
      status: 'Completed',
      date: '2026-06-22'
    },
    {
      id: 'INV-2026-1023',
      customer: 'Delta Autonomous Systems',
      email: 'pilot@deltaauto.ai',
      product: 'AI Data Engine Pro',
      category: 'Software & SaaS',
      amount: 34200,
      quantity: 3,
      channel: 'Partner Referral',
      rep: 'David Kim',
      status: 'Completed',
      date: '2026-06-08'
    },
    {
      id: 'INV-2026-1022',
      customer: 'Matrix Legal Services',
      email: 'contracts@matrixlaw.com',
      product: 'Cloud Migration Sprint',
      category: 'Consulting',
      amount: 9800,
      quantity: 1,
      channel: 'Online Portal',
      rep: 'Rachel Adams',
      status: 'Pending',
      date: '2026-05-19'
    },
    {
      id: 'INV-2026-1021',
      customer: 'Solaria Space Ventures',
      email: 'propulsion@solariaspace.com',
      product: 'High-Density Rack Servers',
      category: 'Hardware',
      amount: 25200,
      quantity: 4,
      channel: 'Direct Sales',
      rep: 'Marcus Vance',
      status: 'Completed',
      date: '2026-04-26'
    },
    {
      id: 'INV-2026-1020',
      customer: 'Evergreen CleanTech',
      email: 'eco@evergreen.org',
      product: 'Enterprise Cloud Suite',
      category: 'Software & SaaS',
      amount: 14500,
      quantity: 1,
      channel: 'Direct Sales',
      rep: 'Sarah Jenkins',
      status: 'Completed',
      date: '2026-03-31'
    },
    {
      id: 'INV-2026-1019',
      customer: 'Beacon Financial Software',
      email: 'audit@beaconfin.com',
      product: 'Executive Security Audit',
      category: 'Consulting',
      amount: 11000,
      quantity: 1,
      channel: 'Partner Referral',
      rep: 'Elena Rostova',
      status: 'Completed',
      date: '2026-02-14'
    },
    {
      id: 'INV-2026-1018',
      customer: 'Vortex Gaming Network',
      email: 'servers@vortexgaming.tv',
      product: 'CyberSec Shield Pro',
      category: 'Cloud Services',
      amount: 8800,
      quantity: 1,
      channel: 'Inbound Leads',
      rep: 'David Kim',
      status: 'Completed',
      date: '2026-01-20'
    }
  ];

  // Application State
  let salesData = [];
  let filteredData = [];
  let currentPage = 1;
  const itemsPerPage = 8;
  let sortColumn = 'date';
  let sortDirection = 'desc';

  // Chart instances
  let revenueChartInstance = null;
  let categoryChartInstance = null;
  let channelChartInstance = null;
  let repChartInstance = null;

  // DOM Elements
  const timeRangeSelect = document.getElementById('timeRangeSelect');
  const categoryFilter = document.getElementById('categoryFilter');
  const statusFilter = document.getElementById('statusFilter');
  const tableSearchInput = document.getElementById('tableSearchInput');
  const salesTableBody = document.getElementById('salesTableBody');
  const transactionsCountBadge = document.getElementById('transactionsCountBadge');
  const paginationInfo = document.getElementById('paginationInfo');
  const prevPageBtn = document.getElementById('prevPageBtn');
  const nextPageBtn = document.getElementById('nextPageBtn');
  const pageNumberDisplay = document.getElementById('pageNumberDisplay');

  // KPI elements
  const kpiRevenue = document.getElementById('kpiRevenue');
  const kpiProfit = document.getElementById('kpiProfit');
  const kpiOrders = document.getElementById('kpiOrders');
  const kpiAov = document.getElementById('kpiAov');
  const kpiConversion = document.getElementById('kpiConversion');
  const kpiPendingCount = document.getElementById('kpiPendingCount');
  const kpiRefundsBadge = document.getElementById('kpiRefundsBadge');
  const goalProgressBar = document.getElementById('goalProgressBar');
  const goalPercentText = document.getElementById('goalPercentText');
  const goalRemainingText = document.getElementById('goalRemainingText');

  // Modal elements
  const newSaleModal = document.getElementById('newSaleModal');
  const openNewSaleBtn = document.getElementById('openNewSaleBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const cancelModalBtn = document.getElementById('cancelModalBtn');
  const newSaleForm = document.getElementById('newSaleForm');
  const formDate = document.getElementById('formDate');

  // Action elements
  const exportCsvBtn = document.getElementById('exportCsvBtn');
  const resetDataBtn = document.getElementById('resetDataBtn');
  const toastNotification = document.getElementById('toastNotification');
  const toastMessage = document.getElementById('toastMessage');

  // Navigation items
  const navItems = document.querySelectorAll('.nav-item');

  /**
   * Initialize LocalStorage
   */
  function initStorage() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        salesData = JSON.parse(stored);
      } else {
        salesData = [...DEFAULT_SALES];
        saveStorage();
      }
    } catch (e) {
      console.warn('LocalStorage error, using memory fallback:', e);
      salesData = [...DEFAULT_SALES];
    }
  }

  function saveStorage() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(salesData));
    } catch (e) {
      console.error('Failed to save data to localStorage:', e);
      showToast('Warning: Unable to save to local storage.');
    }
  }

  /**
   * Helper: Show Toast Notification
   */
  let toastTimer = null;
  function showToast(msg) {
    if (toastTimer) clearTimeout(toastTimer);
    toastMessage.textContent = msg;
    toastNotification.classList.add('show');
    toastTimer = setTimeout(() => {
      toastNotification.classList.remove('show');
    }, 3200);
  }

  /**
   * Format Currency
   */
  function formatMoney(amount) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(amount);
  }

  /**
   * Date Filter Predicate
   */
  function matchesTimeRange(dateStr, rangeKey) {
    if (rangeKey === 'all') return true;
    const saleDate = new Date(dateStr);
    const now = new Date('2026-11-06T13:30:00'); // Baseline local app time

    if (rangeKey === 'year') {
      return saleDate.getFullYear() === now.getFullYear();
    }
    if (rangeKey === 'quarter') {
      // Q4: Oct, Nov, Dec (month indices 9, 10, 11)
      const currentQuarter = Math.floor(now.getMonth() / 3);
      const saleQuarter = Math.floor(saleDate.getMonth() / 3);
      return saleDate.getFullYear() === now.getFullYear() && currentQuarter === saleQuarter;
    }
    if (rangeKey === '30days') {
      const diffTime = Math.abs(now - saleDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays <= 30 && saleDate <= now;
    }
    if (rangeKey === '7days') {
      const diffTime = Math.abs(now - saleDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays <= 7 && saleDate <= now;
    }
    return true;
  }

  /**
   * Main Filter Logic
   */
  function applyFilters() {
    const selectedRange = timeRangeSelect.value;
    const selectedCat = categoryFilter.value;
    const selectedStatus = statusFilter.value;
    const searchTerm = tableSearchInput.value.trim().toLowerCase();

    filteredData = salesData.filter(item => {
      // Time filter
      if (!matchesTimeRange(item.date, selectedRange)) return false;

      // Category filter
      if (selectedCat !== 'all' && item.category !== selectedCat) return false;

      // Status filter
      if (selectedStatus !== 'all' && item.status !== selectedStatus) return false;

      // Search term
      if (searchTerm) {
        const matchCustomer = item.customer.toLowerCase().includes(searchTerm);
        const matchEmail = item.email.toLowerCase().includes(searchTerm);
        const matchRep = item.rep.toLowerCase().includes(searchTerm);
        const matchProduct = item.product.toLowerCase().includes(searchTerm);
        const matchId = item.id.toLowerCase().includes(searchTerm);
        if (!matchCustomer && !matchEmail && !matchRep && !matchProduct && !matchId) {
          return false;
        }
      }

      return true;
    });

    // Sort filtered data
    sortDataList();

    // Reset pagination to first page
    currentPage = 1;

    // Update all dashboard elements
    updateKpis();
    updateCharts();
    updateRankings();
    renderTable();
  }

  /**
   * Sort filteredData according to sortColumn and sortDirection
   */
  function sortDataList() {
    filteredData.sort((a, b) => {
      let valA = a[sortColumn];
      let valB = b[sortColumn];

      if (sortColumn === 'amount' || sortColumn === 'quantity') {
        valA = Number(valA);
        valB = Number(valB);
      } else if (sortColumn === 'date') {
        valA = new Date(valA).getTime();
        valB = new Date(valB).getTime();
      } else {
        valA = String(valA).toLowerCase();
        valB = String(valB).toLowerCase();
      }

      if (valA < valB) return sortDirection === 'asc' ? -1 : 1;
      if (valA > valB) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }

  /**
   * Calculate and Render KPIs
   */
  function updateKpis() {
    // Note: Revenue is calculated on Completed sales
    const completedSales = filteredData.filter(d => d.status === 'Completed');
    const pendingSales = filteredData.filter(d => d.status === 'Pending');
    const refundedSales = filteredData.filter(d => d.status === 'Refunded');

    const totalRevenue = completedSales.reduce((acc, curr) => acc + Number(curr.amount), 0);
    const estimatedMarginRate = 0.684; // 68.4%
    const totalProfit = totalRevenue * estimatedMarginRate;

    const totalOrdersCount = completedSales.length;
    const aov = totalOrdersCount > 0 ? totalRevenue / totalOrdersCount : 0;

    const totalDeals = filteredData.length;
    const conversionRate = totalDeals > 0 ? ((totalOrdersCount / totalDeals) * 100).toFixed(1) : 0;

    // Render KPI values
    kpiRevenue.textContent = formatMoney(totalRevenue);
    kpiProfit.textContent = formatMoney(totalProfit);
    kpiOrders.textContent = totalOrdersCount.toLocaleString();
    kpiAov.textContent = formatMoney(aov);
    kpiConversion.textContent = `${conversionRate}%`;

    kpiPendingCount.textContent = `${pendingSales.length} pending`;
    kpiRefundsBadge.textContent = `${refundedSales.length} refunded`;

    // Monthly Goal update
    const currentMonthRevenue = salesData
      .filter(d => {
        if (d.status !== 'Completed') return false;
        const dt = new Date(d.date);
        return dt.getFullYear() === 2026 && dt.getMonth() === 10; // November
      })
      .reduce((sum, item) => sum + Number(item.amount), 0);

    const goalPercent = Math.min(100, Math.round((currentMonthRevenue / MONTHLY_GOAL) * 100));
    goalProgressBar.style.width = `${goalPercent}%`;
    goalPercentText.textContent = `${goalPercent}% reached`;
    const remaining = Math.max(0, MONTHLY_GOAL - currentMonthRevenue);
    goalRemainingText.textContent = `${formatMoney(remaining)} to go`;
  }

  /**
   * Update Charts (Chart.js)
   */
  function updateCharts() {
    renderRevenueTrajectoryChart();
    renderCategoryDoughnutChart();
    renderChannelBarChart();
    renderRepPerformanceChart();
  }

  /**
   * Chart 1: Revenue Trajectory (Monthly aggregated)
   */
  function renderRevenueTrajectoryChart() {
    const ctx = document.getElementById('revenueTrendChart');
    if (!ctx) return;

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthlyRev = new Array(12).fill(0);
    const monthlyProf = new Array(12).fill(0);

    filteredData.forEach(sale => {
      if (sale.status === 'Completed') {
        const d = new Date(sale.date);
        const m = d.getMonth();
        if (m >= 0 && m < 12) {
          monthlyRev[m] += Number(sale.amount);
          monthlyProf[m] += Number(sale.amount) * 0.684;
        }
      }
    });

    if (revenueChartInstance) {
      revenueChartInstance.destroy();
    }

    revenueChartInstance = new Chart(ctx, {
      type: 'line',
      data: {
        labels: months,
        datasets: [
          {
            label: 'Total Revenue ($)',
            data: monthlyRev,
            borderColor: '#2563eb',
            backgroundColor: 'rgba(37, 99, 235, 0.08)',
            borderWidth: 2.5,
            fill: true,
            tension: 0.35,
            pointBackgroundColor: '#2563eb',
            pointRadius: 4,
            pointHoverRadius: 6
          },
          {
            label: 'Net Profit ($)',
            data: monthlyProf,
            borderColor: '#059669',
            backgroundColor: 'transparent',
            borderWidth: 2,
            borderDash: [4, 4],
            tension: 0.35,
            pointBackgroundColor: '#059669',
            pointRadius: 3,
            pointHoverRadius: 5
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            backgroundColor: '#0f172a',
            titleColor: '#ffffff',
            bodyColor: '#cbd5e1',
            padding: 10,
            cornerRadius: 8,
            callbacks: {
              label: function (context) {
                return `${context.dataset.label}: ${formatMoney(context.raw)}`;
              }
            }
          }
        },
        scales: {
          x: {
            grid: {
              display: false
            },
            ticks: {
              color: '#64748b',
              font: { size: 12 }
            }
          },
          y: {
            grid: {
              color: '#f1f5f9'
            },
            ticks: {
              color: '#64748b',
              font: { size: 12 },
              callback: function (val) {
                return '$' + (val / 1000) + 'k';
              }
            }
          }
        }
      }
    });
  }

  /**
   * Chart 2: Category Doughnut
   */
  function renderCategoryDoughnutChart() {
    const ctx = document.getElementById('categoryChart');
    const legendEl = document.getElementById('categoryLegend');
    if (!ctx) return;

    const catTotals = {};
    filteredData.forEach(sale => {
      if (sale.status === 'Completed') {
        catTotals[sale.category] = (catTotals[sale.category] || 0) + Number(sale.amount);
      }
    });

    const labels = Object.keys(catTotals);
    const dataValues = labels.map(l => catTotals[l]);
    const palette = ['#2563eb', '#10b981', '#f59e0b', '#8b5cf6', '#06b6d4', '#ec4899'];

    if (categoryChartInstance) {
      categoryChartInstance.destroy();
    }

    categoryChartInstance = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: labels,
        datasets: [
          {
            data: dataValues.length > 0 ? dataValues : [1],
            backgroundColor: palette.slice(0, Math.max(labels.length, 1)),
            borderWidth: 2,
            borderColor: '#ffffff',
            hoverOffset: 6
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '68%',
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: function (ctx) {
                const total = dataValues.reduce((a, b) => a + b, 0);
                const percent = total > 0 ? ((ctx.raw / total) * 100).toFixed(1) : 0;
                return `${ctx.label}: ${formatMoney(ctx.raw)} (${percent}%)`;
              }
            }
          }
        }
      }
    });

    // Render custom HTML legend
    if (legendEl) {
      const grandTotal = dataValues.reduce((a, b) => a + b, 0);
      legendEl.innerHTML = labels.map((cat, idx) => {
        const val = catTotals[cat];
        const pct = grandTotal > 0 ? Math.round((val / grandTotal) * 100) : 0;
        const color = palette[idx % palette.length];
        return `
          <div class="legend-item">
            <div class="legend-left">
              <span class="legend-color-dot" style="background-color: ${color};"></span>
              <span class="legend-label">${cat}</span>
            </div>
            <span class="legend-value">${formatMoney(val)} (${pct}%)</span>
          </div>
        `;
      }).join('');
    }
  }

  /**
   * Chart 3: Acquisition Channel Bars
   */
  function renderChannelBarChart() {
    const ctx = document.getElementById('channelChart');
    if (!ctx) return;

    const channelTotals = {};
    filteredData.forEach(sale => {
      if (sale.status === 'Completed') {
        channelTotals[sale.channel] = (channelTotals[sale.channel] || 0) + Number(sale.amount);
      }
    });

    const labels = Object.keys(channelTotals);
    const dataValues = labels.map(ch => channelTotals[ch]);

    if (channelChartInstance) {
      channelChartInstance.destroy();
    }

    channelChartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Revenue by Channel',
            data: dataValues,
            backgroundColor: '#3b82f6',
            borderRadius: 6,
            maxBarThickness: 32
          }
        ]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: function (ctx) {
                return `Volume: ${formatMoney(ctx.raw)}`;
              }
            }
          }
        },
        scales: {
          x: {
            grid: { color: '#f1f5f9' },
            ticks: {
              color: '#64748b',
              callback: function (val) {
                return '$' + (val / 1000) + 'k';
              }
            }
          },
          y: {
            grid: { display: false },
            ticks: { color: '#334155', font: { weight: 500 } }
          }
        }
      }
    });
  }

  /**
   * Chart 4: Sales Rep Leaderboard
   */
  function renderRepPerformanceChart() {
    const ctx = document.getElementById('repChart');
    if (!ctx) return;

    const repTotals = {};
    filteredData.forEach(sale => {
      if (sale.status === 'Completed') {
        repTotals[sale.rep] = (repTotals[sale.rep] || 0) + Number(sale.amount);
      }
    });

    const sortedReps = Object.keys(repTotals).sort((a, b) => repTotals[b] - repTotals[a]);
    const dataValues = sortedReps.map(rep => repTotals[rep]);

    if (repChartInstance) {
      repChartInstance.destroy();
    }

    repChartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: sortedReps,
        datasets: [
          {
            label: 'Rep Revenue ($)',
            data: dataValues,
            backgroundColor: '#10b981',
            borderRadius: 6,
            maxBarThickness: 34
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: function (ctx) {
                return `Closed: ${formatMoney(ctx.raw)}`;
              }
            }
          }
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: { color: '#334155', font: { weight: 500 } }
          },
          y: {
            grid: { color: '#f1f5f9' },
            ticks: {
              color: '#64748b',
              callback: function (val) {
                return '$' + (val / 1000) + 'k';
              }
            }
          }
        }
      }
    });
  }

  /**
   * Render Side Rankings & Status Summary
   */
  function updateRankings() {
    // 1. Top Selling Products
    const productStats = {};
    filteredData.forEach(s => {
      if (s.status === 'Completed') {
        if (!productStats[s.product]) {
          productStats[s.product] = { revenue: 0, count: 0, category: s.category };
        }
        productStats[s.product].revenue += Number(s.amount);
        productStats[s.product].count += Number(s.quantity);
      }
    });

    const sortedProducts = Object.keys(productStats)
      .map(name => ({ name, ...productStats[name] }))
      .sort((a, b) => b.revenue - a.revenue)
      .slice(0, 4);

    const topProductsList = document.getElementById('topProductsList');
    if (topProductsList) {
      const maxRev = sortedProducts.length > 0 ? sortedProducts[0].revenue : 1;
      const barColors = ['#2563eb', '#10b981', '#f59e0b', '#8b5cf6'];

      if (sortedProducts.length === 0) {
        topProductsList.innerHTML = `<div style="font-size:12px;color:#94a3b8;padding:12px 0;">No completed product sales in this filter period.</div>`;
      } else {
        topProductsList.innerHTML = sortedProducts.map((p, idx) => {
          const pct = Math.round((p.revenue / maxRev) * 100);
          return `
            <div class="ranking-item">
              <div class="ranking-item-top">
                <span class="ranking-item-name">${p.name}</span>
                <span class="ranking-item-rev">${formatMoney(p.revenue)}</span>
              </div>
              <div class="ranking-bar-bg">
                <div class="ranking-bar-fill" style="width: ${pct}%; background-color: ${barColors[idx % barColors.length]};"></div>
              </div>
              <div class="ranking-item-meta">
                <span>${p.category}</span>
                <span>${p.count} units sold</span>
              </div>
            </div>
          `;
        }).join('');
      }
    }

    // 2. Status Breakdown Widget
    const statusSummaryList = document.getElementById('statusSummaryList');
    if (statusSummaryList) {
      const counts = { Completed: 0, Pending: 0, Refunded: 0 };
      const sums = { Completed: 0, Pending: 0, Refunded: 0 };

      filteredData.forEach(s => {
        if (counts[s.status] !== undefined) {
          counts[s.status]++;
          sums[s.status] += Number(s.amount);
        }
      });

      statusSummaryList.innerHTML = `
        <div class="status-stat-row">
          <div class="status-stat-left">
            <span class="status-dot dot-completed"></span>
            <span class="status-stat-title">Completed Deals</span>
          </div>
          <div class="status-stat-right">
            <span class="status-stat-count">${counts.Completed} deals</span>
            <span class="status-stat-amount">${formatMoney(sums.Completed)}</span>
          </div>
        </div>
        <div class="status-stat-row">
          <div class="status-stat-left">
            <span class="status-dot dot-pending"></span>
            <span class="status-stat-title">Pending Invoices</span>
          </div>
          <div class="status-stat-right">
            <span class="status-stat-count">${counts.Pending} deals</span>
            <span class="status-stat-amount">${formatMoney(sums.Pending)}</span>
          </div>
        </div>
        <div class="status-stat-row">
          <div class="status-stat-left">
            <span class="status-dot dot-refunded"></span>
            <span class="status-stat-title">Refunded / Reversals</span>
          </div>
          <div class="status-stat-right">
            <span class="status-stat-count">${counts.Refunded} deals</span>
            <span class="status-stat-amount">${formatMoney(sums.Refunded)}</span>
          </div>
        </div>
      `;
    }
  }

  /**
   * Render Data Table with Pagination & Controls
   */
  function renderTable() {
    const totalItems = filteredData.length;
    transactionsCountBadge.textContent = `${totalItems} deals`;

    if (totalItems === 0) {
      salesTableBody.innerHTML = `
        <tr>
          <td colspan="9" style="text-align: center; padding: 36px; color: #94a3b8;">
            No transactions found matching your criteria. Try adjusting the period or search keyword.
          </td>
        </tr>
      `;
      paginationInfo.textContent = 'Showing 0 to 0 of 0 entries';
      prevPageBtn.disabled = true;
      nextPageBtn.disabled = true;
      pageNumberDisplay.textContent = 'Page 1';
      return;
    }

    const totalPages = Math.ceil(totalItems / itemsPerPage);
    if (currentPage > totalPages) currentPage = totalPages;
    if (currentPage < 1) currentPage = 1;

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
    const pageItems = filteredData.slice(startIndex, endIndex);

    salesTableBody.innerHTML = pageItems.map(item => {
      let badgeClass = 'badge-neutral';
      if (item.status === 'Completed') badgeClass = 'badge-success';
      else if (item.status === 'Pending') badgeClass = 'badge-warning';
      else if (item.status === 'Refunded') badgeClass = 'badge-danger';

      return `
        <tr data-id="${item.id}">
          <td style="font-family: monospace; font-weight: 600; color: #2563eb;">${item.id}</td>
          <td>
            <div class="customer-cell">
              <span class="customer-name">${escapeHtml(item.customer)}</span>
              <span class="customer-email">${escapeHtml(item.email)}</span>
            </div>
          </td>
          <td>${item.date}</td>
          <td>
            <div class="product-cell">
              <span class="product-name">${escapeHtml(item.product)}</span>
              <span class="product-cat">${escapeHtml(item.category)}</span>
            </div>
          </td>
          <td>${escapeHtml(item.channel)}</td>
          <td>${escapeHtml(item.rep)}</td>
          <td class="text-right amount-bold">${formatMoney(item.amount)}</td>
          <td><span class="badge ${badgeClass}">${item.status}</span></td>
          <td class="text-center">
            <div class="action-btn-group">
              <button class="action-btn toggle-status-btn" data-id="${item.id}" title="Cycle Status (Completed -> Pending -> Refunded)">
                Status
              </button>
              <button class="action-btn action-btn-danger delete-sale-btn" data-id="${item.id}" title="Delete Record">
                Delete
              </button>
            </div>
          </td>
        </tr>
      `;
    }).join('');

    // Pagination info & buttons
    paginationInfo.textContent = `Showing ${startIndex + 1} to ${endIndex} of ${totalItems} entries`;
    pageNumberDisplay.textContent = `Page ${currentPage} of ${totalPages}`;
    prevPageBtn.disabled = currentPage <= 1;
    nextPageBtn.disabled = currentPage >= totalPages;

    // Attach event listeners for row actions
    attachRowEventListeners();
  }

  function attachRowEventListeners() {
    const toggleBtns = salesTableBody.querySelectorAll('.toggle-status-btn');
    toggleBtns.forEach(btn => {
      btn.onclick = function (e) {
        e.stopPropagation();
        const id = this.getAttribute('data-id');
        toggleSaleStatus(id);
      };
    });

    const deleteBtns = salesTableBody.querySelectorAll('.delete-sale-btn');
    deleteBtns.forEach(btn => {
      btn.onclick = function (e) {
        e.stopPropagation();
        const id = this.getAttribute('data-id');
        deleteSale(id);
      };
    });
  }

  /**
   * Status Cycler: Completed -> Pending -> Refunded -> Completed
   */
  function toggleSaleStatus(id) {
    const sale = salesData.find(s => s.id === id);
    if (!sale) return;

    if (sale.status === 'Completed') sale.status = 'Pending';
    else if (sale.status === 'Pending') sale.status = 'Refunded';
    else sale.status = 'Completed';

    saveStorage();
    applyFilters();
    showToast(`Invoice ${id} updated to ${sale.status}`);
  }

  /**
   * Delete Sale
   */
  function deleteSale(id) {
    if (confirm(`Are you sure you want to delete transaction ${id}?`)) {
      salesData = salesData.filter(s => s.id !== id);
      saveStorage();
      applyFilters();
      showToast(`Transaction ${id} deleted.`);
    }
  }

  /**
   * Escape HTML to prevent XSS
   */
  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  /**
   * Table Header Sorting Handler
   */
  function setupTableSorting() {
    const thElements = document.querySelectorAll('#salesTable thead th[data-sort]');
    thElements.forEach(th => {
      th.addEventListener('click', () => {
        const field = th.getAttribute('data-sort');
        if (sortColumn === field) {
          sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
        } else {
          sortColumn = field;
          sortDirection = 'desc';
        }
        applyFilters();
      });
    });
  }

  /**
   * New Sale Modal Handling
   */
  function setupModal() {
    openNewSaleBtn.addEventListener('click', () => {
      // Set current date by default
      const today = new Date().toISOString().split('T')[0];
      formDate.value = today;
      newSaleModal.classList.add('active');
    });

    closeModalBtn.addEventListener('click', () => {
      newSaleModal.classList.remove('active');
    });

    cancelModalBtn.addEventListener('click', () => {
      newSaleModal.classList.remove('active');
    });

    newSaleModal.addEventListener('click', (e) => {
      if (e.target === newSaleModal) {
        newSaleModal.classList.remove('active');
      }
    });

    newSaleForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const customer = document.getElementById('formCustomer').value.trim();
      const email = document.getElementById('formEmail').value.trim();
      const product = document.getElementById('formProduct').value.trim();
      const category = document.getElementById('formCategory').value;
      const amount = parseFloat(document.getElementById('formAmount').value);
      const quantity = parseInt(document.getElementById('formQuantity').value, 10);
      const channel = document.getElementById('formChannel').value;
      const rep = document.getElementById('formRep').value;
      const status = document.getElementById('formStatus').value;
      const date = document.getElementById('formDate').value;

      if (!customer || !email || !product || isNaN(amount) || amount <= 0) {
        alert('Please fill out all required fields with valid values.');
        return;
      }

      // Generate Invoice ID
      const randomId = Math.floor(1000 + Math.random() * 9000);
      const newInvoiceId = `INV-2026-${randomId}`;

      const newRecord = {
        id: newInvoiceId,
        customer,
        email,
        product,
        category,
        amount,
        quantity,
        channel,
        rep,
        status,
        date
      };

      // Prepend to dataset
      salesData.unshift(newRecord);
      saveStorage();

      newSaleForm.reset();
      newSaleModal.classList.remove('active');
      applyFilters();

      showToast(`Sale ${newInvoiceId} recorded successfully!`);
    });
  }

  /**
   * Export to CSV
   */
  function setupExportCsv() {
    exportCsvBtn.addEventListener('click', () => {
      if (salesData.length === 0) {
        showToast('No sales data available to export.');
        return;
      }

      const headers = ['Invoice ID', 'Customer', 'Email', 'Date', 'Product', 'Category', 'Channel', 'Sales Rep', 'Quantity', 'Amount ($)', 'Status'];
      const csvRows = [headers.join(',')];

      filteredData.forEach(item => {
        const row = [
          `"${item.id}"`,
          `"${item.customer.replace(/"/g, '""')}"`,
          `"${item.email.replace(/"/g, '""')}"`,
          `"${item.date}"`,
          `"${item.product.replace(/"/g, '""')}"`,
          `"${item.category}"`,
          `"${item.channel}"`,
          `"${item.rep}"`,
          item.quantity,
          item.amount,
          `"${item.status}"`
        ];
        csvRows.push(row.join(','));
      });

      const csvContent = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csvRows.join('\n'));
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute('href', csvContent);
      downloadAnchor.setAttribute('download', `sales_analytics_${new Date().toISOString().slice(0, 10)}.csv`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      document.body.removeChild(downloadAnchor);

      showToast('Sales data successfully exported to CSV!');
    });
  }

  /**
   * Reset Demo Data
   */
  function setupResetData() {
    resetDataBtn.addEventListener('click', () => {
      if (confirm('Reset sales database to original demo records? Custom modifications will be replaced.')) {
        salesData = [...DEFAULT_SALES];
        saveStorage();
        applyFilters();
        showToast('Demo dataset restored to initial state.');
      }
    });
  }

  /**
   * Sidebar Navigation Tabs interaction
   */
  function setupNavigation() {
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        navItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        const tab = item.getAttribute('data-tab');
        if (tab === 'overview') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (tab === 'transactions') {
          const tableCard = document.querySelector('.table-container-card');
          if (tableCard) tableCard.scrollIntoView({ behavior: 'smooth' });
        } else if (tab === 'breakdown') {
          const doughnutCard = document.querySelector('.chart-small');
          if (doughnutCard) doughnutCard.scrollIntoView({ behavior: 'smooth' });
        } else if (tab === 'team') {
          const repChartEl = document.getElementById('repChart');
          if (repChartEl) repChartEl.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  /**
   * Pagination Button Listeners
   */
  function setupPagination() {
    prevPageBtn.addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage--;
        renderTable();
      }
    });

    nextPageBtn.addEventListener('click', () => {
      const totalPages = Math.ceil(filteredData.length / itemsPerPage);
      if (currentPage < totalPages) {
        currentPage++;
        renderTable();
      }
    });
  }

  /**
   * Global Filters Listeners
   */
  function setupFilterListeners() {
    timeRangeSelect.addEventListener('change', applyFilters);
    categoryFilter.addEventListener('change', applyFilters);
    statusFilter.addEventListener('change', applyFilters);

    let debounceTimer = null;
    tableSearchInput.addEventListener('input', () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(applyFilters, 180);
    });
  }

  /**
   * Initialize Dashboard
   */
  function init() {
    initStorage();
    setupTableSorting();
    setupModal();
    setupExportCsv();
    setupResetData();
    setupNavigation();
    setupPagination();
    setupFilterListeners();

    // Initial render
    applyFilters();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

