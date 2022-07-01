//função para pegar o valor inserido no formulario do mamaco
function capturar() {
    let campo = document.getElementById('campo').value;
    if (campo == "sovietico" || campo == "Soviético" || campo == "soviético"){
        alert("correto!");
    }else{alert("errado, tente novamente")}
}
function capturar2() {
    let meme = document.getElementById('meme').value;
    if (meme == "TIPOS DE CARINHAS" || meme == "Tipos de carinhas" || meme == "tipos de carinhas"){
        alert("MEMES!!!");
    }else{alert("errado, dumb pra krll")}
}

function darkmode() {
    document.body.style.backgroundColor = '#363636';
    document.body.style.color = 'white';
}

function whitemode() {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
}
