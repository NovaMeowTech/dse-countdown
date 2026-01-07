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
    'DSE 只係人生一個階段，保持心境！💖'
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

// Save selected subjects to localStorage
function saveSelectedSubjects(subjects) {
    localStorage.setItem('dse_selected_subjects', JSON.stringify(subjects));
}

// Initialize selected subjects
let selectedSubjects = loadSavedSubjects();

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
            button.title = '核心科目（不可取消）';
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
            updateCountdownDisplay();
        });
        
        container.appendChild(button);
    });
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

// Create countdown card for a paper
function createCountdownCard(subjectKey, paper) {
    const card = document.createElement('div');
    card.className = 'countdown-card';
    
    const timeRemaining = getTimeRemaining(paper.date);
    const isPast = timeRemaining.isPast;
    
    if (isPast) {
        card.classList.add('past');
    }
    
    card.innerHTML = `
        <div class="card-header">
            <h3 class="subject-name">${dseExams[subjectKey].name}</h3>
            <p class="paper-name">${paper.paper}</p>
        </div>
        <div class="exam-date">${formatDate(paper.date)}</div>
        <div class="countdown-display" data-end="${paper.date.toISOString()}">
            ${isPast ? '<div class="exam-done">考試已完成 ✓</div>' : `
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
    `;
    
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
    
    allPapers.sort((a, b) => a.paper.date - b.paper.date);
    
    if (allPapers.length === 0) {
        container.innerHTML = '<div class="no-subjects">請選擇至少一個科目</div>';
        return;
    }
    
    allPapers.forEach(({ subjectKey, paper }) => {
        const card = createCountdownCard(subjectKey, paper);
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
            display.innerHTML = '<div class="exam-done">考試已完成 ✓</div>';
            display.parentElement.classList.add('past');
            return;
        }
        
        const daysEl = display.querySelector('.days');
        const hoursEl = display.querySelector('.hours');
        const minutesEl = display.querySelector('.minutes');
        const secondsEl = display.querySelector('.seconds');
        
        if (daysEl) daysEl.textContent = timeRemaining.days;
        if (hoursEl) hoursEl.textContent = timeRemaining.hours;
        if (minutesEl) minutesEl.textContent = timeRemaining.minutes;
        if (secondsEl) secondsEl.textContent = timeRemaining.seconds;
    });
}

// Rotate encouragement messages
function rotateEncouragement() {
    const textEl = document.getElementById('encouragementText');
    const randomMessage = encouragementMessages[Math.floor(Math.random() * encouragementMessages.length)];
    textEl.style.opacity = '0';
    
    setTimeout(() => {
        textEl.textContent = randomMessage;
        textEl.style.opacity = '1';
    }, 300);
}

// Initialize the app
function init() {
    createSubjectButtons();
    createHeroCountdown();
    updateCountdownDisplay();
    
    // Update countdowns every second
    setInterval(updateCountdowns, 1000);
    setInterval(updateHeroCountdown, 1000);
    
    // Rotate encouragement message every 10 seconds
    setInterval(rotateEncouragement, 10000);
}

// Find first DSE written exam (earliest core subject exam)
function getFirstDSEExam() {
    const allExams = [];
    Object.keys(dseExams).forEach(subjectKey => {
        dseExams[subjectKey].papers.forEach(paper => {
            allExams.push({
                subjectKey,
                subject: dseExams[subjectKey],
                paper
            });
        });
    });
    
    // Sort by date and return first one
    allExams.sort((a, b) => a.paper.date - b.paper.date);
    return allExams[0];
}

// Create hero countdown for the first DSE exam
function createHeroCountdown() {
    const container = document.getElementById('heroCountdown');
    const firstExam = getFirstDSEExam();
    
    if (!firstExam) return;
    
    const timeRemaining = getTimeRemaining(firstExam.paper.date);
    
    if (timeRemaining.isPast) {
        container.style.display = 'none';
        return;
    }
    
    container.innerHTML = `
        <div class="hero-title">第一場 DSE 筆試</div>
        <div class="hero-subject">${firstExam.subject.name}</div>
        <div class="hero-paper">${firstExam.paper.paper}</div>
        <div class="hero-date">${formatDate(firstExam.paper.date)}</div>
        <div class="hero-countdown-display" data-end="${firstExam.paper.date.toISOString()}">
            <div class="hero-time-unit">
                <span class="hero-time-value hero-days">${timeRemaining.days}</span>
                <span class="hero-time-label">日</span>
            </div>
            <div class="hero-time-unit">
                <span class="hero-time-value hero-hours">${timeRemaining.hours}</span>
                <span class="hero-time-label">時</span>
            </div>
            <div class="hero-time-unit">
                <span class="hero-time-value hero-minutes">${timeRemaining.minutes}</span>
                <span class="hero-time-label">分</span>
            </div>
            <div class="hero-time-unit">
                <span class="hero-time-value hero-seconds">${timeRemaining.seconds}</span>
                <span class="hero-time-label">秒</span>
            </div>
        </div>
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
        document.getElementById('heroCountdown').style.display = 'none';
        return;
    }
    
    const daysEl = heroDisplay.querySelector('.hero-days');
    const hoursEl = heroDisplay.querySelector('.hero-hours');
    const minutesEl = heroDisplay.querySelector('.hero-minutes');
    const secondsEl = heroDisplay.querySelector('.hero-seconds');
    
    if (daysEl) daysEl.textContent = timeRemaining.days;
    if (hoursEl) hoursEl.textContent = timeRemaining.hours;
    if (minutesEl) minutesEl.textContent = timeRemaining.minutes;
    if (secondsEl) secondsEl.textContent = timeRemaining.seconds;
}

// Start the app when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
