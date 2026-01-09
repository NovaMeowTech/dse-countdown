
/* 
   Chemistry Game - Random Generator Version 
   Supports: Oxidation Numbers, Redox Reactants, Organic Naming, Empirical Formula, Titration
*/

// --- Generators ---

// --- Generators ---

// 1. Compositional Oxidation Generator
// Dynamic ion database
const parts = {
    cations: [
        { f: 'K', c: 1 }, { f: 'Na', c: 1 }, { f: 'Li', c: 1 }, { f: 'H', c: 1 },
        { f: 'Mg', c: 2 }, { f: 'Ca', c: 2 }, { f: 'Ba', c: 2 }, { f: 'Zn', c: 2 },
        { f: 'Al', c: 3 }, { f: 'NH₄', c: 1, t:'N', ox:'-3' }
    ],
    anions: [
        { f: 'Cl', c: -1 }, { f: 'Br', c: -1 }, { f: 'I', c: -1 },
        { f: 'O', c: -2 }, { f: 'OH', c: -1 },
        { f: 'NO₃', c: -1, t: 'N', ox: '+5' },
        { f: 'SO₄', c: -2, t: 'S', ox: '+6' },
        { f: 'CO₃', c: -2, t: 'C', ox: '+4' },
        { f: 'MnO₄', c: -1, t: 'Mn', ox: '+7' },
        { f: 'Cr₂O₇', c: -2, t: 'Cr', ox: '+6' },
        { f: 'PO₄', c: -3, t: 'P', ox: '+5' },
        { f: 'ClO₃', c: -1, t: 'Cl', ox: '+5' },
        { f: 'SO₃', c: -2, t: 'S', ox: '+4' }
    ],
    // Metals that can vary (Targets) - treated as Cations
    targets: [
        { f: 'Fe', c: 2, t: 'Fe', ox: '+2' }, { f: 'Fe', c: 3, t:'Fe', ox:'+3' },
        { f: 'Cu', c: 1, t: 'Cu', ox: '+1' }, { f: 'Cu', c: 2, t:'Cu', ox:'+2' },
        { f: 'Mn', c: 2, t: 'Mn', ox: '+2' }, { f: 'Cr', c: 3, t:'Cr', ox:'+3' }
    ]
};

function generateOxidationProblem() {
    // Strategy: Pick a "Target Ion" (interesting oxidation) and a "Counter Ion" (boring)
    
    let target, counter, isTargetCation;
    
    if (Math.random() > 0.4) {
        // Pick complex anion with target
        const complexAnions = parts.anions.filter(a => a.t);
        target = complexAnions[Math.floor(Math.random() * complexAnions.length)];
        counter = parts.cations[Math.floor(Math.random() * parts.cations.length)];
        isTargetCation = false;
    } else {
        // Pick variable metal cation
        target = parts.targets[Math.floor(Math.random() * parts.targets.length)];
        // Pick simple anion
        const simpleAnions = parts.anions.filter(a => !a.t || Math.random() > 0.5); 
        counter = simpleAnions[Math.floor(Math.random() * simpleAnions.length)];
        isTargetCation = true;
    }

    // Balance Formula: Ax By where x = counter.charge, y = target.charge
    const c1 = Math.abs(isTargetCation ? target.c : counter.c); // Cation charge
    const c2 = Math.abs(isTargetCation ? counter.c : target.c); // Anion charge
    
    // GCD function for simplification
    const gcd = (a, b) => b ? gcd(b, a % b) : a;
    const div = gcd(c1, c2);
    const nCat = c2 / div;
    const nAn = c1 / div;
    
    // Format
    const catStr = isTargetCation ? target.f : counter.f;
    const anStr = isTargetCation ? counter.f : target.f;
    
    // Parenthesis check
    const wrap = (ion, n) => {
        if (n === 1) return ion;
        const isPoly = ion.length > 2 || /\d/.test(ion);
        return isPoly ? `(${ion})` : ion;
    };
    
    const sub = (n) => {
        if (n === 1) return '';
        return String(n).replace(/\d/g, d => '₀₁₂₃₄₅₆₇₈₉'[d]);
    };
    
    // Assemble
    const catPart = wrap(catStr, nCat) + sub(nCat);
    const anPart = wrap(anStr, nAn) + sub(nAn);
    const formula = (catPart + anPart).replace(/[⁺⁻]/g, ''); 
    
    return {
        formula: formula,
        element: target.t,
        answer: target.ox
    };
}

