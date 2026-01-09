
/* 
   BAFS Game - Random Generator Version 
   Supports: Accounting Equation, Break-Even Analysis, Financial Ratios
*/

// --- Generators ---

// 1. Accounting Equation Generator
function generateAccountingEqProblem() {
    // A = L + C
    // Generate components
    const assetsList = ['Equipment', 'Machinery', 'Furniture', 'Inventory', 'Accounts Receivable', 'Cash at Bank'];
    const liabList = ['Accounts Payable', 'Bank Loan', 'Accrued Expenses'];
    
    // Pick 1-2 assets and 1 liability to make it slightly complex? 
    // Or just totals for simplicity of calculation?
    // Let's do components for realism.
    
    const asset1Name = assetsList[Math.floor(Math.random() * assetsList.length)];
    const asset1Val = (Math.floor(Math.random() * 90) + 10) * 1000;
    
    const liab1Name = liabList[Math.floor(Math.random() * liabList.length)];
    const liab1Val = (Math.floor(Math.random() * 40) + 5) * 1000;
    
    const capitalVal = (Math.floor(Math.random() * 50) + 20) * 1000;
    
    // Mode: Find Asset, Find Liab, or Find Cap
    const mode = Math.floor(Math.random() * 3); // 0: Find A, 1: Find L, 2: Find C
    
    let question = '';
    let answer = 0;
    let context = {};
    
    /* 
       Scenario: 
       A business has the following items:
       [Items...]
       Calculate [Missing Item].
       
       Total A = Total L + C
    */
    
    if (mode === 0) {
        // Find Asset2. A1 + A2 = L1 + C
        // A2 = L1 + C - A1
        // Ensure positive
        const totalRight = liab1Val + capitalVal;
        const asset2Val = totalRight - asset1Val;
        if (asset2Val <= 0) return generateAccountingEqProblem(); // Retry
        
        context = {
            'Capital': capitalVal, 
            [liab1Name]: liab1Val,
            [asset1Name]: asset1Val
        };
        question = `Calculate the value of another asset (Cash/Other).`;
        answer = asset2Val;
    } else if (mode === 1) {
        // Find Liab2. A1 = L1 + L2 + C
        // L2 = A1 - L1 - C
        const assetTotal = (Math.floor(Math.random() * 100) + 100) * 1000;
        const knownLiab = liab1Val;
        const cap = (Math.floor(Math.random() * 40) + 10) * 1000;
        
        const targetLiab = assetTotal - knownLiab - cap;
        if (targetLiab <= 0) return generateAccountingEqProblem();
        
        context = {
            'Total Assets': assetTotal,
            [liab1Name]: knownLiab,
            'Capital': cap
        };
        question = `Calculate the value of ${liabList[(liabList.indexOf(liab1Name)+1)%liabList.length]}.`;
        answer = targetLiab;
    } else {
        // Find Capital. C = A - L
        const a = (Math.floor(Math.random() * 100) + 50) * 1000;
        const l = (Math.floor(Math.random() * 40) + 10) * 1000;
        
        context = {
            'Total Assets': a,
            'Total Liabilities': l
        };
        question = 'Calculate the Capital.';
        answer = a - l;
    }
    
    return {
        type: 'acc_eq',
        context,
        question,
        answer
    };
}

