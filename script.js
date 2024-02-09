if (innerWidth < 830){
    function mudaBotao(){
        var botao2 = window.document.getElementById('botao2')

        // larguraArea e alturaArea define a altura e a largura da area onde o botao pode se mover 
        var larguraArea = window.innerWidth - botao2.offsetWidth
        var alturaArea = window.innerHeight - botao2.offsetHeight

        // gera coordenadas x e y aleatorias dentro da area
        var novaPosicaoX = Math.floor(Math.random() * larguraArea)
        var novaPosicaoY = Math.floor(Math.random() * alturaArea)


        //botao2.innerText = 'clicou'
        botao2.style.left = novaPosicaoX + 'px';
        botao2.style.top = novaPosicaoY + 'px';
        //botao2.style.display = 'none' //quando apertar o botao ele vai sumir 
    } 
}else{

    var botao2 = window.document.getElementById('botao2')
    botao2.addEventListener('mouseenter', entrou)

    function entrou(){
        //botao2.style.background = 'black'
        // larguraArea e alturaArea define a altura e a largura da area onde o botao pode se mover 
        var larguraArea = window.innerWidth - botao2.offsetWidth
        var alturaArea = window.innerHeight - botao2.offsetHeight

        // gera coordenadas x e y aleatorias dentro da area
        var novaPosicaoX = Math.floor(Math.random() * larguraArea)
        var novaPosicaoY = Math.floor(Math.random() * alturaArea)


        //botao2.innerText = 'clicou'
        botao2.style.left = novaPosicaoX + 'px';
        botao2.style.top = novaPosicaoY + 'px';
        

    }
    function mudaBotao(){
        botao2.style.display = 'none' //quando apertar o botao ele vai sumir 
    }
}
