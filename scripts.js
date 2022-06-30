//altera o titulo da pagina 1
const titulo = document.querySelector('h1');
titulo.textContent = 'Bluezão';

//função para pegar o valor inserido no formulario do mamaco
function capturar() {
    let campo = document.getElementById('campo').value;
    if (campo == "sovietico" || campo == "Soviético" || campo == "soviético"){
        alert("correto!");
    }else{alert("errado, tente novamente")}
}
function capturar() {
    let meme = document.getElementById('meme').value;
    if (meme == "TIPOS DE CARINHAS" || meme == "Tipos de carinhas" || meme == "tipos de carinhas"){
        alert("MEMES!!!");
    }else{alert("errado, dumb pra krll")}
}


