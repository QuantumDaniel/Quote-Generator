const loveQuotes = [
    { id: 1, quote: " " },
    { id: 2, quote: "Love is not about finding the perfect person, but seing an imperfect person pefectly." },
    { id: 3, quote: "Love is when someone else's happiness is more important than your own." },
    { id: 4, quote: "You don’t find love, it finds you." },
    { id: 5, quote: "Real love begins where nothing is expected in return." },
    { id: 6, quote: "To love and be loved is to feel the sun from both sides." },
    { id: 7, quote: "Love is not what you say, love is what you do." },
    { id: 8, quote: "A heart that loves is always young." },
    { id: 9, quote: "Love grows when shared." },
    { id: 10, quote: "True love is built, not found." },
    { id: 11, quote: "Love is friendship set on fire." },
    { id: 12, quote: "The best thing to hold onto in life is each other." },
    { id: 13, quote: "Where there is love, there is life." },
    { id: 14, quote: "Love is choosing someone over and over again." },
    { id: 15, quote: "You are my today and all of my tomorrows." },
    { id: 16, quote: "Love is the bridge between two hearts." },
    { id: 17, quote: "Love doesn’t need to be perfect, it just needs to be true." },
    { id: 18, quote: "When love is real, it finds a way." },
    { id: 19, quote: "Love is giving someone the power to hurt you but trusting them not to." },
    { id: 20, quote: "The right person feels like peace." },
    { id: 21, quote: "Love is patient, love is kind." },
    { id: 22, quote: "You are the reason I believe in love." },
    { id: 23, quote: "Love is not possession, it is appreciation." },
    { id: 24, quote: "Two hearts, one soul." },
    { id: 25, quote: "Love listens more than it speaks." },
    { id: 26, quote: "Forever is built one day at a time." },
    { id: 27, quote: "Love grows stronger through understanding." },
    { id: 28, quote: "True love survives every season." },
    { id: 29, quote: "Love is the greatest adventure." },
    { id: 30, quote: "When love is deep, words are few." },
    { id: 31, quote: "Love creates a home in the heart." },
    { id: 32, quote: "A loving heart is a magnet for miracles." },
    { id: 33, quote: "Love gives without keeping score." },
    { id: 34, quote: "The language of love needs no translation." },
    { id: 35, quote: "Love is strength in its gentlest form." },
    { id: 36, quote: "Every love story is beautiful." },
    { id: 37, quote: "Love turns ordinary moments into memories." },
    { id: 38, quote: "Love is built on trust." },
    { id: 39, quote: "Where love lives, fear dies." },
    { id: 40, quote: "Love is choosing kindness daily." },
    { id: 41, quote: "Hearts connected never truly separate." },
    { id: 42, quote: "Love heals what pride cannot." },
    { id: 43, quote: "Love grows in honesty." },
    { id: 44, quote: "Love sees beyond flaws." },
    { id: 45, quote: "Love is the heartbeat of life." },
    { id: 46, quote: "A loving soul attracts peace." },
    { id: 47, quote: "Love is sacrifice with joy." },
    { id: 48, quote: "Love builds, it does not destroy." },
    { id: 49, quote: "Love remains when feelings fade." },
    { id: 50, quote: "Love is calm in the storm." },
    { id: 51, quote: "True love stands the test of time." }

];

const motivationalQuotes = [
    { id: 1, quote: " " },
    { id: 2, quote: "Push yourself, because no one else is going to do it for you." },
    { id: 3, quote: "Small progress is still progress." },
    { id: 4, quote: "Don’t watch the clock; do what it does. Keep going." },
    { id: 5, quote: "Your only limit is your mind." },
    { id: 6, quote: "Dream big. Start small. Act now." },
    { id: 7, quote: "Difficult roads often lead to beautiful destinations." },
    { id: 8, quote: "Discipline is choosing what you want most over what you want now." },
    { id: 9, quote: "The harder you work for something, the greater you’ll feel when you achieve it." },
    { id: 10, quote: "Don’t stop until you’re proud." },
    { id: 11, quote: "Failure is not the opposite of success; it’s part of success." },
    { id: 12, quote: "You are stronger than you think." },
    { id: 13, quote: "Consistency beats motivation." },
    { id: 14, quote: "Start where you are. Use what you have. Do what you can." },
    { id: 15, quote: "Make it happen." },
    { id: 16, quote: "Stay focused and never give up." },
    { id: 17, quote: "Your future is created by what you do today." },
    { id: 18, quote: "Believe you can and you're halfway there." },
    { id: 19, quote: "Turn your pain into power." },
    { id: 20, quote: "Great things never come from comfort zones." },
    { id: 21, quote: "Success is built on daily habits." },
    { id: 22, quote: "You didn’t come this far to stop." },
    { id: 23, quote: "Action beats intention." },
    { id: 24, quote: "Your growth is your responsibility." },
    { id: 25, quote: "Hard work compounds over time." },
    { id: 26, quote: "Focus on progress, not perfection." },
    { id: 27, quote: "Winners train, losers complain." },
    { id: 28, quote: "Be obsessed with improvement." },
    { id: 29, quote: "Every expert was once a beginner." },
    { id: 30, quote: "Excuses delay greatness." },
    { id: 31, quote: "Make discipline your lifestyle." },
    { id: 32, quote: "Your habits shape your future." },
    { id: 33, quote: "Fear is temporary, regret is forever." },
    { id: 34, quote: "Stay hungry for growth." },
    { id: 35, quote: "Effort never betrays you." },
    { id: 36, quote: "Your mindset determines your direction." },
    { id: 37, quote: "Build skills, build freedom." },
    { id: 38, quote: "Work in silence, let results speak." },
    { id: 39, quote: "Pressure creates diamonds." },
    { id: 40, quote: "Comfort is the enemy of progress." },
    { id: 41, quote: "Think long term." },
    { id: 42, quote: "Do it scared." },
    { id: 43, quote: "Momentum comes from movement." },
    { id: 44, quote: "Consistency creates confidence." },
    { id: 45, quote: "Start now, adjust later." },
    { id: 46, quote: "Turn obstacles into opportunities." },
    { id: 47, quote: "Your dream deserves effort." },
    { id: 48, quote: "Learn, apply, repeat." },
    { id: 49, quote: "Growth begins outside comfort." },
    { id: 50, quote: "Stay disciplined, stay dangerous." },
    { id: 51, quote: "Greatness is earned daily." }
];


