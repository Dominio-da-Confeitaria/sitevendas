botaodamassadechocolate.addEventListener('click',function(){

    if (massadecenoura.style.display === 'none') {
        massadecenoura.style.display = 'block';
        massadebaunilha.style.display = 'block';
        botaomassachocolate.style.width = '30vw';
        botaodamassadechocolate.style.backgroundColor = '#ffa500';
    } else {
        massadecenoura.style.display = 'none';
        massadebaunilha.style.display = 'none';
        botaomassachocolate.style.width = '98vw';
        massadechocolate.style.display = 'flex';
        botaodamassadechocolate.style.backgroundColor = '#088c19';
    }
})

botaodamassadecenoura.addEventListener('click',function(){

    if (massadebaunilha.style.display === 'none') {
        massadebaunilha.style.display = 'block';
        massadechocolate.style.display = 'block';
        botaomassacenoura.style.width = '30vw';
        botaodamassadecenoura.style.backgroundColor = '#ffa500';
    } else {
        massadebaunilha.style.display = 'none';
        massadechocolate.style.display = 'none';
        botaomassacenoura.style.width = '98vw';
        massadecenoura.style.display = 'flex';
        botaodamassadecenoura.style.backgroundColor = '#088c19';
    }
})

botaodamassadebaunilha.addEventListener('click',function(){

    if (massadechocolate.style.display === 'none') {
        massadechocolate.style.display = 'block';
        massadecenoura.style.display = 'block';
        botaomassabaunilha.style.width = '30vw';
        botaodamassadebaunilha.style.backgroundColor = '#ffa500';
    } else {
        massadechocolate.style.display = 'none';
        massadecenoura.style.display = 'none';
        botaomassabaunilha.style.width = '98vw';
        massadebaunilha.style.display = 'flex';
        botaodamassadebaunilha.style.backgroundColor = '#088c19';
    }
})