// 2. Compositional Redox Generator
const redoxAgents = {
    oxidizing: [
        { name: 'Acidified KMnO₄', species: 'MnO₄⁻', needH: true, product: 'Mn²⁺' },
        { name: 'Acidified K₂Cr₂O₇', species: 'Cr₂O₇²⁻', needH: true, product: 'Cr³⁺' },
        { name: 'Chlorine Water', species: 'Cl₂', needH: false, product: 'Cl⁻' },
        { name: 'Bromine Water', species: 'Br₂', needH: false, product: 'Br⁻' },
        { name: 'Conc. HNO₃', species: 'NO₃⁻', needH: true, product: 'NO₂' }, 
        { name: 'Dilute HNO₃', species: 'NO₃⁻', needH: true, product: 'NO' }
    ],
    reducing: [
        { name: 'Kl solution', species: 'I⁻', product: 'I₂' },
        { name: 'Iron(II) Sulphate', species: 'Fe²⁺', product: 'Fe³⁺' },
        { name: 'Sodium Sulphite', species: 'SO₃²⁻', product: 'SO₄²⁻' },
        { name: 'Magnesium Ribbon', species: 'Mg', product: 'Mg²⁺' },
        { name: 'Zinc Granules', species: 'Zn', product: 'Zn²⁺' }
    ]
};

function generateRedoxProblem() {
    // Pick pairs
    const oa = redoxAgents.oxidizing[Math.floor(Math.random() * redoxAgents.oxidizing.length)];
    const ra = redoxAgents.reducing[Math.floor(Math.random() * redoxAgents.reducing.length)];
    
    // Context construction
    const context = `Reaction between ${oa.name} and ${ra.name}`;
    const answers = [oa.species, ra.species];
    
    // Check for H+ requirement
    if (oa.needH || oa.name.includes('Acid')) {
        if (!answers.includes('H⁺')) answers.push('H⁺');
    }
    
    // Generate logical distractors
    const spectators = ['K⁺', 'Na⁺', 'SO₄²⁻', 'H₂O', 'OH⁻', oa.product, ra.product];
    const uniqueSpectators = spectators.filter(s => !answers.includes(s));
    
    // Combine answers with random distractors
    const needed = 5 - answers.length;
    const safeDistractors = uniqueSpectators.sort(() => Math.random() - 0.5).slice(0, Math.max(0, needed));
    const finalOpts = [...answers, ...safeDistractors].sort(() => Math.random() - 0.5);

    return {
        context,
        question: 'Select the reacting species (Reactants)',
        options: finalOpts,
        answers: answers
    };
}

// 3. Organic Naming Generator
const prefixes = ['', 'Meth', 'Eth', 'Prop', 'But', 'Pent', 'Hex'];

