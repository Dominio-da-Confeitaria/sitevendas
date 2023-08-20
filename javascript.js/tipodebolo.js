var botaodobolopadrao = document.querySelector('#bolopadrao');
var botaodobolocomcobertura = document.querySelector('#bolocomcobertura');
var botaodoboloconfeitado = document.querySelector('#boloconfeitado');
var massasdebolo = document.querySelector('.massasdebolo');
var coberturasdebolo = document.querySelector('.coberturasdebolo');
var recheiosdobolo = document.querySelector('.recheiosdobolo');
var bolopadrao = document.querySelector('.bolo-padrao');
var bolocomcobertura = document.querySelector('.bolo-cobertura');
var boloconfeitado = document.querySelector('.bolo-confeitado');

botaodobolopadrao.addEventListener('click',function(){

    if (massasdebolo.style.display === 'block') {
        massasdebolo.style.display = 'none';
        bolocomcobertura.style.display = 'block';
        boloconfeitado.style.display = 'block';
        bolopadrao.style.width = '30%';
        botaodobolopadrao.style.backgroundColor = '#ffa500'
    } else {
        massasdebolo.style.display = 'block'
        bolocomcobertura.style.display = 'none';
        boloconfeitado.style.display = 'none';
        bolopadrao.style.width = '100%';
        bolopadrao.style.display = 'flex';
        botaodobolopadrao.style.backgroundColor = '#088c19';
    }
})

botaodobolocomcobertura.addEventListener('click',function(){

    if (massasdebolo.style.display === 'block') {
        massasdebolo.style.display = 'none';
        coberturasdebolo.style.display = 'none';
        bolopadrao.style.display = 'block';
        boloconfeitado.style.display = 'block';
        bolocomcobertura.style.width = '30%';
        botaodobolocomcobertura.style.backgroundColor = '#ffa500'
    } else {
        massasdebolo.style.display = 'block';
        coberturasdebolo.style.display = 'block';
        bolopadrao.style.display = 'none';
        boloconfeitado.style.display = 'none';
        bolocomcobertura.style.width = '100%';
        bolocomcobertura.style.display = 'flex';
        botaodobolocomcobertura.style.backgroundColor = '#088c19';
    }
})

botaodoboloconfeitado.addEventListener('click',function(){

    if (massasdebolo.style.display === 'block') {
        massasdebolo.style.display = 'none';
        coberturasdebolo.style.display = 'none';
        recheiosdobolo.style.display = 'none';
        bolopadrao.style.display = 'block';
        bolocomcobertura.style.display = 'block';
        bolocomcobertura.style.width = '30%';
        botaodoboloconfeitado.style.backgroundColor = '#ffa500'
    } else {
        massasdebolo.style.display = 'block';
        coberturasdebolo.style.display = 'block';
        recheiosdobolo.style.display = 'block';
        bolopadrao.style.display = 'none';
        bolocomcobertura.style.display = 'none';
        boloconfeitado.style.width = '100%';
        boloconfeitado.style.display = 'flex';
        botaodoboloconfeitado.style.backgroundColor = '#088c19';
    }
})

