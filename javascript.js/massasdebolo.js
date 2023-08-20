var botaodamassadechocolate = document.querySelector('#botaodamassadechocolate');
var botaodamassadecenoura = document.querySelector('#botaodamassadecenoura');
var botaodamassadebaunilha = document.querySelector('#botaodamassadebaunilha');
var massadechocolate = document.querySelector('.massadechocolate');
var massadecenoura = document.querySelector('.massadecenoura');
var massadebaunilha = document.querySelector('.massadebaunilha');

botaodamassadechocolate.addEventListener('click',function(){

    if (massadecenoura.style.display === 'none') {
        massadecenoura.style.display = 'block';
        massadebaunilha.style.display = 'block';
        massadechocolate.style.width = '30%';
        botaodamassadechocolate.style.backgroundColor = '#ffa500'
    } else {
        massadecenoura.style.display = 'none';
        massadebaunilha.style.display = 'none';
        massadechocolate.style.width = '100%';
        massadechocolate.style.display = 'flex';
        botaodamassadechocolate.style.backgroundColor = '#088c19'
    }
})

botaodamassadecenoura.addEventListener('click',function(){

    if (massadebaunilha.style.display === 'none') {
        massadebaunilha.style.display = 'block';
        massadechocolate.style.display = 'block';
        massadecenoura.style.width = '30%';
        botaodamassadecenoura.style.backgroundColor = '#ffa500'
    } else {
        massadebaunilha.style.display = 'none';
        massadechocolate.style.display = 'none';
        massadecenoura.style.width = '100%';
        massadecenoura.style.display = 'flex';
        botaodamassadecenoura.style.backgroundColor = '#088c19'
    }
})

botaodamassadebaunilha.addEventListener('click',function(){

    if (massadechocolate.style.display === 'none') {
        massadechocolate.style.display = 'block';
        massadecenoura.style.display = 'block';
        massadebaunilha.style.width = '30%';
        botaodamassadebaunilha.style.backgroundColor = '#ffa500'
    } else {
        massadechocolate.style.display = 'none';
        massadecenoura.style.display = 'none';
        massadebaunilha.style.width = '100%';
        massadebaunilha.style.display = 'flex';
        botaodamassadebaunilha.style.backgroundColor = '#088c19'
    }
})



