// DSE 2026 exam schedule (Official timetable revised on 31 October 2025)
const dseExams = {
    'visual_arts': {
        name: 'Visual Arts 視覺藝術',
        englishName: 'Visual Arts',
        papers: [
            { paper: '卷一及卷二', date: new Date('2026-04-08T08:30:00') }
        ]
    },
    'chinese': {
        name: '中國語文',
        englishName: 'Chinese Language',
        isCore: true,
        papers: [
            { paper: 'Chinese Language 1 中國語文（一）', date: new Date('2026-04-09T08:30:00') },
            { paper: 'Chinese Language 2 中國語文（二）', date: new Date('2026-04-09T10:45:00') }
        ]
    },
    'english': {
        name: 'English Language 英國語文',
        englishName: 'English Language',
        isCore: true,
        papers: [
            { paper: 'English Language 1 英國語文（一）', date: new Date('2026-04-10T08:30:00') },
            { paper: 'English Language 2 英國語文（二）', date: new Date('2026-04-10T11:00:00') },
            { paper: 'English Language 3 (Listening) 英國語文（三）（聆聽及綜合能力考核）', date: new Date('2026-04-11T09:15:00') }
        ]
    },
    'maths': {
        name: 'Mathematics 數學（必修部分）',
        englishName: 'Mathematics',
        isCore: true,
        papers: [
            { paper: 'Mathematics Compulsory Part 1 數學必修部分（一）', date: new Date('2026-04-13T08:30:00') },
            { paper: 'Mathematics Compulsory Part 2 數學必修部分（二）', date: new Date('2026-04-13T11:30:00') }
        ]
    },
    'cs': {
        name: 'Citizenship and Social Development 公民與社會發展',
        englishName: 'Citizenship and Social Development',
        isCore: true,
        papers: [
            { paper: 'Citizenship and Social Development 公民與社會發展', date: new Date('2026-04-14T08:30:00') }
        ]
    },
    'ethics': {
        name: 'Ethics & Religious Studies 倫理與宗教',
        englishName: 'Ethics & Religious Studies',
        papers: [
            { paper: '卷一', date: new Date('2026-04-15T08:30:00') },
            { paper: '卷二', date: new Date('2026-04-15T11:00:00') }
        ]
    },
    'chemistry': {
        name: 'Chemistry 化學',
        englishName: 'Chemistry',
        papers: [
            { paper: 'Chemistry 1 化學（一）', date: new Date('2026-04-16T08:30:00') },
            { paper: 'Chemistry 2 化學（二）', date: new Date('2026-04-16T11:45:00') }
        ]
    },
    'design_tech': {
        name: 'Design & Applied Technology 設計與應用科技',
        englishName: 'Design & Applied Technology',
        papers: [
            { paper: '卷一', date: new Date('2026-04-17T08:30:00') },
            { paper: '卷二', date: new Date('2026-04-17T11:15:00') }
        ]
    },
    'literature': {
        name: 'Literature in English 英語文學',
        englishName: 'Literature in English',
        papers: [
            { paper: '卷一', date: new Date('2026-04-17T08:30:00') },
            { paper: '卷二', date: new Date('2026-04-17T13:30:00') }
        ]
    },
    'health': {
        name: 'Health Management & Social Care 健康管理與社會關懷',
        englishName: 'Health Management & Social Care',
        papers: [
            { paper: '卷一', date: new Date('2026-04-18T08:30:00') },
            { paper: '卷二', date: new Date('2026-04-18T11:15:00') }
        ]
    },
    'biology': {
        name: 'Biology 生物',
        englishName: 'Biology',
        papers: [
            { paper: 'Biology 1 生物（一）', date: new Date('2026-04-20T08:30:00') },
            { paper: 'Biology 2 生物（二）', date: new Date('2026-04-20T11:45:00') }
        ]
    },
    'chinese_literature': {
        name: 'Chinese Literature 中國文學',
        englishName: 'Chinese Literature',
        papers: [
            { paper: '卷一', date: new Date('2026-04-21T08:30:00') },
            { paper: '卷二', date: new Date('2026-04-21T11:15:00') }
        ]
    },
    'tech_living': {
        name: 'Technology & Living 科技與生活',
        englishName: 'Technology & Living',
        papers: [
            { paper: '卷一', date: new Date('2026-04-21T08:30:00') },
            { paper: '卷二', date: new Date('2026-04-21T10:45:00') }
        ]
    },
    'physics': {
        name: 'Physics 物理',
        englishName: 'Physics',
        papers: [
            { paper: 'Physics 1 物理（一）', date: new Date('2026-04-22T08:30:00') },
            { paper: 'Physics 2 物理（二）', date: new Date('2026-04-22T11:45:00') }
        ]
    },
    'geography': {
        name: 'Geography 地理',
        englishName: 'Geography',
        papers: [
            { paper: 'Geography 1 地理（一）', date: new Date('2026-04-23T08:30:00') },
            { paper: 'Geography 2 地理（二）', date: new Date('2026-04-23T12:00:00') }
        ]
    },
    'ict': {
        name: 'Information & Communication Technology 資訊及通訊科技',
        englishName: 'ICT',
        papers: [
            { paper: 'ICT 1 資訊及通訊科技（一）', date: new Date('2026-04-24T08:30:00') },
            { paper: 'ICT 2 資訊及通訊科技（二）', date: new Date('2026-04-24T11:15:00') }
        ]
    },
    'history': {
        name: 'History 歷史',
        englishName: 'History',
        papers: [
            { paper: 'History 1 歷史（一）', date: new Date('2026-04-25T08:30:00') },
            { paper: 'History 2 歷史（二）', date: new Date('2026-04-25T11:15:00') }
        ]
    },
    'bafs': {
        name: 'Business, Accounting & Financial Studies 企業、會計與財務概論',
        englishName: 'BAFS',
        papers: [
            { paper: '卷一', date: new Date('2026-04-27T08:30:00') },
            { paper: '卷二', date: new Date('2026-04-27T10:15:00') }
        ]
    },
    'pe': {
        name: 'Physical Education 體育',
        englishName: 'Physical Education',
        papers: [
            { paper: '卷一', date: new Date('2026-04-28T08:30:00') },
            { paper: '卷二', date: new Date('2026-04-28T11:15:00') }
        ]
    },
    'chinese_history': {
        name: 'Chinese History 中國歷史',
        englishName: 'Chinese History',
        papers: [
            { paper: '卷一', date: new Date('2026-04-29T08:30:00') },
            { paper: '卷二', date: new Date('2026-04-29T11:30:00') }
        ]
    },
    'maths_extended': {
        name: 'Mathematics Extended Part 數學（延伸部分）',
        englishName: 'Mathematics M1/M2',
        papers: [
            { paper: 'Modules 1,2 單元（一）及（二）', date: new Date('2026-04-30T08:30:00') }
        ]
    },
    'tourism': {
        name: 'Tourism & Hospitality Studies 旅遊與款待',
        englishName: 'Tourism & Hospitality Studies',
        papers: [
            { paper: '卷一', date: new Date('2026-05-02T08:30:00') },
            { paper: '卷二', date: new Date('2026-05-02T10:45:00') }
        ]
    },
    'economics': {
        name: 'Economics 經濟',
        englishName: 'Economics',
        papers: [
            { paper: 'Economics 1 經濟（一）', date: new Date('2026-05-04T08:30:00') },
            { paper: 'Economics 2 經濟（二）', date: new Date('2026-05-04T10:15:00') }
        ]
    },
    'music': {
        name: 'Music 音樂',
        englishName: 'Music',
        papers: [
            { paper: '1A', date: new Date('2026-05-05T08:30:00') },
            { paper: '1B', date: new Date('2026-05-05T10:45:00') }
        ]
    }
};

