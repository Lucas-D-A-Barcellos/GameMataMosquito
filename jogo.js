var altura=0
var largura=0
var vidas=1
var tempo=50
var mosca = document.createElement('img')

var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')


if (nivel==='normal') {

	criaMosquitoTempo = 2000

}else if (nivel==='dificil') {

	criaMosquitoTempo = 1300

}else if (nivel==='impossivel'){

	criaMosquitoTempo = 1000

}

function ajustaTamanhoPalco() { //função para ajustar o jogo com base nas dimensões da tela

	altura = window.innerHeight
	largura = window.innerWidth

	console.log(largura, altura)
}

ajustaTamanhoPalco();

	var cronometro = setInterval(function(){

	tempo-=1

	if (tempo < 0) {
		clearInterval(cronometro)
		clearInterval(criaMosca)
		window.location.href = 'vitoria.html'

	}else{
		document.getElementById('cronometro').innerHTML = tempo
	}
	
},1000)

function trocarImagemEsumir() { // função que troca imagem ao clicar
	var imagem = document.getElementById('mosca');
	  
	// Troca a imagem
	if (imagem.src.includes('imagens/mosca.png')) {
		imagem.src = 'imagens/mosca_morta.png';
	} else {
	    imagem.src = 'imagens/mosca_morta.png';
	}
	  
	// Remove o elemento após 1 segundo
	setTimeout(function() {
	    imagem.remove();
	}, 50);
}

mosca.onclick = trocarImagemEsumir //chamando função de troca de imagem ao clicar

function posicaoRandomica() { //função para inserir posicionamento randomico as moscas

	//remover mosquito anterior (caso exista)
	if (document.getElementById('mosca')) {

			document.getElementById('mosca').remove()
		
		if (vidas>3) {
			window.location.href = 'fim_de_jogo.html'
		}

		document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
		vidas++

	}
	

	var posicaoX = Math.floor(Math.random() * largura -90) //gerando posicionamento no eixo X e Y
	var posicaoY = Math.floor(Math.random() * altura -90)

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY 

		console.log(posicaoX, posicaoY)

	//criar elemento html inserindo suas classes e ID para formatação
	mosca.src = 'imagens/mosca.png'
	mosca.className = tamanhoRandomico() +  ' ' + ladoRandomico()
	mosca.style.left = posicaoX + 'px'
	mosca.style.top = posicaoY + 'px'
	mosca.style.position = 'absolute'
	mosca.id = 'mosca'

		document.body.appendChild(mosca)

	tamanhoRandomico()
}

function tamanhoRandomico(){ //função que insere tamanhos diferentes para os mosquitos

	var classe = Math.floor(Math.random() * 3)

	switch(classe){

		case 0:
			return 'mosca1'

		case 1:
			return 'mosca2'

		case 2:
			return 'mosca3'

	}

}

function ladoRandomico(){ //função que inverte o lado dos mosquitos para deixar mais dinâmico

	var classe = Math.floor(Math.random() * 2)

	switch(classe){

		case 0:
			return 'ladoA'

		case 1:
			return 'ladoB'

	}


}
