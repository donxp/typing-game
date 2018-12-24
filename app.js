var words = [ 'polytypes',
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

var app = new Vue({
    el: '#app',
    data: {
        words: [],
        currentWord: '',
        wordInput: '',
        secondsLeft: 60,
        mainTimer: null
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
            console.log('Enter word', enteredWord, enteredWord.length);
            this.wordInput = '';
        },
        startTimer: function() {
            if(this.mainTimer != null) return;
            console.log('Starting timer...');
            this.mainTimer = setInterval(this.timerTick, 1000);
        },
        timerTick: function() {
            this.secondsLeft --;

            if(this.secondsLeft <= 0) {
                this.stopTimer();
                console.log('Timer ran out');
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