function generateOrganicProblem() {
    const types = ['alkane', 'alkene', 'alcohol', 'acid', 'haloalkane'];
    const type = types[Math.floor(Math.random() * types.length)];
    
    let n = Math.floor(Math.random() * 5) + 1; // 1-5 carbons usually for typical qs
    if (type === 'alkene' && n < 2) n = 2;
    
    let name = '';
    let formula = '';
    let isomers = [];
    
    if (type === 'alkane') {
        name = prefixes[n] + 'ane';
        if (n === 1) formula = 'CH₄';
        else if (n === 2) formula = 'CH₃CH₃';
        else if (n === 3) formula = 'CH₃CH₂CH₃';
        else if (n === 4) formula = 'CH₃CH₂CH₂CH₃'; // Butane
        else if (n === 5) formula = 'CH₃CH₂CH₂CH₂CH₃'; // Pentane
        // Add branched isomer for n=4,5?
    } 
    else if (type === 'alkene') { // n >= 2
        let pos = 1;
        if (n >= 4) pos = Math.floor(Math.random() * 2) + 1; // 1 or 2
        
        if (n <= 3) name = prefixes[n] + 'ene'; // Ethene, Propene
        else name = prefixes[n] + '-' + pos + '-ene'; // But-1-ene
        
        // Formula construction
        if (n === 2) formula = 'CH₂=CH₂';
        else if (n === 3) formula = 'CH₃CH=CH₂';
        else if (n === 4) {
            if (pos === 1) formula = 'CH₂=CHCH₂CH₃';
            else formula = 'CH₃CH=CHCH₃';
        } else if (n === 5) {
             if (pos === 1) formula = 'CH₂=CHCH₂CH₂CH₃';
             else formula = 'CH₃CH=CHCH₂CH₃';
        }
    }
    else if (type === 'alcohol') {
        // Alkan-x-ol
        let pos = 1;
        if (n >= 3) pos = Math.floor(Math.random() * 2) + 1; // 1 or 2 (simplified)
        
        if (n < 3) name = prefixes[n] + 'anol'; // Methanol, Ethanol
        else name = prefixes[n] + 'an-' + pos + '-ol';
        
        if (n === 1) formula = 'CH₃OH';
        else if (n === 2) formula = 'CH₃CH₂OH';
        else if (n === 3) {
            if (pos === 1) formula = 'CH₃CH₂CH₂OH';
            else formula = 'CH₃CH(OH)CH₃';
        } else if (n === 4) {
            if (pos === 1) formula = 'CH₃CH₂CH₂CH₂OH';
            else formula = 'CH₃CH₂CH(OH)CH₃'; // Butan-2-ol
        } else if (n === 5) {
             formula = 'C₅H₁₁OH'; // Simplify for pent
             name = 'Pentanol'; // Simplify
        }
    }
    else if (type === 'acid') {
        name = prefixes[n] + 'anoic acid';
        if (n === 1) formula = 'HCOOH';
        else if (n === 2) formula = 'CH₃COOH';
        else if (n === 3) formula = 'CH₃CH₂COOH';
        else if (n === 4) formula = 'CH₃CH₂CH₂COOH';
        else if (n === 5) formula = 'CH₃CH₂CH₂CH₂COOH';
    }
    else if (type === 'haloalkane') {
        const halogens = [{ n: 'Chloro', s: 'Cl' }, { n: 'Bromo', s: 'Br' }];
        const h = halogens[Math.floor(Math.random() * halogens.length)];
        
        let pos = 1;
        if (n >= 3) pos = Math.floor(Math.random() * 2) + 1;
        
        if (n === 1) name = h.n + 'methane';
        else if (n === 2) name = h.n + 'ethane';
        else name = pos + '-' + h.n.toLowerCase() + prefixes[n].toLowerCase() + 'ane';
        
        if (n === 1) formula = 'CH₃' + h.s;
        else if (n === 2) formula = 'CH₃CH₂' + h.s;
        else if (n === 3) {
            if (pos === 1) formula = 'CH₃CH₂CH₂' + h.s;
            else formula = 'CH₃CH(' + h.s + ')CH₃';
        }
        else {
            // lazy fallback for n>3 to prevent complex string building errors
             formula = `C${n}H${2*n+1}${h.s}`; 
             name = `Haloalkane (${n} carbons)`; // Fallback if logic fails, but let's constrain n
        }
    }
    
    // Safety check
    if (!formula) {
        formula = 'CH₄'; name = 'Methane';
    }
    
    return {
        formula: formula,
        name: name
    };
}


// State
let currentChemMode = null;
let currentChemProblem = null;

function openChemGame() {
    const modal = document.getElementById('articleModal');
    // Using Article Modal structure but customizing content
    const listContainer = document.getElementById('articlesList');
    const dailyContainer = document.getElementById('dailyArticle');
    
    // Setup Menu
    listContainer.innerHTML = '';
    const modes = [
        { id: 'oxidation', name: 'Oxidation Number' },
        { id: 'redox', name: 'Redox Reactants' },
        { id: 'naming', name: 'Naming (Organic)' },
        { id: 'empirical', name: 'Empirical Formula' },
        { id: 'titration', name: 'Titration Calc' }
    ];
    
    modes.forEach(mode => {
        const item = document.createElement('div');
        item.className = 'article-item';
        item.textContent = mode.name;
        item.onclick = () => loadChemMode(mode.id);
        listContainer.appendChild(item);
    });

    // Initial View
    dailyContainer.innerHTML = `
        <div class="chem-welcome">
            <h3>Chemistry Zone 🧪</h3>
            <p>Select a topic from the left to practice!</p>
            <div class="chem-icons">⚛️ ⚗️ 🧪</div>
        </div>
    `;

    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('show'), 10);
}

