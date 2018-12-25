var wordsOld = [ 'polytypes',
    'numb',
    'gumnuts',
    'cries',
    'splenectomising',
    'predominates',
    'convertends',
    'decollators',
    'exploratory',
    'unforeseeable',
    'bumfuzzles',
    'blunted',
    'snowboarders',
    'salaried',
    'exemplary',
    'cystolithiasis',
    'cuckoopint',
    'vaccinal',
    'passalongs',
    'misdraw',
    'scop',
    'astrophysical',
    'unromantic',
    'craziest',
    'tantrism',
    'nicknamer',
    'perchloroethene',
    'incondensable',
    'ginsengs',
    'titfer',
    'rosemary',
    'marmoset',
    'superministers',
    'monostable',
    'watches',
    'tarrock',
    'ripstop',
    'diestrus',
    'indagated',
    'flirtingly',
    'abbs',
    'cryosurgeons',
    'strangely',
    'tates',
    'cycloheximides',
    'chainless',
    'uploaded',
    'inukshuit',
    'mercifies',
    'illapsing',
    'lithontriptist',
    'chantages',
    'counterattacker',
    'mundunguses',
    'hangup',
    'traumatology',
    'gastrotomy',
    'supertitles',
    'flawing',
    'borstals',
    'waeness',
    'estray',
    'suckhole',
    'osculatory',
    'sagenes',
    'wholesomest',
    'overmelted',
    'heteroscedastic',
    'sickliest',
    'disprovals',
    'schlumpiest',
    'allotetraploids',
    'temerous',
    'rhizotomy',
    'apelike',
    'dumbfoundered',
    'ergotise',
    'poeticize',
    'reguluses',
    'filters',
    'metagalaxy',
    'radiochemistries',
    'extorted',
    'voddy',
    'usurpedly',
    'housetop',
    'fogdogs',
    'spyal',
    'footsloggings',
    'cafards',
    'sheughing',
    'schindyleses',
    'borel',
    'coldblood',
    'pianissimo',
    'cudgelling',
    'tropicalises',
    'gainsay',
    'oncometer',
    'rewatered'
];

var words = [
    'four', 'some', 'may', 'house', 'school',
    'tree', 'story', 'picture', 'still',
    'state', 'face', 'follow', 'turn',
    'made', 'white', 'have', 'want',
    'would', 'could', 'should', 'said',
    'only', 'quite', 'miss', 'line',
    'family', 'people', 'call', 'how',
    'start', 'them', 'question', 'number',
    'carry', 'head', 'father', 'mother',
    'brother', 'chapel', 'watch', 'saw'
]

var app = new Vue({
    el: '#app',
    data: {
        words: [],
        currentWord: '',
        wordInput: '',
        secondsLeft: 60,
        mainTimer: null,
        gameStarted: false,
        correctWords: 0,
        incorrectWords: 0,
        wpmSpeed: 0
    },
    computed: {
        timeleft: function() {
            return (this.secondsLeft == 60) ? '1:00' : this.secondsLeft;
        }
    },
    methods: {
        generateWords: function() {
            // Generate unique 20 random words.
            while(this.words.length != 20) {
                var randomIndex = window.generateRandomNumber(0, window.words.length);
                if(this.words.indexOf(window.words[randomIndex]) == -1) {
                    this.words.push(window.words[randomIndex]);
                }
            }
            this.currentWord = this.words[0];
        },
        enterWord: function() {
            var enteredWord = this.wordInput.trim();
            this.wordInput = '';

            if(enteredWord == this.currentWord) {
                console.log('Correct.');
                var currentWordIndex = this.words.indexOf(this.currentWord);
                this.currentWord = this.words[currentWordIndex+1];
                this.correctWords ++;
            } else {
                console.log('Incorrect');
                this.incorrectWords ++;
            }
        },
        startTimer: function() {
            if(this.mainTimer != null) return;
            console.log('Starting timer...');
            this.mainTimer = setInterval(this.timerTick, 1000);
            this.gameStarted = true;
        },
        timerTick: function() {
            var secondsElapsed = 60 - this.secondsLeft;
            var a = secondsElapsed / 60;
            this.wpmSpeed = this.correctWords / a;
            if(this.secondsLeft <= 0) {
                this.stopTimer();
                console.log('Timer ran out');
            } else {
                this.secondsLeft --;
            }
        },
        stopTimer: function() {
            if(this.mainTimer != null) {
                clearInterval(this.mainTimer);
                this.mainTimer = null;
            }
        }
    },
    created: function() {
        console.log('created');
        this.generateWords();
    }
});

function generateRandomNumber(min, max) 
{
    return Math.floor(Math.random() * (max-min) + min);
} 