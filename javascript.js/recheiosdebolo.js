var botaodorecheiodechocolate = document.querySelector('#botaodorecheiodechocolate');
var botaodorecheiodechocolatebranco = document.querySelector('#botaodorecheiodechocolatebranco');
var botaodorecheiodeprestigio = document.querySelector('#botaodorecheiodeprestigio');
var recheiodechocolate = document.querySelector('.recheiodechocolate');
var recheiodechocolatebranco = document.querySelector('.recheiodechocolatebranco');
var recheiodeprestigio = document.querySelector('.recheiodeprestigio');

botaodorecheiodechocolate.addEventListener('click',function(){

    if (recheiodechocolatebranco.style.display === 'none') {
        recheiodechocolatebranco.style.display = 'block';
        recheiodeprestigio.style.display = 'block';
        recheiodechocolate.style.width = '30%';
        botaodorecheiodechocolate.style.backgroundColor = '#ffa500'
    } else {
        recheiodechocolatebranco.style.display = 'none';
        recheiodeprestigio.style.display = 'none';
        recheiodechocolate.style.width = '100%';
        recheiodechocolate.style.display = 'flex';
        botaodorecheiodechocolate.style.backgroundColor = '#088c19'
    }
})

botaodorecheiodechocolatebranco.addEventListener('click',function(){

    if (recheiodeprestigio.style.display === 'none') {
        recheiodeprestigio.style.display = 'block';
        recheiodechocolate.style.display = 'block';
        recheiodechocolatebranco.style.width = '30%';
        botaodorecheiodechocolatebranco.style.backgroundColor = '#ffa500'
    } else {
        recheiodeprestigio.style.display = 'none';
        recheiodechocolate.style.display = 'none';
        recheiodechocolatebranco.style.width = '100%';
        recheiodechocolatebranco.style.display = 'flex';
        botaodorecheiodechocolatebranco.style.backgroundColor = '#088c19'
    }
})

botaodorecheiodeprestigio.addEventListener('click',function(){

    if (recheiodechocolate.style.display === 'none') {
        recheiodechocolate.style.display = 'block';
        recheiodechocolatebranco.style.display = 'block';
        recheiodeprestigio.style.width = '30%';
        botaodorecheiodeprestigio.style.backgroundColor = '#ffa500'
    } else {
        recheiodechocolate.style.display = 'none';
        recheiodechocolatebranco.style.display = 'none';
        recheiodeprestigio.style.width = '100%';
        recheiodeprestigio.style.display = 'flex';
        botaodorecheiodeprestigio.style.backgroundColor = '#088c19'
    }
})