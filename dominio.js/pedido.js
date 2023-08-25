botaodobolo.addEventListener('click',function(){

    if (tiposdebolo.style.display === 'block') {
        tiposdebolo.style.display = 'none';
        massasdebolo.style.display = 'none';
        coberturasdebolo.style.display = 'none';
        recheiosdobolo.style.display = 'none';

        botaobolopadrao.style.width = '30vw';
        botaodobolopadrao.style.backgroundColor = '#ffa500';
        botaobolocomcobertura.style.width = '30vw';
        botaodobolocomcobertura.style.backgroundColor = '#ffa500';
        botaoboloconfeitado.style.width = '30vw';
        botaodoboloconfeitado.style.backgroundColor = '#ffa500';

        botaomassachocolate.style.width = '30vw';
        botaodamassadechocolate.style.backgroundColor = '#ffa500';
        botaomassacenoura.style.width = '30vw';
        botaodamassadecenoura.style.backgroundColor = '#ffa500';
        botaomassabaunilha.style.width = '30vw';
        botaodamassadebaunilha.style.backgroundColor = '#ffa500';

        botaocoberturachocolate.style.width = '30vw';
        botaodacoberturadechocolate.style.backgroundColor = '#ffa500';
        botaocoberturachantily.style.width = '30vw';
        botaodacoberturadechantily.style.backgroundColor = '#ffa500';
        botaocoberturachocolatebranco.style.width = '30vw';
        botaodacoberturadechocolatebranco.style.backgroundColor = '#ffa500';

        botaorecheiochocolate.style.width = '30vw';
        botaodorecheiodechocolate.style.backgroundColor = '#ffa500';
        botaorecheiochocolatebranco.style.width = '30vw';
        botaodorecheiodechocolatebranco.style.backgroundColor = '#ffa500';
        botaorecheioprestigio.style.width = '30vw';
        botaodorecheiodeprestigio.style.backgroundColor = '#ffa500';
        

        botaodobolo.style.backgroundColor = '#ffa500';
    } else {
        tiposdebolo.style.display = 'block';

        bolopadrao.style.display = 'block';
        bolocomcobertura.style.display = 'block';
        boloconfeitado.style.display = 'block';

        massadechocolate.style.display = 'block';
        massadecenoura.style.display = 'block';
        massadebaunilha.style.display = 'block';

        coberturadechocolate.style.display = 'block';
        coberturadechantily.style.display = 'block';
        coberturadechocolatebranco.style.display = 'block';

        recheiodechocolate.style.display = 'block';
        recheiodechocolatebranco.style.display = 'block';
        recheiodeprestigio.style.display = 'block';

        botaodobolo.style.backgroundColor = '#088c19';
    }
})

