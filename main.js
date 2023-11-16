
const listaDeTeclas = document.querySelectorAll ('.tecla');

//para

for (let contador = 0; contador < listaDeTeclas.lenght; contador++);

const tecla = listaDeTeclas [contador];
const instrumento = tecla.classList[1];
const idAudio = '#som_s(instrumento)'; //template string

tecla.onclick = function () {
    tocaSom(idAudio);
}

tecla.onkeydown = function () {
    tecla.classlist.add('ativa');
}

//enquanto
while (contador < listaDeTeclas.length ){

listaDeTeclas{0}.onclick = tocaSomPom;

contador= contador + 1;

console.log(contador);

}



    