// Encouragement messages in Cantonese
const encouragementMessages = [
    '加油！你一定得㗎！💪',
    '努力溫習，成功在望！🌟',
    '堅持就係勝利！📚',
    '相信自己，你做得到！✨',
    '每一日都係進步嘅一步！🎯',
    '唔好放棄，勝利就喺前面！🏆',
    '溫書雖然辛苦，但係為咗將來！🚀',
    '你係最叻嘅！繼續努力！⭐',
    '今日嘅努力，係明日嘅成功！🌈',
    'DSE 只係人生一個階段，保持心境！💖',
    '夢想由今日開始，加油！🎓',
    '你嘅付出，終會有回報！🌺',
    '保持信心，迎接挑戰！💎',
    '每一次溫習都係向目標邁進！🎪',
    '唔使驚，你已經做得好好！🌸',
    '專注當下，成功自然來！🔥',
    '你比想像中更強大！⚡',
    '堅持到底，勝利屬於你！🎉',
    '相信過程，享受學習！🌻',
    '你嘅努力，大家都睇得到！👏',
    '每日進步一點點，就係成功！📈',
    '保持熱情，追逐夢想！🦋',
    '唔好同人比較，做最好嘅自己！🌟',
    '困難只係暫時，成功永遠屬於你！💫',
    '相信自己嘅能力，你可以做到！🎯',
    '今日嘅汗水，係明日嘅笑容！😊',
    '堅持夢想，永不放棄！🌈',
    '你嘅未來，由你創造！✨',
    '每一步都係向成功靠近！🚶',
    '保持積極，好運自然來！🍀',
    '攰就休息一陣，返嚟再戰。',
    '今日專注一小時，已經好叻。',
    '考試靠累積：10 分鐘都算數。',
    '慢慢嚟，唔會遲；你係行緊路。',
    '吸一口氣，寫低下一步要做乜。',
    '你唔係一個人，大家都喺度努力。'
];