function loadChemMode(mode) {
    currentChemMode = mode;
    // Generate first problem
    nextChemProblem();
}

function nextChemProblem() {
    const container = document.getElementById('dailyArticle');
    container.innerHTML = `<h3 class="daily-title">Chemistry Practice: ${getModeName(currentChemMode)}</h3>`;
    
    const problemArea = document.createElement('div');
    problemArea.className = 'chem-problem-area';
    
    switch(currentChemMode) {
        case 'oxidation':
            renderOxidation(problemArea);
            break;
        case 'redox':
            renderRedox(problemArea);
            break;
        case 'naming':
            renderNaming(problemArea);
            break;
        case 'empirical':
            renderEmpirical(problemArea);
            break;
        case 'titration':
            renderTitration(problemArea);
            break;
    }
    
    container.appendChild(problemArea);
    
    // Add Result Area and Next Button
    const resultDiv = document.createElement('div');
    resultDiv.id = 'chemResult';
    resultDiv.className = 'game-result';
    container.appendChild(resultDiv);
    
    // Next button hidden initially
    const nextBtn = document.createElement('button');
    nextBtn.id = 'chemNextBtn';
    nextBtn.className = 'recite-btn';
    nextBtn.style.display = 'none';
    nextBtn.textContent = 'Next Question ➡️';
    nextBtn.onclick = nextChemProblem;
    container.appendChild(nextBtn);
}

function getModeName(mode) {
    const names = {
        oxidation: 'Oxidation Number',
        redox: 'Redox Reactions',
        naming: 'Naming Compounds',
        empirical: 'Empirical Formula',
        titration: 'Titration'
    };
    return names[mode] || mode;
}

/* --- Render Functions --- */

function renderOxidation(container) {
    const item = generateOxidationProblem();
    currentChemProblem = item;
    
    // Generate dynamic options
    const pool = new Set();
    pool.add(item.answer);
    
    // Fill up to 10 options with reasonable distractors
    while(pool.size < 10) {
        const val = Math.floor(Math.random() * 13) - 4; // -4 to +8
        const signVal = val > 0 ? '+' + val : '' + val;
        pool.add(signVal);
    }
    
    const options = Array.from(pool).sort((a,b) => parseInt(a) - parseInt(b));
    
    container.innerHTML = `
        <div class="chem-card">
            <div class="chem-formula big">${item.formula}</div>
            <p>What is the oxidation number of <strong>${item.element}</strong>?</p>
            <div class="chem-options">
                ${options.map(opt => 
                    `<button class="chem-opt-btn" onclick="checkOxidation('${opt}')">${opt}</button>`
                ).join('')}
            </div>
        </div>
    `;
}

function checkOxidation(ans) {
    const resultEl = document.getElementById('chemResult');
    const nextBtn = document.getElementById('chemNextBtn');
    
    if (ans === currentChemProblem.answer) {
        resultEl.textContent = 'Correct! ✅';
        resultEl.style.color = '#48bb78';
        nextBtn.style.display = 'inline-block';
    } else {
        resultEl.textContent = 'Try again! ❌';
        resultEl.style.color = '#f56565';
    }
}

function renderRedox(container) {
    const item = generateRedoxProblem();
    currentChemProblem = item;
    currentChemProblem.userSelection = new Set();
    
    // Shuffle options
    const options = [...item.options].sort(() => Math.random() - 0.5);

    container.innerHTML = `
        <div class="chem-card">
            <p class="chem-context">${item.context}</p>
            <p>${item.question}</p>
            <div class="chem-options" id="redoxOptions">
                ${options.map(opt => 
                    `<button class="chem-opt-btn" onclick="toggleRedox('${opt}', this)">${opt}</button>`
                ).join('')}
            </div>
            <button class="recite-btn" style="margin-top:20px" onclick="checkRedox()">Submit</button>
        </div>
    `;
}

function toggleRedox(opt, btn) {
    if (currentChemProblem.userSelection.has(opt)) {
        currentChemProblem.userSelection.delete(opt);
        btn.classList.remove('selected');
    } else {
        currentChemProblem.userSelection.add(opt);
        btn.classList.add('selected');
    }
}