const spiritualQuotes = [
    { id: 1, quote: " " },
    { id: 2, quote: "Trust the timing of your life." },
    { id: 3, quote: "Let your faith be bigger than your fear." },
    { id: 4, quote: "Peace begins the moment you choose not to allow another person or event to control your emotions." },
    { id: 5, quote: "Pray about it as much as you think about it." },
    { id: 6, quote: "God’s plans are always better than our dreams." },
    { id: 7, quote: "Be still and know that you are not alone." },
    { id: 8, quote: "What is meant for you will never miss you." },
    { id: 9, quote: "Grace is sufficient for every season." },
    { id: 10, quote: "Surrender your worries and embrace peace." },
    { id: 11, quote: "The soul grows stronger in silence." },
    { id: 12, quote: "Where faith leads, fear fades." },
    { id: 13, quote: "Light shines brightest in the darkest moments." },
    { id: 14, quote: "Your purpose is greater than your struggle." },
    { id: 15, quote: "Stay rooted in faith and grounded in gratitude." },
    { id: 16, quote: "Healing begins when you let go." },
    { id: 17, quote: "God is working even when you cannot see it." },
    { id: 18, quote: "Let gratitude transform your perspective." },
    { id: 19, quote: "Spiritual growth requires patience." },
    { id: 20, quote: "Align your heart with peace and your life will follow." },
    { id: 21, quote: "Faith grows in quiet trust." },
    { id: 22, quote: "God’s delay is not God’s denial." },
    { id: 23, quote: "Peace is found within." },
    { id: 24, quote: "Release control and find freedom." },
    { id: 25, quote: "Prayer changes perspective." },
    { id: 26, quote: "Grace covers every weakness." },
    { id: 27, quote: "Patience strengthens the soul." },
    { id: 28, quote: "Trust beyond understanding." },
    { id: 29, quote: "Let faith guide your steps." },
    { id: 30, quote: "Gratitude unlocks abundance." },
    { id: 31, quote: "God is near to the brokenhearted." },
    { id: 32, quote: "Spiritual strength grows in trials." },
    { id: 33, quote: "Silence allows clarity." },
    { id: 34, quote: "Hope anchors the soul." },
    { id: 35, quote: "Faith replaces fear." },
    { id: 36, quote: "Surrender brings peace." },
    { id: 37, quote: "Light overcomes darkness." },
    { id: 38, quote: "Trust the unseen." },
    { id: 39, quote: "God’s grace is enough." },
    { id: 40, quote: "The soul finds rest in faith." },
    { id: 41, quote: "Let go and let God." },
    { id: 42, quote: "Prayer is powerful." },
    { id: 43, quote: "Faith fuels perseverance." },
    { id: 44, quote: "Walk by faith, not by sight." },
    { id: 45, quote: "Spiritual peace surpasses understanding." },
    { id: 46, quote: "Stay rooted in hope." },
    { id: 47, quote: "Trust divine timing." },
    { id: 48, quote: "Grace renews daily." },
    { id: 49, quote: "God strengthens the weary." },
    { id: 50, quote: "Faith over fear." },
    { id: 51, quote: "Align with purpose and peace follows." }
];
let i = 0;
let quotes = document.getElementById('quote');
let textBody = document.querySelector('.text-body');
let mode = document.querySelector('.on-off');
function displayText(type) {

    textBody.innerHTML = `
        ${type[i].quote}
    `;

};
function quoteConditions() {
    let inner = document.querySelector('.inner-container');

    if (quotes.value === 'Love' && mode.innerHTML === 'LIGHT') {
        inner.style.background = 'rgb(255, 238, 230)';
        displayText(loveQuotes);
    } else if (quotes.value === 'Motivational' && mode.innerHTML === 'LIGHT') {
        inner.style.background = 'rgb(219, 234, 254)';
        displayText(motivationalQuotes);
    }
    else if (quotes.value === 'Spiritual' && mode.innerHTML === 'LIGHT') {
        inner.style.background = 'rgb(224, 195, 252)';
        displayText(spiritualQuotes);
    }
    else if (quotes.value === 'Select' && mode.innerHTML === 'LIGHT') {
        inner.style.background = 'rgb(230, 137, 137)';
        textBody.innerHTML = '';
    };

    if (quotes.value === 'Love' && mode.innerHTML === 'DARK') {
        displayText(loveQuotes);
    }
    else if (quotes.value === 'Motivational' && mode.innerHTML === 'DARK') {
        displayText(motivationalQuotes);
    }
    else if (quotes.value === 'Spiritual' && mode.innerHTML === 'DARK') {
        displayText(spiritualQuotes);
    };

};
document.querySelector('.gen-btn').addEventListener('click', () => {

    i++;
    if (i > 51) {
        i = 1;
    }
    quoteConditions();
});
quotes.addEventListener('change', (event) => {
    quoteConditions();
});