// Get core subjects (cannot be deselected)
function getCoreSubjects() {
    return Object.keys(dseExams).filter(key => dseExams[key].isCore);
}

// Load saved subjects from localStorage
function loadSavedSubjects() {
    const coreSubjects = getCoreSubjects();
    const saved = localStorage.getItem('dse_selected_subjects');
    if (saved) {
        try {
            const savedSubjects = JSON.parse(saved);
            // Ensure core subjects are always included
            const allSubjects = [...new Set([...coreSubjects, ...savedSubjects])];
            return allSubjects;
        } catch (e) {
            console.warn('Failed to parse saved subjects from localStorage, using defaults:', e);
            return coreSubjects;
        }
    }
    return coreSubjects;
}

// Load custom dates from localStorage
function loadCustomDates() {
    const saved = localStorage.getItem('dse_custom_dates');
    if (saved) {
        try {
            return JSON.parse(saved);
        } catch (e) {
            console.warn('Failed to parse saved dates:', e);
            return {};
        }
    }
    return {};
}

// Save selected subjects to localStorage
function saveSelectedSubjects(subjects) {
    localStorage.setItem('dse_selected_subjects', JSON.stringify(subjects));
}

// Save custom dates
function saveCustomDates(dates) {
    localStorage.setItem('dse_custom_dates', JSON.stringify(dates));
}

// Initialize selected subjects and custom dates
let selectedSubjects = loadSavedSubjects();
let customDates = loadCustomDates();

// Create subject selection buttons
function createSubjectButtons() {
    const container = document.getElementById('subjectButtons');
    container.innerHTML = '';
    
    const coreSubjects = getCoreSubjects();
    
    Object.keys(dseExams).forEach(subjectKey => {
        const button = document.createElement('button');
        button.className = 'subject-btn';
        button.textContent = dseExams[subjectKey].name;
        button.dataset.subject = subjectKey;
        
        const isCore = coreSubjects.includes(subjectKey);
        
        if (selectedSubjects.includes(subjectKey)) {
            button.classList.add('selected');
        }
        
        if (isCore) {
            button.classList.add('core');
            button.title = '核心科目（不可取消） Core Subject (Cannot be deselected)';
        }
        
        button.addEventListener('click', () => {
            // Core subjects cannot be deselected
            if (isCore) {
                return;
            }
            
            const index = selectedSubjects.indexOf(subjectKey);
            if (index > -1) {
                selectedSubjects.splice(index, 1);
                button.classList.remove('selected');
            } else {
                selectedSubjects.push(subjectKey);
                button.classList.add('selected');
            }
            saveSelectedSubjects(selectedSubjects);
        });
        
        container.appendChild(button);
    });

    // Setup custom date inputs
    const customDateContainer = document.getElementById('customDateInputs');
    if (customDateContainer) {
        const engOralInput = document.getElementById('engOralDate');
        if (engOralInput && customDates.englishOral) {
            engOralInput.value = customDates.englishOral;
        }
    }
}

// Modal handling
function initModal() {
    const modal = document.getElementById('subjectModal');
    const btn = document.getElementById('settingsBtn');
    const span = document.getElementsByClassName('close-modal')[0];
    const saveBtn = document.getElementById('saveBtn');
    const clearOralBtn = document.getElementById('clearOralDate');
    const engOralInput = document.getElementById('engOralDate');

    if (clearOralBtn && engOralInput) {
        clearOralBtn.onclick = function() {
            engOralInput.value = '';
            delete customDates.englishOral;
            saveCustomDates(customDates);
        }
    }

    btn.onclick = function() {
        modal.style.display = "flex";
        setTimeout(() => modal.classList.add('show'), 10);
        createSubjectButtons(); // Refresh buttons state
    }

    const closeModal = function() {
        modal.classList.remove('show');
        setTimeout(() => modal.style.display = "none", 300);
    }

    span.onclick = closeModal;

    saveBtn.onclick = function() {
        // Save custom dates
        const engOralInput = document.getElementById('engOralDate');
        if (engOralInput) {
            customDates.englishOral = engOralInput.value;
            saveCustomDates(customDates);
        }

        updateCountdownDisplay();
        createHeroCountdown();
        createFreedomCountdown();
        closeModal();
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            closeModal();
        }
    }
}

// Calculate time remaining
function getTimeRemaining(endDate) {
    const now = new Date();
    const total = endDate - now;
    
    if (total <= 0) {
        return {
            total: 0,
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            isPast: true
        };
    }
    
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    
    return {
        total,
        days,
        hours,
        minutes,
        seconds,
        isPast: false
    };
}