function checkRedox() {
    const selection = Array.from(currentChemProblem.userSelection);
    const answers = currentChemProblem.answers;
    
    // Check if correct
    // Logic: correct selection count == answer count, and no wrong items
    const isCorrect = selection.length === answers.length && 
                      selection.every(s => answers.includes(s));
    
    const resultEl = document.getElementById('chemResult');
    const nextBtn = document.getElementById('chemNextBtn');
    
    if (isCorrect) {
        resultEl.textContent = 'Correct! The reacting species are ' + answers.join(', ') + ' ✅';
        resultEl.style.color = '#48bb78';
        nextBtn.style.display = 'inline-block';
    } else {
        resultEl.textContent = 'Not quite. Try again! (Hint: Generally look for Oxidizing Agent, Reducing Agent, and H+)';
        resultEl.style.color = '#f56565';
    }
}

function renderNaming(container) {
    const item = generateOrganicProblem();
    currentChemProblem = item;
    const isToName = Math.random() > 0.5;
    currentChemProblem.type = isToName ? 'toName' : 'toFormula';
    
    // Generate distractors procedurally
    const distractors = getNamingDistractors(item, isToName ? 'name' : 'formula');
    
    // Mix and shuffle
    const options = [...distractors, isToName ? item.name : item.formula].sort(() => Math.random() - 0.5);
    
    container.innerHTML = `
        <div class="chem-card">
            <h3>Organic Chemistry Naming</h3>
            <div class="chem-formula big">${isToName ? item.formula : item.name}</div>
            <p>Select the correct ${isToName ? 'IUPAC Name' : 'Structural/Molecular Formula'}:</p>
            <div class="chem-list-options">
                ${options.map(opt => 
                    `<div class="chem-list-opt" onclick="checkNaming('${opt}')">${opt}</div>`
                ).join('')}
            </div>
        </div>
    `;
}

function getNamingDistractors(correctItem, targetProp) {
    // Generate 3 random other problems and take their names/formulas
    const others = [];
    for(let i=0; i<3; i++) {
        let fake = generateOrganicProblem();
        // Naive retry if duplicate
        if(fake.name === correctItem.name) fake = generateOrganicProblem();
        others.push(fake[targetProp]);
    }
    return others;
}

function checkNaming(ans) {
    const correct = currentChemProblem.type === 'toName' ? currentChemProblem.name : currentChemProblem.formula;
    const resultEl = document.getElementById('chemResult');
    const nextBtn = document.getElementById('chemNextBtn');
    
    if (ans === correct) {
        resultEl.textContent = 'Correct! ✅';
        resultEl.style.color = '#48bb78';
        nextBtn.style.display = 'inline-block';
    } else {
        resultEl.textContent = 'Wrong answer. ❌';
        resultEl.style.color = '#f56565';
    }
}

function renderEmpirical(container) {
    // Generate random mole ratio
    const elements = [
        { sym: 'C', mass: 12 }, { sym: 'H', mass: 1 }, { sym: 'O', mass: 16 }, 
        { sym: 'N', mass: 14 }, { sym: 'Mg', mass: 24.3 }, { sym: 'S', mass: 32.1 },
        { sym: 'Cl', mass: 35.5 }, { sym: 'Na', mass: 23 }, { sym: 'Ca', mass: 40.1 },
        { sym: 'Cu', mass: 63.5 }, { sym: 'Fe', mass: 55.8 }, { sym: 'Pb', mass: 207.2 }
    ];
    
    const e1 = elements[Math.floor(Math.random() * elements.length)];
    let e2 = elements[Math.floor(Math.random() * elements.length)];
    while (e2 === e1) e2 = elements[Math.floor(Math.random() * elements.length)];
    
    // Pick ratio integers 1-4
    const n1 = Math.floor(Math.random() * 3) + 1;
    const n2 = Math.floor(Math.random() * 3) + 1;
    
    // Calculate reacting masses
    const mass1 = (n1 * e1.mass).toFixed(2);
    const mass2 = (n2 * e2.mass).toFixed(2);
    
    // Formatting: Subscripts (simple)
    const formula = `${e1.sym}${n1 > 1 ? n1 : ''}${e2.sym}${n2 > 1 ? n2 : ''}`;
    currentChemProblem = { answer: formula };
    
    // Generate distractors
    const wrong1 = `${e1.sym}${n2 > 1 ? n2 : ''}${e2.sym}${n1 > 1 ? n1 : ''}`;
    const wrong2 = `${e1.sym}${n1 > 1 ? n1 : ''}${e2.sym}${n2+1}`;
    const wrong3 = `${e1.sym}${n1+1}${e2.sym}${n2 > 1 ? n2 : ''}`;
    const options = [...new Set([formula, wrong1, wrong2, wrong3])].sort(() => Math.random() - 0.5);

    container.innerHTML = `
        <div class="chem-card">
            <p>Determine the empirical formula given the following reacting masses:</p>
            <div class="chem-data-row">
                <span> Element <strong>${e1.sym}</strong>: ${mass1} g (RAM: ${e1.mass})</span>
            </div>
            <div class="chem-data-row">
                <span> Element <strong>${e2.sym}</strong>: ${mass2} g (RAM: ${e2.mass})</span>
            </div>
            <div class="chem-options">
                ${options.map(opt => `<button class="chem-opt-btn" onclick="checkEmpirical('${opt}')">${opt}</button>`).join('')}
            </div>
        </div>
    `;
}

