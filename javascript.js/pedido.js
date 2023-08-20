var botaodobolo = document.querySelector('#botao-bolo');
var botaodobolopadrao = document.querySelector('#bolopadrao');
var botaodobolocomcobertura = document.querySelector('#bolocomcobertura');
var botaodoboloconfeitado = document.querySelector('#boloconfeitado');
var botaodamassadechocolate = document.querySelector('#botaodamassadechocolate');
var botaodamassadecenoura = document.querySelector('#botaodamassadecenoura');
var botaodamassadebaunilha = document.querySelector('#botaodamassadebaunilha');
var botaodacoberturadechocolate = document.querySelector('#botaodacoberturadechocolate');
var botaodacoberturadechantily = document.querySelector('#botaodacoberturadechantily');
var botaodacoberturadechocolatebranco = document.querySelector('#botaodacoberturadechocolatebranco');
var botaodorecheiodechocolate = document.querySelector('#botaodorecheiodechocolate');
var botaodorecheiodechocolatebranco = document.querySelector('#botaodorecheiodechocolatebranco');
var botaodorecheiodeprestigio = document.querySelector('#botaodorecheiodeprestigio');
var tiposdebolo = document.querySelector('.tiposdebolo');
var massasdebolo = document.querySelector('.massasdebolo');
var coberturasdebolo = document.querySelector('.coberturasdebolo');
var recheiosdobolo = document.querySelector('.recheiosdobolo');


botaodobolo.addEventListener('click',function(){

    if (tiposdebolo.style.display === 'block') {
        tiposdebolo.style.display = 'none';
        massasdebolo.style.display = 'none';
        coberturasdebolo.style.display = 'none';
        recheiosdobolo.style.display = 'none';
        botaodobolo.style.backgroundColor = '#ffa500';
    } else {
        tiposdebolo.style.display = 'block';
        botaodobolo.style.backgroundColor = '#088c19';
    }
})