// Format date for display
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    
    return `${year}年${month}月${day}日 ${hours}:${minutes}`;
}

function updateTextWithTick(el, value) {
    if (!el) return;

    const nextText = String(value);
    if (el.textContent === nextText) return;

    el.textContent = nextText;

    // Restart animation reliably
    el.classList.remove('countdown-tick');
    void el.offsetWidth;
    el.classList.add('countdown-tick');

    window.setTimeout(() => {
        el.classList.remove('countdown-tick');
    }, 170);
}

// Create countdown card for a paper
function createCountdownCard(subjectKey, paper, index) {
    const card = document.createElement('div');
    card.className = 'countdown-card';
    
    const timeRemaining = getTimeRemaining(paper.date);
    const isPast = timeRemaining.isPast;
    
    if (isPast) {
        card.classList.add('past');
    }

    // Stagger entrance animation
    card.style.animationDelay = `${index * CARD_ENTRANCE_STAGGER_MS}ms`;

    const toggleMaximize = () => {
        const isMaximized = card.classList.toggle('maximized');
        document.body.style.overflow = isMaximized ? 'hidden' : 'auto';
        maxBtn.innerHTML = isMaximized ? '✖' : '⛶';
        maxBtn.title = isMaximized ? 'Minimize' : 'Maximize';
    };
    
    card.innerHTML = `
        <button class="maximize-btn" title="Maximize">⛶</button>
        <div class="card-header">
            <h3 class="subject-name">${dseExams[subjectKey].name}</h3>
            <p class="paper-name">${paper.paper}</p>
        </div>
        <div class="exam-date">${formatDate(paper.date)}</div>
        <div class="countdown-display" data-end="${paper.date.toISOString()}">
            ${isPast ? buildExamDoneHTML() : `
            <div class="time-unit">
                <span class="time-value days">${timeRemaining.days}</span>
                <span class="time-label">日</span>
            </div>
            <div class="time-unit">
                <span class="time-value hours">${timeRemaining.hours}</span>
                <span class="time-label">時</span>
            </div>
            <div class="time-unit">
                <span class="time-value minutes">${timeRemaining.minutes}</span>
                <span class="time-label">分</span>
            </div>
            <div class="time-unit">
                <span class="time-value seconds">${timeRemaining.seconds}</span>
                <span class="time-label">秒</span>
            </div>
            `}
        </div>
        ${subjectKey === 'chemistry' ? `<button class="chem-practice-btn" onclick="openChemGame(event)">🧪 Practice Chemistry</button>` : ''}
        ${subjectKey === 'bafs' ? `<button class="bafs-practice-btn" onclick="openBafsGame(event)">📊 Practice BAFS</button>` : ''}
    `;

    if (isPast) {
        spawnConfetti(card);
    }
    
    const maxBtn = card.querySelector('.maximize-btn');
    maxBtn.onclick = (e) => {
        e.stopPropagation();
        toggleMaximize();
    };
    
    return card;
}

// Update countdown display
function updateCountdownDisplay() {
    const container = document.getElementById('countdownGrid');
    container.innerHTML = '';
    
    // Sort all papers by date
    const allPapers = [];
    selectedSubjects.forEach(subjectKey => {
        if (dseExams[subjectKey]) {
            dseExams[subjectKey].papers.forEach(paper => {
                allPapers.push({
                    subjectKey,
                    paper
                });
            });
        }
    });

    // Add custom exams
    if (customDates.englishOral && selectedSubjects.includes('english')) {
        const oralDate = new Date(customDates.englishOral);
        if (!isNaN(oralDate.getTime())) {
            allPapers.push({
                subjectKey: 'english',
                paper: {
                    paper: 'English Language 4 (Speaking) 英國語文（四）（口試）',
                    date: oralDate
                }
            });
        }
    }
    
    allPapers.sort((a, b) => a.paper.date - b.paper.date);
    
    if (allPapers.length === 0) {
        container.innerHTML = '<div class="no-subjects">請選擇至少一個科目</div>';
        return;
    }
    
    allPapers.forEach(({ subjectKey, paper }, idx) => {
        const card = createCountdownCard(subjectKey, paper, idx);
        container.appendChild(card);
    });
}


