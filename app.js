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
        currentWord: ''
    },
    computed: {
        timeleft: function() {
            return '1:00';
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