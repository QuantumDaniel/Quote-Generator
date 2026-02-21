

function changeMode() {
    let mode = document.querySelector('.on-off');
    let main = document.querySelector('.inner-body');
    let quoteType = document.querySelector('.quote-type');
    let nameHeader = document.querySelector('.name-header');
    let genBtn = document.querySelector('.gen-btn');
    let copyBtn = document.querySelector('.copy-btn');


    let innerContainer = document.querySelector('.inner-container');

    if (mode.innerHTML === 'DARK') {
        main.style.background = '#121212';
        innerContainer.style.background = 'rgb(42, 42, 42)';
        quoteType.style.color = 'white';
        nameHeader.style.background = '#1E3A8A';
        nameHeader.style.color = '#F8F9FA';
        genBtn.style.background = '#1E3A8A';
        copyBtn.style.color = '#F8F9FA';

    }
    else if (mode.innerHTML === 'LIGHT') {
        main.style.background = 'white';
        innerContainer.style.background = '#ffe4e6';
        quoteType.style.color = 'black';
        nameHeader.style.background = ' #0D6EFD';
        nameHeader.style.color = '#ffff';
        genBtn.style.background = ' #0D6EFD';
        copyBtn.style.color = '#000';

    }
}



document.querySelector('.js-button2').addEventListener('click', () => {
    changeMode();

    document.querySelector('.js-button3').classList.add('button3');
    document.querySelector('.js-button4').classList.add('button4Change');
    document.querySelector('.js-button1').classList.add('button1Change');
    document.querySelector('.js-button2').classList.remove('button2');
    document.querySelector('.js-on-off').innerHTML = 'DARK';
    changeMode();
});

document.querySelector('.js-button3').addEventListener('click', () => {
    changeMode();

    document.querySelector('.js-button3').classList.remove('button3');
    document.querySelector('.js-button4').classList.remove('button4Change');
    document.querySelector('.js-button1').classList.remove('button1Change');
    document.querySelector('.js-button2').classList.add('button2');
    document.querySelector('.js-on-off').innerHTML = 'LIGHT';
    changeMode();

});