// Update all countdowns
function updateCountdowns() {
    const countdownDisplays = document.querySelectorAll('.countdown-display');
    
    countdownDisplays.forEach(display => {
        const endDateStr = display.dataset.end;
        if (!endDateStr) return;
        
        const endDate = new Date(endDateStr);
        const timeRemaining = getTimeRemaining(endDate);
        
        if (timeRemaining.isPast) {
            if (!display.innerHTML.includes('exam-done')) {
                display.innerHTML = buildExamDoneHTML();
                const card = display.parentElement;
                card.classList.add('past');
                spawnConfetti(card);
                // Re-evaluate hero if current hero becomes past
                createHeroCountdown();
            }
            return;
        }
        
        const daysEl = display.querySelector('.days');
        const hoursEl = display.querySelector('.hours');
        const minutesEl = display.querySelector('.minutes');
        const secondsEl = display.querySelector('.seconds');

        updateTextWithTick(daysEl, timeRemaining.days);
        updateTextWithTick(hoursEl, timeRemaining.hours);
        updateTextWithTick(minutesEl, timeRemaining.minutes);
        updateTextWithTick(secondsEl, timeRemaining.seconds);
    });
}

// Build rich finished-exam HTML
function buildExamDoneHTML() {
    return `
        <div class="exam-done">
            <div class="confetti-container"></div>
            <div class="exam-done-badge">
                <span class="exam-done-emoji">🎉</span>
                考試已完成 Done!
            </div>
            <div class="exam-done-stars">
                <span>⭐</span><span>⭐</span><span>⭐</span>
            </div>
        </div>`;
}

// Spawn CSS confetti particles inside a card
const CONFETTI_COLORS = ['#68d391','#4299e1','#f6ad55','#fc8181','#b794f4','#76e4f7'];
const CONFETTI_COUNT = 14;
const CARD_ENTRANCE_STAGGER_MS = 60;

function spawnConfetti(card) {
    const container = card.querySelector('.confetti-container');
    if (!container) return;
    for (let i = 0; i < CONFETTI_COUNT; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';
        piece.style.left = `${Math.random() * 90 + 5}%`;
        piece.style.background = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];
        piece.style.animationDelay = `${Math.random() * 0.5}s`;
        piece.style.animationDuration = `${1.1 + Math.random() * 0.7}s`;
        piece.style.transform = `rotate(${Math.random() * 360}deg)`;
        container.appendChild(piece);
        // Remove after animation ends to keep DOM clean
        piece.addEventListener('animationend', () => piece.remove(), { once: true });
    }
}

// Rotate encouragement messages
function rotateEncouragement() {
    const textEl = document.getElementById('encouragementText');
    const randomMessage = encouragementMessages[Math.floor(Math.random() * encouragementMessages.length)];

    textEl.classList.add('fade-out');
    setTimeout(() => {
        textEl.textContent = randomMessage;
        textEl.classList.remove('fade-out');
    }, 350);
}

// Initialize the app
function init() {
    createSubjectButtons();
    initModal();
    initArticleModal();
    createHeroCountdown();
    createFreedomCountdown();
    updateCountdownDisplay();
    
    // Update all countdowns every second (combined for efficiency)
    setInterval(() => {
        updateCountdowns();
        updateHeroCountdown();
        updateFreedomCountdown();
    }, 1000);
    
    // Rotate encouragement message every 10 seconds
    setInterval(rotateEncouragement, 10000);
}

// Find first upcoming selected exam
function getFirstUpcomingExam() {
    const allExams = [];
    selectedSubjects.forEach(subjectKey => {
        if (dseExams[subjectKey]) {
            dseExams[subjectKey].papers.forEach(paper => {
                const timeRemaining = getTimeRemaining(paper.date);
                if (!timeRemaining.isPast) {
                    allExams.push({
                        subjectKey,
                        subject: dseExams[subjectKey],
                        paper
                    });
                }
            });
        }
    });

    // Add custom exams to upcoming check
    if (customDates.englishOral && selectedSubjects.includes('english')) {
        const oralDate = new Date(customDates.englishOral);
        if (!isNaN(oralDate.getTime())) {
            const timeRemaining = getTimeRemaining(oralDate);
            if (!timeRemaining.isPast) {
                allExams.push({
                    subjectKey: 'english',
                    subject: dseExams['english'],
                    paper: {
                        paper: 'English Language 4 (Speaking) 英國語文（四）（口試）',
                        date: oralDate
                    }
                });
            }
        }
    }
    
    // Sort by date and return first one
    allExams.sort((a, b) => a.paper.date - b.paper.date);
    return allExams[0];
}

// Create hero countdown for the first upcoming exam
function createHeroCountdown() {
    const container = document.getElementById('heroCountdown');
    const firstExam = getFirstUpcomingExam();
    
    if (!firstExam) {
        container.style.display = 'none';
        return;
    }
    
    container.style.display = 'block';
    
    const timeRemaining = getTimeRemaining(firstExam.paper.date);
    
    // Animate change if content is different
    const currentSubject = container.querySelector('.hero-subject')?.textContent;
    if (currentSubject && currentSubject !== firstExam.subject.name) {
        container.style.opacity = '0';
        setTimeout(() => {
            renderHeroContent(container, firstExam, timeRemaining);
            container.style.opacity = '1';
        }, 300);
    } else {
        renderHeroContent(container, firstExam, timeRemaining);
    }
}

