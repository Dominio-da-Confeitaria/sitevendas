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

botaosalgados.addEventListener('click',function(){

    if (salgados.style.display === 'block') {
        salgados.style.display = 'none';
        botaosalgados.style.backgroundColor = '#ffa500';

        quantidadecoxinhas.style.display = 'none';
        coxinhas.style.display = 'none';
        coxinhas.style.backgroundColor = '#ffa500';
        botaocoxinhas.style.backgroundColor = '#ffa500';
        botaocoxinhas.style.width = '30vw';
        quantidademinihamburguer.style.display = 'none';
        minihamburguer.style.display = 'none';
        minihamburguer.style.backgroundColor = '#ffa500';
        botaominihamburguer.style.backgroundColor = '#ffa500';
        botaominihamburguer.style.width = '30vw';
        quantidademinipastel.style.display = 'none';
        minipastel.style.display = 'none';
        minipastel.style.backgroundColor = '#ffa500';
        botaominipastel.style.backgroundColor = '#ffa500';
        botaominipastel.style.width = '30vw';
        quantidadeenroladinho.style.display = 'none';
        enroladinho.style.display = 'none';
        enroladinho.style.backgroundColor = '#ffa500';
        botaoenroladinho.style.backgroundColor = '#ffa500';
        botaoenroladinho.style.width = '30vw';
        quantidadebolinhadequeijo.style.display = 'none';
        bolinhadequeijo.style.display = 'none';
        bolinhadequeijo.style.backgroundColor = '#ffa500';
        botaobolinhadequeijo.style.backgroundColor = '#ffa500';
        botaobolinhadequeijo.style.width = '30vw';
        quantidadekibe.style.display = 'none';
        kibe.style.display = 'none';
        kibe.style.backgroundColor = '#ffa500';
        botaokibe.style.backgroundColor = '#ffa500';
        botaokibe.style.width = '30vw';

        quantidadecoxinhas.reset();
        quantidademinihamburguer.reset();
        quantidademinipastel.reset();
        quantidadeenroladinho.reset();
        quantidadebolinhadequeijo.reset();
        quantidadekibe.reset();
    } else {
        salgados.style.display = 'block';
        botaosalgados.style.backgroundColor = '#088c19';
    }
})

botaodoce.addEventListener('click',function(){

    if (doces.style.display === 'block') {
        doces.style.display = 'none';
        botaodoce.style.backgroundColor = '#ffa500';

        quantidadebrigadeiro.style.display = 'none';
        brigadeiro.style.display = 'none';
        brigadeiro.style.backgroundColor = '#ffa500';
        botaobrigadeiro.style.backgroundColor = '#ffa500';
        botaobrigadeiro.style.width = '30vw';
        quantidadebeijinho.style.display = 'none';
        beijinho.style.display = 'none';
        beijinho.style.backgroundColor = '#ffa500';
        botaobeijinho.style.backgroundColor = '#ffa500';
        botaobeijinho.style.width = '30vw';
        quantidadedoisamores.style.display = 'none';
        doisamores.style.display = 'none';
        doisamores.style.backgroundColor = '#ffa500';
        botaodoisamores.style.backgroundColor = '#ffa500';
        botaodoisamores.style.width = '30vw';
        quantidadebrigadeirodemorango.style.display = 'none';
        brigadeirodemorango.style.display = 'none';
        brigadeirodemorango.style.backgroundColor = '#ffa500';
        botaobrigadeirodemorango.style.backgroundColor = '#ffa500';
        botaobrigadeirodemorango.style.width = '30vw';
        quantidadebrigadeirodeuva.style.display = 'none';
        brigadeirodeuva.style.display = 'none';
        brigadeirodeuva.style.backgroundColor = '#ffa500';
        botaobrigadeirodeuva.style.backgroundColor = '#ffa500';
        botaobrigadeirodeuva.style.width = '30vw';
        quantidadebombom.style.display = 'none';
        bombom.style.display = 'none';
        bombom.style.backgroundColor = '#ffa500';
        botaobombom.style.backgroundColor = '#ffa500';
        botaobombom.style.width = '30vw';

        quantidadebrigadeiro.reset();
        quantidadebeijinho.reset();
        quantidadedoisamores.reset();
        quantidadebrigadeirodemorango.reset();
        quantidadebrigadeirodeuva.reset();
        quantidadebombom.reset();
    } else {
        doces.style.display = 'block';
        botaodoce.style.backgroundColor = '#088c19';
    }
})


