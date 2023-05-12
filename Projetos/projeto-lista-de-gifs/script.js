gambiarra = 1

function TrocaTema(){
    console.log(gambiarra)
    if (gambiarra === 1) {
        document.querySelector('.tema').src="imagens/moon.png"
        gambiarra === 0
    } else if(gambiarra === 0){
        document.querySelector('.tema').src="imagens/sun.png"
        gambiarra === 1
    }
}