function renderHeroContent(container, firstExam, timeRemaining) {
    container.innerHTML = `
        <div class="hero-title">下一個考試 First Upcoming Exam</div>
        <div class="hero-subject">${firstExam.subject.name}</div>
        <div class="hero-paper">${firstExam.paper.paper}</div>
        <div class="hero-countdown-display" data-end="${firstExam.paper.date.toISOString()}">
            <div class="hero-time-unit">
                <span class="hero-time-value hero-days">${timeRemaining.days}</span>
                <span class="hero-time-label">日 Days</span>
            </div>
            <div class="hero-time-unit">
                <span class="hero-time-value hero-hours">${timeRemaining.hours}</span>
                <span class="hero-time-label">時 Hrs</span>
            </div>
            <div class="hero-time-unit">
                <span class="hero-time-value hero-minutes">${timeRemaining.minutes}</span>
                <span class="hero-time-label">分 Mins</span>
            </div>
            <div class="hero-time-unit">
                <span class="hero-time-value hero-seconds">${timeRemaining.seconds}</span>
                <span class="hero-time-label">秒 Secs</span>
            </div>
        </div>
        <div class="hero-date">${formatDate(firstExam.paper.date)}</div>
    `;
}

// Update hero countdown
function updateHeroCountdown() {
    const heroDisplay = document.querySelector('.hero-countdown-display');
    if (!heroDisplay) return;
    
    const endDateStr = heroDisplay.dataset.end;
    if (!endDateStr) return;
    
    const endDate = new Date(endDateStr);
    const timeRemaining = getTimeRemaining(endDate);
    
    if (timeRemaining.isPast) {
        // If the current hero exam is past, refresh to find the next one
        createHeroCountdown();
        return;
    }
    
    const daysEl = heroDisplay.querySelector('.hero-days');
    const hoursEl = heroDisplay.querySelector('.hero-hours');
    const minutesEl = heroDisplay.querySelector('.hero-minutes');
    const secondsEl = heroDisplay.querySelector('.hero-seconds');

    updateTextWithTick(daysEl, timeRemaining.days);
    updateTextWithTick(hoursEl, timeRemaining.hours);
    updateTextWithTick(minutesEl, timeRemaining.minutes);
    updateTextWithTick(secondsEl, timeRemaining.seconds);
}

// Freedom Countdown Logic
function getFreedomDate() {
    let maxDate = null;

    selectedSubjects.forEach(subjectKey => {
        if (dseExams[subjectKey]) {
            dseExams[subjectKey].papers.forEach(paper => {
                if (!maxDate || paper.date > maxDate) {
                    maxDate = paper.date;
                }
            });
        }
    });

    // Check custom dates
    if (customDates.englishOral && selectedSubjects.includes('english')) {
         const oralDate = new Date(customDates.englishOral);
        if (!maxDate || oralDate > maxDate) {
            maxDate = oralDate;
        }
    }

    return maxDate;
}

function createFreedomCountdown() {
    const container = document.getElementById('freedomCountdown');
    const freedomDate = getFreedomDate();

    if (!freedomDate) {
        container.style.display = 'none';
        return;
    }

    container.style.display = 'block';
    const timeRemaining = getTimeRemaining(freedomDate);
    
    container.innerHTML = `
        <div class="freedom-title">🎉 Countdown to Freedom 🎉</div>
        <div class="freedom-display" data-end="${freedomDate.toISOString()}">
            <div class="freedom-unit">
                <span class="freedom-value freedom-days">${timeRemaining.days}</span>
                <span class="freedom-label">日 Days</span>
            </div>
            <div class="freedom-unit">
                <span class="freedom-value freedom-hours">${timeRemaining.hours}</span>
                <span class="freedom-label">時 Hrs</span>
            </div>
            <div class="freedom-unit">
                <span class="freedom-value freedom-minutes">${timeRemaining.minutes}</span>
                <span class="freedom-label">分 Mins</span>
            </div>
            <div class="freedom-unit">
                <span class="freedom-value freedom-seconds">${timeRemaining.seconds}</span>
                <span class="freedom-label">秒 Secs</span>
            </div>
        </div>
        <div class="freedom-date">Last Exam: ${formatDate(freedomDate)}</div>
    `;
}

