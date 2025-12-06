const wordPairs = [
    // 经典/现有词汇
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
    [{word: "牛奶", emoji: "🥛"}, {word: "豆浆", emoji: "🥣"}],
    
    // 🍔 食物类
    [{word: "汉堡包", emoji: "🍔"}, {word: "肉夹馍", emoji: "🥙"}],
    [{word: "薯条", emoji: "🍟"}, {word: "薯片", emoji: "🥔"}],
    [{word: "可乐", emoji: "🥤"}, {word: "雪碧", emoji: "🟢"}],
    [{word: "牛奶", emoji: "🥛"}, {word: "酸奶", emoji: "🍦"}],
    [{word: "汤圆", emoji: "🥣"}, {word: "丸子", emoji: "🍡"}],
    [{word: "冰淇淋", emoji: "🍦"}, {word: "雪糕", emoji: "🍧"}],
    [{word: "饼干", emoji: "🍪"}, {word: "面包", emoji: "🍞"}],
    [{word: "果冻", emoji: "🍮"}, {word: "布丁", emoji: "🍮"}],
    [{word: "西瓜", emoji: "🍉"}, {word: "哈密瓜", emoji: "🍈"}],
    [{word: "面条", emoji: "🍜"}, {word: "米粉", emoji: "🍲"}],
    [{word: "蛋糕", emoji: "🍰"}, {word: "蛋挞", emoji: "🥧"}],
    [{word: "草莓", emoji: "🍓"}, {word: "樱桃", emoji: "🍒"}],
    [{word: "巧克力", emoji: "🍫"}, {word: "糖果", emoji: "🍬"}],
    [{word: "菠萝", emoji: "🍍"}, {word: "凤梨", emoji: "🍍"}],
    [{word: "黄瓜", emoji: "🥒"}, {word: "苦瓜", emoji: "🤢"}],
    [{word: "白菜", emoji: "🥬"}, {word: "生菜", emoji: "🥗"}],

    // 🎒 校园与学习
    [{word: "铅笔", emoji: "✏️"}, {word: "钢笔", emoji: "✒️"}],
    [{word: "橡皮", emoji: "🧼"}, {word: "修正液", emoji: "💧"}],
    [{word: "书包", emoji: "🎒"}, {word: "手提袋", emoji: "🛍️"}],
    [{word: "课本", emoji: "📚"}, {word: "字典", emoji: "📖"}],
    [{word: "语文", emoji: "📖"}, {word: "数学", emoji: "🔢"}],
    [{word: "班主任", emoji: "👩‍🏫"}, {word: "校长", emoji: "👨‍💼"}],
    [{word: "作业", emoji: "📝"}, {word: "考试", emoji: "📄"}],
    [{word: "暑假", emoji: "☀️"}, {word: "寒假", emoji: "❄️"}],
    [{word: "黑板", emoji: "⬛"}, {word: "白板", emoji: "⬜"}],
    [{word: "尺子", emoji: "📏"}, {word: "卷尺", emoji: "📐"}],
    [{word: "卷笔刀", emoji: "✏️"}, {word: "削笔刀", emoji: "🔪"}],
    [{word: "日记", emoji: "📓"}, {word: "作文", emoji: "📄"}],
    [{word: "体育课", emoji: "🏃"}, {word: "活动课", emoji: "🤸"}],
    [{word: "眼保健操", emoji: "👀"}, {word: "广播体操", emoji: "🤸"}],
    [{word: "举手", emoji: "🙋"}, {word: "鼓掌", emoji: "👏"}],
    [{word: "操场", emoji: "🏟️"}, {word: "公园", emoji: "🏞️"}],
    [{word: "讲台", emoji: "🏫"}, {word: "舞台", emoji: "🎭"}],
    [{word: "奖状", emoji: "📜"}, {word: "证书", emoji: "🏅"}],
    [{word: "校服", emoji: "👔"}, {word: "运动服", emoji: "🎽"}],
    [{word: "红领巾", emoji: "🧣"}, {word: "领带", emoji: "👔"}],

    // 🦁 动物与自然
    [{word: "猫", emoji: "🐱"}, {word: "老虎", emoji: "🐯"}],
    [{word: "狗", emoji: "🐶"}, {word: "狼", emoji: "🐺"}],
    [{word: "青蛙", emoji: "🐸"}, {word: "癞蛤蟆", emoji: "🟤"}],
    [{word: "公鸡", emoji: "🐓"}, {word: "母鸡", emoji: "🐔"}],
    [{word: "鸭子", emoji: "🦆"}, {word: "大鹅", emoji: "🦢"}],
    [{word: "马", emoji: "🐎"}, {word: "驴", emoji: "🫏"}],
    [{word: "企鹅", emoji: "🐧"}, {word: "北极熊", emoji: "🐻‍❄️"}],
    [{word: "太阳", emoji: "☀️"}, {word: "月亮", emoji: "🌙"}],
    [{word: "星星", emoji: "⭐"}, {word: "流星", emoji: "🌠"}],
    [{word: "下雨", emoji: "🌧️"}, {word: "下雪", emoji: "🌨️"}],
    [{word: "大树", emoji: "🌳"}, {word: "小草", emoji: "🌿"}],
    [{word: "玫瑰", emoji: "🌹"}, {word: "月季", emoji: "🌺"}],
    [{word: "苹果", emoji: "🍎"}, {word: "番茄", emoji: "🍅"}],
    [{word: "蚊子", emoji: "🦟"}, {word: "苍蝇", emoji: "🪰"}],
    [{word: "乌龟", emoji: "🐢"}, {word: "蜗牛", emoji: "🐌"}],
    [{word: "兔子", emoji: "🐰"}, {word: "袋鼠", emoji: "🦘"}],
    [{word: "金鱼", emoji: "🐠"}, {word: "鲸鱼", emoji: "🐋"}],
    [{word: "蜘蛛", emoji: "🕷️"}, {word: "螃蟹", emoji: "🦀"}],
    [{word: "大象", emoji: "🐘"}, {word: "猪", emoji: "🐷"}],

    // ⌚ 生活与物品
    [{word: "牙刷", emoji: "🪥"}, {word: "鞋刷", emoji: "👞"}],
    [{word: "眼镜", emoji: "👓"}, {word: "墨镜", emoji: "🕶️"}],
    [{word: "雨伞", emoji: "☔"}, {word: "遮阳伞", emoji: "⛱️"}],
    [{word: "手套", emoji: "🧤"}, {word: "袜子", emoji: "🧦"}],
    [{word: "风扇", emoji: "🪭"}, {word: "空调", emoji: "❄️"}],
    [{word: "手机", emoji: "📱"}, {word: "电话手表", emoji: "⌚"}],
    [{word: "电视", emoji: "📺"}, {word: "电脑", emoji: "💻"}],
    [{word: "枕头", emoji: "🛌"}, {word: "抱枕", emoji: "🛋️"}],
    [{word: "自行车", emoji: "🚲"}, {word: "电动车", emoji: "🛵"}],
    [{word: "筷子", emoji: "🥢"}, {word: "吸管", emoji: "🥤"}],
    [{word: "洗发水", emoji: "🧴"}, {word: "沐浴露", emoji: "🧼"}],
    [{word: "毛巾", emoji: "🧖"}, {word: "手帕", emoji: "🤧"}],
    [{word: "短裤", emoji: "🩳"}, {word: "内裤", emoji: "🩲"}],
    [{word: "拖鞋", emoji: "🩴"}, {word: "凉鞋", emoji: "👡"}],
    [{word: "镜子", emoji: "🪞"}, {word: "玻璃", emoji: "🪟"}],
    [{word: "电梯", emoji: "🛗"}, {word: "楼梯", emoji: "🪜"}],
    [{word: "公交车", emoji: "🚌"}, {word: "校车", emoji: "🚐"}],
    [{word: "杯子", emoji: "🥛"}, {word: "碗", emoji: "🥣"}],
    [{word: "梳子", emoji: "🪮"}, {word: "发卡", emoji: "🎀"}],
    [{word: "床单", emoji: "🛏️"}, {word: "被罩", emoji: "🛌"}],

    // 🦸 人物与角色
    [{word: "奥特曼", emoji: "🦸"}, {word: "蜘蛛侠", emoji: "🕸️"}],
    [{word: "孙悟空", emoji: "🐵"}, {word: "六耳猕猴", emoji: "🐒"}],
    [{word: "白雪公主", emoji: "👸"}, {word: "灰姑娘", emoji: "👠"}],
    [{word: "喜羊羊", emoji: "🐑"}, {word: "灰太狼", emoji: "🐺"}],
    [{word: "哆啦A梦", emoji: "😺"}, {word: "龙猫", emoji: "🐾"}],
    [{word: "警察", emoji: "👮"}, {word: "保安", emoji: "💂"}],
    [{word: "医生", emoji: "👨‍⚕️"}, {word: "护士", emoji: "👩‍⚕️"}],
    [{word: "爸爸", emoji: "👨"}, {word: "叔叔", emoji: "🧔"}],
    [{word: "妈妈", emoji: "👩"}, {word: "阿姨", emoji: "👩‍🦱"}],
    [{word: "哭", emoji: "😭"}, {word: "笑", emoji: "😂"}],
    [{word: "开心", emoji: "😊"}, {word: "兴奋", emoji: "🤩"}],
    [{word: "跑步", emoji: "🏃"}, {word: "散步", emoji: "🚶"}],
    [{word: "唱歌", emoji: "🎤"}, {word: "朗诵", emoji: "📖"}],
    [{word: "感冒", emoji: "🤧"}, {word: "发烧", emoji: "🤒"}],
    [{word: "魔术", emoji: "🎩"}, {word: "魔法", emoji: "🪄"}],
    [{word: "外星人", emoji: "👽"}, {word: "机器人", emoji: "🤖"}],
    [{word: "声音", emoji: "🔊"}, {word: "音乐", emoji: "🎵"}],
    [{word: "天才", emoji: "🧠"}, {word: "人才", emoji: "👔"}],
    [{word: "胖", emoji: "🐷"}, {word: "壮", emoji: "💪"}],
    [{word: "丑小鸭", emoji: "🐥"}, {word: "白天鹅", emoji: "🦢"}]
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