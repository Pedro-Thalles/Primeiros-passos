

function TrocaTema(){
    const gambiarra = 1
    if (gambiarra === 1) {
        document.querySelector('.tema').src="imagens/moon.png"
        document.body.style.background='#23272A'
        document.querySelector('.botaotrocatema').classList.add('botaotrocatemaescuro')
        document.querySelector('.tema').classList.remove('botaotrocatema')
        document.querySelector('.listagifs').classList.add('listagifsescuro')
        document.querySelector('.listagifs').classList.remove('listagifs')
    }
}