function updateFreedomCountdown() {
    const display = document.querySelector('.freedom-display');
    if (!display) return;
    
    const endDateStr = display.dataset.end;
    if (!endDateStr) return;
    
    const endDate = new Date(endDateStr);
    const timeRemaining = getTimeRemaining(endDate);
    
    if (timeRemaining.isPast) {
         document.getElementById('freedomCountdown').innerHTML = `
            <div class="freedom-title">🎉 YOU ARE FREE! 🎉</div>
            <div class="freedom-value" style="margin: 20px 0;">Enjoy your holiday!</div>
         `;
         return;
    }
    
    const daysEl = display.querySelector('.freedom-days');
    const hoursEl = display.querySelector('.freedom-hours');
    const minutesEl = display.querySelector('.freedom-minutes');
    const secondsEl = display.querySelector('.freedom-seconds');

    updateTextWithTick(daysEl, timeRemaining.days);
    updateTextWithTick(hoursEl, timeRemaining.hours);
    updateTextWithTick(minutesEl, timeRemaining.minutes);
    updateTextWithTick(secondsEl, timeRemaining.seconds);
}

// DSE 12 Prescribed Texts
// Loaded from dse_articles.js
const dseArticles = typeof dseArticlesData !== 'undefined' ? dseArticlesData : [];

// Article Modal Handling
function initArticleModal() {
    const modal = document.getElementById('articleModal');
    const btn = document.getElementById('articleBtn');
    const closeBtn = document.getElementById('closeArticleModal');
    
    if (!btn || !modal) return;

    btn.onclick = function() {
        modal.style.display = 'flex';
        setTimeout(() => modal.classList.add('show'), 10);
        renderArticles();
    }

    const closeModal = function() {
        modal.classList.remove('show');
        setTimeout(() => modal.style.display = 'none', 300);
    }

    if (closeBtn) closeBtn.onclick = closeModal;

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            closeModal();
        }
    });

    renderArticles();
}

function getRandomSentence(article) {
    if (!article.paragraphs || article.paragraphs.length === 0) return article.quote;
    const fullText = article.paragraphs.join('');
    const sentences = fullText.match(/[^。？！\s]+[。？！]/g);
    if (!sentences || sentences.length === 0) return article.quote;
    const candidates = sentences.filter(s => s.length > 5 && s.length < 80);
    return candidates.length > 0 ? candidates[Math.floor(Math.random() * candidates.length)] : article.quote;
}

function renderArticles() {
    const dailyContainer = document.getElementById('dailyArticle');
    const listContainer = document.getElementById('articlesList');
    
    // Pick article of the day based on day of year
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    const dailyIndex = dayOfYear % dseArticles.length;
    const dailyArticle = dseArticles[dailyIndex];

    dailyContainer.innerHTML = `
        <div class="daily-label">每日一篇 Article of the Day</div>
        <h3 class="daily-title">${dailyArticle.title}</h3>
        <div class="daily-author">${dailyArticle.author}</div>
        <div class="daily-quote">「${getRandomSentence(dailyArticle)}」</div>
        <button class="recite-btn" onclick="startRecitationGame(${dailyIndex})">🎤 挑戰背誦 Challenge Recitation</button>
    `;

    listContainer.innerHTML = '';
    dseArticles.forEach((article, index) => {
        const item = document.createElement('div');
        item.className = `article-item ${index === dailyIndex ? 'active' : ''}`;
        item.innerHTML = `
            <span>${article.title}</span>
            <span style="font-size: 0.8em; color: #718096;">${article.author}</span>
        `;
        item.onclick = () => {
             dailyContainer.innerHTML = `
                <div class="daily-label">${index === dailyIndex ? '每日一篇 Article of the Day' : 'Selected Article'}</div>
                <h3 class="daily-title">${article.title}</h3>
                <div class="daily-author">${article.author}</div>
                <div class="daily-quote">「${getRandomSentence(article)}」</div>
                <button class="recite-btn" onclick="startRecitationGame(${index})">🎤 挑戰背誦 Challenge Recitation</button>
            `;
            document.querySelectorAll('.article-item').forEach(el => el.classList.remove('active'));
            item.classList.add('active');
        };
        listContainer.appendChild(item);
    });
}

let currentGame = {
    paragraphIndex: 0,
    quote: '',
    slots: [],
    filled: {},
    correctCount: 0
};

window.startRecitationGame = function(index) {
    const article = dseArticles[index];
    
    // Start with first paragraph
    currentGame.paragraphIndex = 0;
    renderGame(index);
};

