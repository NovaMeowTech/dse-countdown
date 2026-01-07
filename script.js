// DSE 2026 exam schedule (based on typical DSE schedule pattern)
// Actual dates should be updated when official schedule is released
const dseExams = {
    'chinese': {
        name: '中國語文',
        papers: [
            { paper: '卷一 (閱讀)', date: new Date('2026-03-30T08:30:00') },
            { paper: '卷二 (寫作)', date: new Date('2026-03-30T13:00:00') },
            { paper: '卷三 (聆聽及綜合)', date: new Date('2026-03-31T08:30:00') },
            { paper: '卷四 (口語)', date: new Date('2026-04-01T08:30:00') }
        ]
    },
    'english': {
        name: 'English Language',
        papers: [
            { paper: 'Paper 1 (Reading)', date: new Date('2026-04-02T08:30:00') },
            { paper: 'Paper 2 (Writing)', date: new Date('2026-04-02T13:00:00') },
            { paper: 'Paper 3 (Listening)', date: new Date('2026-04-03T08:30:00') },
            { paper: 'Paper 4 (Speaking)', date: new Date('2026-04-04T08:30:00') }
        ]
    },
    'maths': {
        name: '數學 (必修部分)',
        papers: [
            { paper: '卷一', date: new Date('2026-04-06T08:30:00') },
            { paper: '卷二', date: new Date('2026-04-06T13:00:00') }
        ]
    },
    'maths_extended': {
        name: '數學 (延伸部分)',
        papers: [
            { paper: 'M1/M2', date: new Date('2026-04-07T14:30:00') }
        ]
    },
    'liberal_studies': {
        name: '通識教育',
        papers: [
            { paper: '卷一', date: new Date('2026-04-08T08:30:00') },
            { paper: '卷二', date: new Date('2026-04-08T13:00:00') }
        ]
    },
    'physics': {
        name: '物理',
        papers: [
            { paper: '卷一', date: new Date('2026-04-09T08:30:00') },
            { paper: '卷二', date: new Date('2026-04-09T14:00:00') }
        ]
    },
    'chemistry': {
        name: '化學',
        papers: [
            { paper: '卷一', date: new Date('2026-04-10T08:30:00') },
            { paper: '卷二', date: new Date('2026-04-10T14:00:00') }
        ]
    },
    'biology': {
        name: '生物',
        papers: [
            { paper: '卷一', date: new Date('2026-04-13T08:30:00') },
            { paper: '卷二', date: new Date('2026-04-13T14:00:00') }
        ]
    },
    'economics': {
        name: '經濟',
        papers: [
            { paper: '卷一', date: new Date('2026-04-14T08:30:00') },
            { paper: '卷二', date: new Date('2026-04-14T14:00:00') }
        ]
    },
    'bafs': {
        name: '企業、會計與財務概論',
        papers: [
            { paper: '卷一', date: new Date('2026-04-15T08:30:00') },
            { paper: '卷二', date: new Date('2026-04-15T14:00:00') }
        ]
    },
    'geography': {
        name: '地理',
        papers: [
            { paper: '卷一', date: new Date('2026-04-16T08:30:00') },
            { paper: '卷二', date: new Date('2026-04-16T14:00:00') }
        ]
    },
    'history': {
        name: '歷史',
        papers: [
            { paper: '卷一', date: new Date('2026-04-17T08:30:00') },
            { paper: '卷二', date: new Date('2026-04-17T14:00:00') }
        ]
    },
    'chinese_history': {
        name: '中國歷史',
        papers: [
            { paper: '卷一', date: new Date('2026-04-20T08:30:00') },
            { paper: '卷二', date: new Date('2026-04-20T14:00:00') }
        ]
    },
    'ict': {
        name: '資訊及通訊科技',
        papers: [
            { paper: '卷一', date: new Date('2026-04-21T08:30:00') },
            { paper: '卷二', date: new Date('2026-04-21T14:00:00') }
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

// Load saved subjects from localStorage
function loadSavedSubjects() {
    const saved = localStorage.getItem('dse_selected_subjects');
    if (saved) {
        try {
            return JSON.parse(saved);
        } catch (e) {
            return Object.keys(dseExams);
        }
    }
    return Object.keys(dseExams);
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
    
    Object.keys(dseExams).forEach(subjectKey => {
        const button = document.createElement('button');
        button.className = 'subject-btn';
        button.textContent = dseExams[subjectKey].name;
        button.dataset.subject = subjectKey;
        
        if (selectedSubjects.includes(subjectKey)) {
            button.classList.add('selected');
        }
        
        button.addEventListener('click', () => {
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
    updateCountdownDisplay();
    
    // Update countdowns every second
    setInterval(updateCountdowns, 1000);
    
    // Rotate encouragement message every 10 seconds
    setInterval(rotateEncouragement, 10000);
}

// Start the app when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