// 2. Ratios Generator (Comprehensive)
function generateRatioProblem() {
    const ratioTypes = [
        'Current Ratio', 'Quick Ratio', 'Gearing Ratio', 
        'Return on Capital Employed (ROCE)', 
        'Inventory Turnover', 
        'Trade Payables Turnover', 'Trade Receivables Turnover',
        'Total Assets Turnover',
        'Gross Profit Margin', 'Net Profit Margin'
    ];
    
    // Pick a random type
    const type = ratioTypes[Math.floor(Math.random() * ratioTypes.length)];
    
    let data = {};
    let answer = '';
    let subtext = 'Round to 2 decimal places';
    
    // Auto-generator helpers
    const getVal = (min, max) => (Math.floor(Math.random() * (max - min)) + min) * 1000;
    
    if (type === 'Current Ratio') {
        const cl = getVal(20, 100);
        const ca = Math.floor(cl * (Math.random() * 2 + 1.2));
        data = { 'Current Assets': ca, 'Current Liabilities': cl };
        answer = (ca / cl).toFixed(2) + ':1';
        subtext += ' (Format: x.xx:1)';
    }
    else if (type === 'Quick Ratio') {
        const cl = getVal(20, 100);
        const inventory = getVal(5, 30);
        const quickAssets = Math.floor(cl * (Math.random() * 1.5 + 0.8));
        const ca = quickAssets + inventory;
        data = { 'Current Assets': ca, 'Current Liabilities': cl, 'Inventory': inventory };
        answer = (quickAssets / cl).toFixed(2) + ':1';
        subtext += ' (Format: x.xx:1)';
    }
    else if (type === 'Gearing Ratio') {
        // NCL / (Shareholders' Fund + NCL) * 100%
        const ncl = getVal(50, 200);
        const equity = getVal(100, 500);
        data = { 'Non-current Liabilities': ncl, 'Shareholders\' Fund': equity };
        const val = (ncl / (ncl + equity)) * 100;
        answer = val.toFixed(2) + '%';
        subtext = 'Formula: NCL / (Equity + NCL)';
    }
    else if (type === 'Return on Capital Employed (ROCE)') {
        // EBIT / (Equity + NCL) * 100%
        const equity = getVal(100, 500);
        const ncl = getVal(50, 200);
        const capitalEmployed = equity + ncl;
        const ebit = Math.floor(capitalEmployed * (Math.random() * 0.15 + 0.05)); // 5-20% return
        data = { 'Net Profit before Interest & Tax': ebit, 'Shareholders\' Fund': equity, 'Non-current Liabilities': ncl };
        answer = ((ebit / capitalEmployed) * 100).toFixed(2) + '%';
    }
    else if (type === 'Inventory Turnover') {
        // COGS / Avg Inventory (times)
        const invOp = getVal(20, 50);
        const invCl = getVal(20, 50);
        const avgInv = (invOp + invCl) / 2;
        const turnover = (Math.random() * 5 + 3); // 3-8 times
        const cogs = Math.floor(avgInv * turnover);
        
        data = { 'Cost of Goods Sold': cogs, 'Opening Inventory': invOp, 'Closing Inventory': invCl };
        answer = (cogs / avgInv).toFixed(2) + ' times';
    }
    else if (type === 'Trade Payables Turnover') {
        // (Trade Payables / Credit Purchases) * 365 days
        const purchases = getVal(100, 500);
        const payables = Math.floor(purchases * (Math.random() * 0.1 + 0.08)); // ~30-60 days
        data = { 'Credit Purchases': purchases, 'Average Trade Payables': payables };
        const days = (payables / purchases) * 365;
        answer = days.toFixed(2) + ' days';
    }
    else if (type === 'Trade Receivables Turnover') {
        // (Trade Receivables / Credit Sales) * 365 days
        const sales = getVal(200, 800);
        const receivables = Math.floor(sales * (Math.random() * 0.1 + 0.08));
        data = { 'Credit Sales': sales, 'Average Trade Receivables': receivables };
        const days = (receivables / sales) * 365;
        answer = days.toFixed(2) + ' days';
    }
    else if (type === 'Total Assets Turnover') {
        // Sales / Total Assets
        const assets = getVal(500, 1000);
        const sales = Math.floor(assets * (Math.random() * 1.5 + 0.5));
        data = { 'Sales': sales, 'Total Assets': assets };
        answer = (sales / assets).toFixed(2) + ' times';
    }
    else if (type === 'Gross Profit Margin') {
        const sales = getVal(200, 800);
        const margin = (Math.random() * 0.3 + 0.2); // 20-50%
        const gp = Math.floor(sales * margin);
        data = { 'Sales': sales, 'Gross Profit': gp };
        answer = ((gp / sales) * 100).toFixed(2) + '%';
    }
    else if (type === 'Net Profit Margin') {
        const sales = getVal(200, 800);
        const margin = (Math.random() * 0.15 + 0.05); // 5-20%
        const np = Math.floor(sales * margin);
        data = { 'Sales': sales, 'Net Profit before Tax': np };
        answer = ((np / sales) * 100).toFixed(2) + '%';
    }

    return { type, data, answer, subtext };
}


// State
let currentBafsMode = null;
let currentBafsProblem = null;

function openBafsGame() {
    const modal = document.getElementById('articleModal'); // Reuse modal
    const listContainer = document.getElementById('articlesList');
    const dailyContainer = document.getElementById('dailyArticle');
    
    // Setup Menu
    listContainer.innerHTML = '';
    const modes = [
        { id: 'marketing', name: 'Accounting Equation' },
        { id: 'ratios', name: 'Financial Analysis' }
    ];
    
    modes.forEach(mode => {
        const item = document.createElement('div');
        item.className = 'article-item';
        item.textContent = mode.name;
        item.onclick = () => loadBafsMode(mode.id);
        listContainer.appendChild(item);
    });

    // Initial View
    dailyContainer.innerHTML = `
        <div class="chem-welcome" style="background: linear-gradient(135deg, #4fd1c5 0%, #38b2ac 100%);">
            <h3>BAFS Zone 📊</h3>
            <p>Master your business concepts!</p>
            <div class="chem-icons">📈 💰 📉</div>
        </div>
    `;

    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('show'), 10);
}

