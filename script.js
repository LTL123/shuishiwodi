const wordPairs = [
    [{word: "包子", emoji: "🥯"}, {word: "饺子", emoji: "🥟"}],
    [{word: "牙刷", emoji: "🪥"}, {word: "牙膏", emoji: "🧴"}],
    [{word: "牛肉干", emoji: "🥩"}, {word: "猪肉脯", emoji: "🥓"}],
    [{word: "麦当劳", emoji: "🍔"}, {word: "肯德基", emoji: "🍗"}],
    [{word: "微信", emoji: "💬"}, {word: "QQ", emoji: "🐧"}],
    [{word: "苹果", emoji: "🍎"}, {word: "安卓", emoji: "🤖"}],
    [{word: "可口可乐", emoji: "🔴🥤"}, {word: "百事可乐", emoji: "🔵🥤"}],
    [{word: "蜘蛛侠", emoji: "🕸️"}, {word: "蝙蝠侠", emoji: "🦇"}],
    [{word: "成吉思汗", emoji: "🐎"}, {word: "努尔哈赤", emoji: "⚔️"}],
    [{word: "元宵", emoji: "🥣"}, {word: "汤圆", emoji: "🥄"}],
    [{word: "王菲", emoji: "🎤"}, {word: "那英", emoji: "🎵"}],
    [{word: "状元", emoji: "📜"}, {word: "冠军", emoji: "🏆"}],
    [{word: "双胞胎", emoji: "👯"}, {word: "龙凤胎", emoji: "👫"}],
    [{word: "情人节", emoji: "🌹"}, {word: "光棍节", emoji: "🐕"}],
    [{word: "口香糖", emoji: "🍬"}, {word: "泡泡糖", emoji: "🎈"}],
    [{word: "水盆", emoji: "🛁"}, {word: "水桶", emoji: "🪣"}],
    [{word: "小笼包", emoji: "🥟"}, {word: "灌汤包", emoji: "🥡"}],
    [{word: "气泡", emoji: "🫧"}, {word: "水泡", emoji: "💧"}],
    [{word: "纸巾", emoji: "🧻"}, {word: "手帕", emoji: "🧣"}],
    [{word: "杭州", emoji: "🍵"}, {word: "苏州", emoji: "🏞️"}],
    [{word: "香港", emoji: "🏙️"}, {word: "台湾", emoji: "🏝️"}],
    [{word: "首尔", emoji: "🇰🇷"}, {word: "东京", emoji: "🇯🇵"}],
    [{word: "橙子", emoji: "🍊"}, {word: "橘子", emoji: "🟠"}],
    [{word: "葡萄", emoji: "🍇"}, {word: "提子", emoji: "🫐"}],
    [{word: "蝴蝶", emoji: "🦋"}, {word: "蜜蜂", emoji: "🐝"}],
    [{word: "小品", emoji: "🎭"}, {word: "相声", emoji: "🎙️"}],
    [{word: "公交", emoji: "🚌"}, {word: "地铁", emoji: "🚇"}],
    [{word: "牛奶", emoji: "🥛"}, {word: "豆浆", emoji: "🥣"}]
];

let players = [];
let currentViewIndex = 0;
let civilianData = { word: "", emoji: "" };
let spyData = { word: "", emoji: "" };
let playerCount = 0;
let spyCount = 0;

// DOM Elements
const screens = {
    setup: document.getElementById('setup-screen'),
    pass: document.getElementById('pass-screen'),
    view: document.getElementById('view-screen'),
    game: document.getElementById('game-screen'),
    result: document.getElementById('result-screen')
};

const inputs = {
    playerCount: document.getElementById('player-count'),
    spyCount: document.getElementById('spy-count'),
    wordMode: document.getElementsByName('word-mode'),
    customCivilian: document.getElementById('word-civilian'),
    customSpy: document.getElementById('word-spy'),
    customWordsDiv: document.getElementById('custom-words-input')
};

const buttons = {
    start: document.getElementById('start-btn'),
    view: document.getElementById('view-btn'),
    confirm: document.getElementById('confirm-btn'),
    restartGame: document.getElementById('restart-btn-game'),
    home: document.getElementById('home-btn')
};

const displays = {
    passInstruction: document.getElementById('pass-instruction'),
    roleWord: document.getElementById('role-word'),
    roleImage: document.getElementById('role-image'), // New Element
    roleDesc: document.getElementById('role-desc'),
    playerList: document.getElementById('player-list'),
    civilianAlive: document.getElementById('civilian-alive'),
    spyAlive: document.getElementById('spy-alive'),
    winnerTitle: document.getElementById('winner-title'),
    resultDetails: document.getElementById('result-details')
};

// Event Listeners
buttons.start.addEventListener('click', startGame);
buttons.view.addEventListener('click', revealIdentity);
buttons.confirm.addEventListener('click', nextPlayerOrStartGame);
buttons.restartGame.addEventListener('click', resetToSetup);
buttons.home.addEventListener('click', resetToSetup);

// Toggle custom words input
Array.from(inputs.wordMode).forEach(radio => {
    radio.addEventListener('change', (e) => {
        if (e.target.value === 'custom') {
            inputs.customWordsDiv.classList.remove('hidden');
        } else {
            inputs.customWordsDiv.classList.add('hidden');
        }
    });
});

function showScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.add('hidden'));
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screenName].classList.remove('hidden');
    screens[screenName].classList.add('active');
}

