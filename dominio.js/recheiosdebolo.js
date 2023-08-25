botaodorecheiodechocolate.addEventListener('click',function(){

    if (recheiodechocolatebranco.style.display === 'none') {
        recheiodechocolatebranco.style.display = 'block';
        recheiodeprestigio.style.display = 'block';
        botaorecheiochocolate.style.width = '30vw';
        botaodorecheiodechocolate.style.backgroundColor = '#ffa500';
    } else {
        recheiodechocolatebranco.style.display = 'none';
        recheiodeprestigio.style.display = 'none';
        botaorecheiochocolate.style.width = '98vw';
        recheiodechocolate.style.display = 'flex';
        botaodorecheiodechocolate.style.backgroundColor = '#088c19';
    }
})

botaodorecheiodechocolatebranco.addEventListener('click',function(){

    if (recheiodeprestigio.style.display === 'none') {
        recheiodeprestigio.style.display = 'block';
        recheiodechocolate.style.display = 'block';
        botaorecheiochocolatebranco.style.width = '30vw';
        botaodorecheiodechocolatebranco.style.backgroundColor = '#ffa500';
    } else {
        recheiodeprestigio.style.display = 'none';
        recheiodechocolate.style.display = 'none';
        botaorecheiochocolatebranco.style.width = '98vw';
        recheiodechocolatebranco.style.display = 'flex';
        botaodorecheiodechocolatebranco.style.backgroundColor = '#088c19';
    }
})

botaodorecheiodeprestigio.addEventListener('click',function(){

    if (recheiodechocolate.style.display === 'none') {
        recheiodechocolate.style.display = 'block';
        recheiodechocolatebranco.style.display = 'block';
        botaorecheioprestigio.style.width = '30vw';
        botaodorecheiodeprestigio.style.backgroundColor = '#ffa500';
    } else {
        recheiodechocolate.style.display = 'none';
        recheiodechocolatebranco.style.display = 'none';
        botaorecheioprestigio.style.width = '98vw';
        recheiodeprestigio.style.display = 'flex';
        botaodorecheiodeprestigio.style.backgroundColor = '#088c19';
    }
})