function checkEmpirical(ans) {
    const resultEl = document.getElementById('chemResult');
    const nextBtn = document.getElementById('chemNextBtn');
    
    if (ans === currentChemProblem.answer) {
        resultEl.textContent = 'Correct! ✅';
        resultEl.style.color = '#48bb78';
        nextBtn.style.display = 'inline-block';
    } else {
        resultEl.textContent = 'Try again. (Hint: Calculate moles = mass/RAM, then find simplest ratio)';
        resultEl.style.color = '#f56565';
    }
}

function renderTitration(container) {
    // M_a V_a / n_a = M_b V_b / n_b
    // Scenario: NaOH (n=1) vs H2SO4 (n=2)
    const acid = { name: 'H₂SO₄', n: 2 };
    const base = { name: 'NaOH', n: 1 };
    
    const Ma = (Math.random() * 0.5 + 0.1).toFixed(2); // 0.1 - 0.6 M
    const Va_val = ((Math.random() * 20) + 10);
    const Va = Va_val.toFixed(1);
    const Mb = '??';
    const Vb_val = ((Math.random() * 20) + 10);
    const Vb = Vb_val.toFixed(1);
    
    // Calculation
    // (Ma * Va) / 2 = (Mb_real * Vb) / 1
    // Mb_real = (Ma * Va) / (2 * Vb)
    const Mb_real = (parseFloat(Ma) * parseFloat(Va)) / (2 * parseFloat(Vb));
    const answer = Mb_real.toFixed(3);
    
    currentChemProblem = { answer };
    
    container.innerHTML = `
        <div class="chem-card">
            <p>Titration Calculation:</p>
            <p><strong>${Va} cm³</strong> of <strong>${Ma} M</strong> ${acid.name} completely neutralizes <strong>${Vb} cm³</strong> of ${base.name}.</p>
            <p class="chem-subtext">Reaction: ${acid.name} + 2${base.name} → Na₂SO₄ + 2H₂O</p>
            <p>Calculate the concentration of ${base.name} (in M) to 3 decimal places.</p>
            <div class="chem-input-area">
                <input type="number" id="titrationInput" step="0.001" placeholder="0.000"> M
                <button class="recite-btn" onclick="checkTitration()">Check</button>
            </div>
        </div>
    `;
}

function checkTitration() {
    const val = parseFloat(document.getElementById('titrationInput').value);
    const correct = parseFloat(currentChemProblem.answer);
    
    // Allow small error margin
    const diff = Math.abs(val - correct);
    const resultEl = document.getElementById('chemResult');
    const nextBtn = document.getElementById('chemNextBtn');
    
    if (diff < 0.05) { // generous margin
        resultEl.textContent = `Correct! (${correct} M) ✅`;
        resultEl.style.color = '#48bb78';
        nextBtn.style.display = 'inline-block';
    } else {
        resultEl.textContent = `Incorrect. Correct answer: ${correct} M`;
        resultEl.style.color = '#f56565';
    }
}