window.renderGame = function(articleIndex) {
    const article = dseArticles[articleIndex];
    const container = document.getElementById('dailyArticle');
    
    const paragraphText = article.paragraphs[currentGame.paragraphIndex];
    
    // Check if it's a title placeholder (for poetry sections like "山居秋暝 (王維)")
    // If so, and it's short, we might skip it or just show it fully.
    // For simplicity, let's treat everything as game text, but maybe mask less if it's short?
    
    let html = '';
    let characters = [];
    let slotIndex = 0;
    
    // Reset local game state for this paragraph
    currentGame.quote = paragraphText; // Using 'quote' to mean current paragraph
    currentGame.slots = [];
    currentGame.filled = {};
    currentGame.correctCount = 0;

    const tokens = paragraphText.split('');
    let slotHtml = '';
    
    tokens.forEach((char, i) => {
        // Keep punctuation visible, and spaces
        if (/[，。；？！：、「」『』\s]/.test(char) || char === ' ') {
            slotHtml += char;
        } else {
            // 40% chance to mask character
            if (Math.random() > 0.4) {
                currentGame.slots.push({
                    index: slotIndex,
                    answer: char
                });
                characters.push({ char, id: slotIndex }); 
                slotHtml += `<span class="word-slot" id="slot-${slotIndex}" onclick="returnWord(${slotIndex})"></span>`;
                slotIndex++;
            } else {
                slotHtml += char;
            }
        }
    });

    // Shuffle characters
    characters.sort(() => Math.random() - 0.5);
    
    let optionsHtml = '';
    characters.forEach(item => {
        optionsHtml += `<div class="word-chip" id="chip-${item.id}" onclick="placeWord('${item.char}', ${item.id})">${item.char}</div>`;
    });
    
    // Navigation buttons
    const hasNext = currentGame.paragraphIndex < article.paragraphs.length - 1;
    const hasPrev = currentGame.paragraphIndex > 0;
    
    const navButtons = `
        <div style="margin-top: 20px; display: flex; gap: 10px; justify-content: center;">
            ${hasPrev ? `<button class="recite-btn" style="padding: 8px 16px; font-size: 0.9em;" onclick="prevParagraph(${articleIndex})">⬅️ Prev</button>` : ''}
            <span style="align-self: center; color: #718096;">Section ${currentGame.paragraphIndex + 1} / ${article.paragraphs.length}</span>
            ${hasNext ? `<button class="recite-btn" style="padding: 8px 16px; font-size: 0.9em;" onclick="nextParagraph(${articleIndex})">Next ➡️</button>` : ''}
        </div>
    `;

    container.innerHTML = `
        <div class="game-container">
            <h3 class="daily-title">${article.title}</h3>
            <div class="game-instruction">Fill in the blanks to complete the paragraph</div>
            <div class="game-quote-area" id="gameArea">${slotHtml}</div>
            <div class="game-options-area">${optionsHtml}</div>
            <div class="game-result" id="gameResult"></div>
            ${navButtons}
            <button class="recite-btn" style="background: #e2e8f0; color: #4a5568; margin-top: 10px;" onclick="renderArticles()">Back to Menu</button>
        </div>
    `;
};

window.nextParagraph = function(index) {
    currentGame.paragraphIndex++;
    renderGame(index);
}

window.prevParagraph = function(index) {
    currentGame.paragraphIndex--;
    renderGame(index);
}

window.placeWord = function(char, chipId) {
    // Find first empty slot
    const emptySlot = currentGame.slots.find(s => !currentGame.filled[s.index]);
    
    if (emptySlot) {
        const slotEl = document.getElementById(`slot-${emptySlot.index}`);
        const chipEl = document.getElementById(`chip-${chipId}`);
        
        if (chipEl.classList.contains('used')) return;
        
        // Fill logic
        slotEl.textContent = char;
        slotEl.classList.add('filled');
        currentGame.filled[emptySlot.index] = { char, chipId };
        
        chipEl.classList.add('used');
        
        // Check Correctness immediately (Optional) or check completion
        checkCompletion();
    }
};

window.returnWord = function(slotIndex) {
    const filledData = currentGame.filled[slotIndex];
    if (filledData) {
        const slotEl = document.getElementById(`slot-${slotIndex}`);
        const chipEl = document.getElementById(`chip-${filledData.chipId}`);
        
        slotEl.textContent = '';
        slotEl.classList.remove('filled', 'correct', 'wrong');
        
        chipEl.classList.remove('used');
        delete currentGame.filled[slotIndex];
    }
};

function checkCompletion() {
    // Check if all slots are filled
    const allFilled = currentGame.slots.every(s => currentGame.filled[s.index]);
    
    if (allFilled) {
        let isAllCorrect = true;
        
        currentGame.slots.forEach(slot => {
            const filledChar = currentGame.filled[slot.index].char;
            const slotEl = document.getElementById(`slot-${slot.index}`);
            
            if (filledChar === slot.answer) {
                slotEl.classList.add('correct');
            } else {
                slotEl.classList.add('wrong');
                isAllCorrect = false;
            }
        });
        
        if (isAllCorrect) {
            const resultEl = document.getElementById('gameResult');
            resultEl.textContent = 'Excellent! 背誦成功! 🎉';
            // Celebration effect could be added here
        }
    }
}

// Start the app when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
