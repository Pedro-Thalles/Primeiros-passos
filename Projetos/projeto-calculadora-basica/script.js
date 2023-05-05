var Mostra = document.getElementsByClassName('local')[0]
var calc1=''
var calcmid=''
var calc2=''
var calcres=''             
function Limpar(){            
    document.getElementsByClassName('local')[0].innerHTML=''
    calc1=''
    calcmid=''
    calc2=''
    calcres=''
}        
function Porcentagem(){
if(calc1.toString().length == 0){
alert('Syntax error')
} else {
    if(calcmid.toString() != 0){
        alert('Syntax error')
    } else {
calcmid='%'
Mostra.innerHTML+='%'
}
}                                  
}
function Divisão(){
    if(calc1.toString().length == 0){
        alert('Syntax error')
    } else{
        if(calcmid.toString() != 0){
            alert('Syntax error')
        } else {
        calcmid = ':'
        Mostra.innerHTML+=':'
        }               
    }           
}
function Multi(){
    if(calc1.toString().length == 0){
        alert('Syntax error')
    } else{
        if(calcmid.toString() != 0){
            alert('Syntax error')
        } else {
        calcmid = 'x'
        Mostra.innerHTML+='x'
    }               
    }       
}
function Subtrai(){
    if(calc1.toString().length == 0){
        alert('Syntax error')
    } else{
        if(calcmid.toString() != 0){
            alert('Syntax error')
        } else {
        calcmid = '-'
        Mostra.innerHTML+='-'}

    }
}
function Soma(){
    if(calc1.toString().length == 0){
        alert('Syntax error')
    } else{
        if(calcmid.toString() != 0){
            alert('Syntax error')
        } else {
        calcmid = '+'
        Mostra.innerHTML+='+'}               
    }
}
function Result(){
    if(calcmid.length == 0){
        alert('[Erro] Termine a equação')
    } else if(calcmid === '%'){
        if(calc2.length == 0){
            calcres=calc1/100
            Mostra.innerHTML = calcres
            calc2=''
            calcmid=''
            calc1=calcres
        } else {
            calcres=calc1/100 * calc2
            Mostra.innerHTML = calcres
            calc2=''
            calcmid=''
            calc1=calcres
        }             
    } else if(calcmid===':'){
        if(calc2.length == 0){
            alert('[Erro] Termine a equação')
        } else {
            calcres= calc1/calc2
            Mostra.innerHTML = calcres
            calc2=''
            calcmid=''
            calc1=calcres
        }
    } else if(calcmid==='x'){
        if(calc2.length == 0){
            alert('[Erro] Termine a equação')
        } else {
            calcres= calc1*calc2
            Mostra.innerHTML = calcres
            calc2=''
            calcmid=''
            calc1=calcres
        }
    } else if(calcmid==='-'){
        if(calc2.length == 0){
            alert('[Erro] Termine a equação')
        } else {
            calcres= calc1-calc2
            Mostra.innerHTML = calcres
            calc2=''
            calcmid=''
            calc1=calcres
        }
    } else if(calcmid==='+'){
        if(calc2.length == 0){
            alert('[Erro] Termine a equação')
        } else {
            calcres= Number(calc1)+Number(calc2)
            Mostra.innerHTML = calcres
            calc2=''
            calcmid=''
            calc1=calcres
        }
    }
}
function Zero(){
    Mostra.innerHTML += '0'
    if(calcmid.length == 0){                                                 
            calc1 += 0               
    } else{
        calc2+=0
    }      
}
function Um(){
    Mostra.innerHTML += '1'
    if(calcmid.length == 0){                                    
            calc1 += 1
    } else{
        calc2+=1
    }           
}
function Dois(){
    Mostra.innerHTML += '2'             
    if(calcmid.length == 0){
            calc1 += 2
    } else{
        calc2+=2
    }             
}
function Três(){
    Mostra.innerHTML += '3'
    if(calcmid.length == 0){
            calc1 += 3
    } else{
        calc2+=3
    }
}
function Quatro(){
    Mostra.innerHTML += '4'
    if(calcmid.length == 0){
            calc1 += 4
    } else{
        calc2+=4
    }
}
function Cinco(){
    Mostra.innerHTML += '5'
    if(calcmid.length == 0){
            calc1 += 5
    } else{
        calc2+=5
    }
}
function Seis(){
    Mostra.innerHTML += '6'
    if(calcmid.length == 0){
            calc1 += 6
    } else{
        calc2+=6
    }
}
function Sete(){
    Mostra.innerHTML += '7'
    if(calcmid.length == 0){
            calc1 += 7
    } else{
        calc2+=7
    }
}
function Oito(){
    Mostra.innerHTML += '8'
    if(calcmid.length == 0){
            calc1 += 8
    } else{
        calc2+=8
    }
}
function Nove(){
    Mostra.innerHTML += '9'
    if(calcmid.length == 0){
            calc1 += 9
    } else{
        calc2+=9
    }
}