function loadBafsMode(mode) {
    currentBafsMode = mode;
    nextBafsProblem();
}

function nextBafsProblem() {
    const container = document.getElementById('dailyArticle');
    container.innerHTML = `<h3 class="daily-title">BAFS Practice: ${getBafsModeName(currentBafsMode)}</h3>`;
    
    const problemArea = document.createElement('div');
    problemArea.className = 'chem-problem-area'; // Reuse class for styling
    
    switch(currentBafsMode) {
        case 'marketing': 
            renderAccEq(problemArea);
            break;
        case 'ratios':
            renderRatios(problemArea);
            break;
    }
    
    container.appendChild(problemArea);
    
    // Result Area
    const resultDiv = document.createElement('div');
    resultDiv.id = 'bafsResult';
    resultDiv.className = 'game-result';
    container.appendChild(resultDiv);
    
    // Next Button
    const nextBtn = document.createElement('button');
    nextBtn.id = 'bafsNextBtn';
    nextBtn.className = 'recite-btn';
    nextBtn.style.display = 'none';
    nextBtn.textContent = 'Next Question ➡️';
    nextBtn.onclick = nextBafsProblem;
    container.appendChild(nextBtn);
}

function getBafsModeName(mode) {
    const names = {
        marketing: 'Accounting Equation',
        ratios: 'Financial Analysis'
    };
    return names[mode];
}

/* --- Render Functions --- */

function renderAccEq(container) {
    const prob = generateAccountingEqProblem();
    currentBafsProblem = prob;
    
    // Generate distractors
    const ans = prob.answer;
    const d1 = ans + 1000;
    const d2 = ans - 1000;
    const d3 = ans * 1.5;
    const options = [ans, d1, d2, d3].sort(() => Math.random() - 0.5);
    
    // Render Table of Data
    let dataHtml = '<table class="chem-table" style="margin: 0 auto 15px; width: 80%; text-align:left;">';
    for (const [key, val] of Object.entries(prob.context)) {
        dataHtml += `<tr><td>${key}</td><td style="text-align:right">$${val.toLocaleString()}</td></tr>`;
    }
    dataHtml += '</table>';

    container.innerHTML = `
        <div class="chem-card">
            <p>${prob.question}</p>
            ${dataHtml}
            <div class="chem-options">
                ${options.map(opt => 
                    `<button class="chem-opt-btn" onclick="checkBafsRaw(${opt})">$${opt.toLocaleString()}</button>`
                ).join('')}
            </div>
        </div>
    `;
}

function renderRatios(container) {
    const prob = generateRatioProblem();
    currentBafsProblem = prob;
    
    let dataHtml = '<table class="chem-table" style="margin: 0 auto 15px; width: 80%; text-align:left;">';
    for (const [key, val] of Object.entries(prob.data)) {
        dataHtml += `<tr><td>${key}</td><td style="text-align:right">$${val.toLocaleString()}</td></tr>`;
    }
    dataHtml += '</table>';
    
    container.innerHTML = `
        <div class="chem-card">
            <p>Calculate: <strong>${prob.type}</strong></p>
            ${dataHtml}
            <p class="chem-subtext">${prob.subtext || 'Round to 2 decimal places'}</p>
            <div class="chem-input-area">
                <input type="text" id="bafsInput" placeholder="Answer">
                <button class="recite-btn" onclick="checkBafsInputString()">Check</button>
            </div>
        </div>
    `;
}

/* --- Check Functions --- */

function checkBafsRaw(val) {
    const resultEl = document.getElementById('bafsResult');
    const nextBtn = document.getElementById('bafsNextBtn');
    
    if (val === currentBafsProblem.answer) {
        resultEl.textContent = 'Correct! ✅';
        resultEl.style.color = '#48bb78';
        nextBtn.style.display = 'inline-block';
    } else {
        resultEl.textContent = 'Try again. ❌';
        resultEl.style.color = '#f56565';
    }
}

// checkBafsInput removed (used by old Break-Even)

function checkBafsInputString() {
    const val = document.getElementById('bafsInput').value.trim();
    const correct = String(currentBafsProblem.answer);
    
    if (val === correct || parseFloat(val) === parseFloat(correct)) {
        document.getElementById('bafsResult').textContent = 'Correct! ✅';
        document.getElementById('bafsResult').style.color = '#48bb78';
        document.getElementById('bafsNextBtn').style.display = 'inline-block';
    } else {
        document.getElementById('bafsResult').textContent = `Incorrect. Correct answer: ${correct}`;
        document.getElementById('bafsResult').style.color = '#f56565';
    }
}
