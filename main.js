function tocaSom (selectorAudio) {
    const elemento = document.querySelector(selectorAudio);

    if (elemento != null && elemento.localName === 'audio'){
        elemento.play();
    }
    else{
        console.log('Elemento não encontrado ou seletor invalido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }
    tecla.onkeydown = function (evento){
        console.log(evento.code === 'Space')
        if (evento.code === 'Space' || evento.code === 'Enter'){    
        tecla.classlist.add('ativa');
    }
}
    tecla.onkeyup = function () {
        tecla.classList.remove('')
    }
}