function startGame() {
    playerCount = parseInt(inputs.playerCount.value);
    spyCount = parseInt(inputs.spyCount.value);

    if (playerCount < 3) {
        alert("玩家人数最少为3人");
        return;
    }
    if (spyCount >= playerCount) {
        alert("卧底人数必须少于总人数");
        return;
    }

    // Setup words
    const mode = document.querySelector('input[name="word-mode"]:checked').value;
    if (mode === 'custom') {
        const cWord = inputs.customCivilian.value.trim();
        const sWord = inputs.customSpy.value.trim();
        if (!cWord || !sWord) {
            alert("请输入自定义词语");
            return;
        }
        civilianData = { word: cWord, emoji: "❓" };
        spyData = { word: sWord, emoji: "❓" };
    } else {
        const pair = wordPairs[Math.floor(Math.random() * wordPairs.length)];
        // Randomly assign which is spy word
        if (Math.random() > 0.5) {
            civilianData = pair[0];
            spyData = pair[1];
        } else {
            civilianData = pair[1];
            spyData = pair[0];
        }
    }

    // Initialize players
    players = [];
    for (let i = 0; i < playerCount; i++) {
        players.push({
            id: i + 1,
            isSpy: false,
            word: civilianData.word,
            emoji: civilianData.emoji,
            alive: true,
            avatar: getAvatar(i)
        });
    }

    // Assign spies
    let assignedSpies = 0;
    while (assignedSpies < spyCount) {
        const randomIndex = Math.floor(Math.random() * playerCount);
        if (!players[randomIndex].isSpy) {
            players[randomIndex].isSpy = true;
            players[randomIndex].word = spyData.word;
            players[randomIndex].emoji = spyData.emoji;
            assignedSpies++;
        }
    }

    currentViewIndex = 0;
    updatePassScreen();
    showScreen('pass');
}

function getAvatar(index) {
    const avatars = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐸', '🐵', '🐔', '🐧', '🐦', '🐤', '🦆'];
    return avatars[index % avatars.length];
}

function updatePassScreen() {
    displays.passInstruction.textContent = `请玩家 ${players[currentViewIndex].id} 查看身份`;
}

function revealIdentity() {
    const player = players[currentViewIndex];
    displays.roleWord.textContent = player.word;
    
    // Set Emoji/Image
    if (displays.roleImage) {
        displays.roleImage.textContent = player.emoji;
    }
    
    showScreen('view');
}

function nextPlayerOrStartGame() {
    currentViewIndex++;
    if (currentViewIndex < playerCount) {
        updatePassScreen();
        showScreen('pass');
    } else {
        initGameScreen();
        showScreen('game');
    }
}

function initGameScreen() {
    renderPlayerList();
    updateGameStats();
}

function renderPlayerList() {
    displays.playerList.innerHTML = '';
    players.forEach(player => {
        const playerEl = document.createElement('div');
        playerEl.className = `player-card ${!player.alive ? 'dead' : ''}`;
        
        // 构建标签：如果活着不显示标签；如果死了只显示“出局”，不显示身份
        let tagsHtml = '';
        if (!player.alive) {
            tagsHtml = '<span class="tag dead-tag">出局</span>';
        }

        playerEl.innerHTML = `
            <div class="player-avatar">${player.avatar}</div>
            <span class="player-id">玩家 ${player.id}</span>
            ${tagsHtml}
        `;
        
        if (player.alive) {
            playerEl.addEventListener('click', () => votePlayer(player));
        }
        
        displays.playerList.appendChild(playerEl);
    });
}

function updateGameStats() {
    const aliveCivilians = players.filter(p => !p.isSpy && p.alive).length;
    const aliveSpies = players.filter(p => p.isSpy && p.alive).length;
    
    displays.civilianAlive.textContent = aliveCivilians;
    displays.spyAlive.textContent = aliveSpies;

    checkWinCondition(aliveCivilians, aliveSpies);
}

function votePlayer(player) {
    if (!confirm(`确定要投票处决 玩家 ${player.id} 吗？`)) {
        return;
    }

    player.alive = false;
    // 移除弹窗揭示身份的逻辑
    // alert(`玩家 ${player.id} 的身份是：${player.isSpy ? '【卧底】' : '【平民】'}\n词语：${player.word}`);
    
    renderPlayerList();
    updateGameStats();
}

function checkWinCondition(aliveCivilians, aliveSpies) {
    if (aliveSpies === 0) {
        endGame(true); // Civilians win
    } else if (aliveCivilians <= aliveSpies) {
        endGame(false); // Spies win
    }
}

function endGame(civilianWin) {
    setTimeout(() => {
        displays.winnerTitle.textContent = civilianWin ? "平民胜利!" : "卧底胜利!";
        displays.winnerTitle.style.color = civilianWin ? "var(--success-color)" : "var(--accent-color)";
        
        let html = '';
        players.forEach(p => {
            html += `
                <div class="result-item">
                    <span>
                        <span class="player-avatar" style="display:inline-block; width:20px; height:20px; font-size:14px;">${p.avatar}</span> 
                        玩家 ${p.id}
                    </span>
                    <span>
                        ${p.isSpy ? '<b style="color:var(--accent-color)">卧底</b>' : '平民'} 
                        (${p.emoji} ${p.word})
                    </span>
                </div>
            `;
        });
        displays.resultDetails.innerHTML = html;
        
        showScreen('result');
    }, 500);
}

function resetToSetup() {
    showScreen('setup');
}