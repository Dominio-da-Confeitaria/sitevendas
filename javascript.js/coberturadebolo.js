var botaodacoberturadechocolate = document.querySelector('#botaodacoberturadechocolate');
var botaodacoberturadechantily = document.querySelector('#botaodacoberturadechantily');
var botaodacoberturadechocolatebranco = document.querySelector('#botaodacoberturadechocolatebranco');
var coberturadechocolate = document.querySelector('.coberturadechocolate');
var coberturadechantily = document.querySelector('.coberturadechantily');
var coberturadechocolatebranco = document.querySelector('.coberturadechocolatebranco');

botaodacoberturadechocolate.addEventListener('click',function(){

    if (coberturadechantily.style.display === 'none') {
        coberturadechantily.style.display = 'block';
        coberturadechocolatebranco.style.display = 'block';
        coberturadechocolate.style.width = '30%';
        botaodacoberturadechocolate.style.backgroundColor = '#ffa500'
    } else {
        coberturadechantily.style.display = 'none';
        coberturadechocolatebranco.style.display = 'none';
        coberturadechocolate.style.width = '100%';
        coberturadechocolate.style.display = 'flex';
        botaodacoberturadechocolate.style.backgroundColor = '#088c19'
    }
})

botaodacoberturadechantily.addEventListener('click',function(){

    if (coberturadechocolatebranco.style.display === 'none') {
        coberturadechocolatebranco.style.display = 'block';
        coberturadechocolate.style.display = 'block';
        coberturadechantily.style.width = '30%';
        botaodacoberturadechantily.style.backgroundColor = '#ffa500'
    } else {
        coberturadechocolatebranco.style.display = 'none';
        coberturadechocolate.style.display = 'none';
        coberturadechantily.style.width = '100%';
        coberturadechantily.style.display = 'flex';
        botaodacoberturadechantily.style.backgroundColor = '#088c19'
    }
})

botaodacoberturadechocolatebranco.addEventListener('click',function(){

    if (coberturadechocolate.style.display === 'none') {
        coberturadechocolate.style.display = 'block';
        coberturadechantily.style.display = 'block';
        coberturadechocolatebranco.style.width = '30%';
        botaodacoberturadechocolatebranco.style.backgroundColor = '#ffa500'
    } else {
        coberturadechocolate.style.display = 'none';
        coberturadechantily.style.display = 'none';
        coberturadechocolatebranco.style.width = '100%';
        coberturadechocolatebranco.style.display = 'flex';
        botaodacoberturadechocolatebranco.style.backgroundColor = '#088c19'
    }
})