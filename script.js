

function criptografar (){
    
    var texto =document.querySelector('.text-area').value;

    var textoModificado= texto
    .replace(/a/g, 'art')
    .replace(/e/g,'enter')
    .replace(/i/g,'imes')
    .replace(/o/g,'ober')
    .replace(/u/g,'ufat');
    document.querySelector('.mensagem').value = textoModificado;

   var caixaSaida = document.querySelector('.mensagem');

   caixaSaida.value = textoModificado;
   
   if (textoModificado.trim() !== '') {
       caixaSaida.style.backgroundImage = 'none'; 
    } else {
        caixaSaida.style.backgroundImage = 'url("/imagens/aventureira.png")'; 
    }
}

function descriptografar (){
    var texto =document.querySelector('.mensagem').value;

    var textoModificado= texto
    .replace(/art/g, 'a')
    .replace(/enter/g,'e')
    .replace(/imes/g,'i')
    .replace(/ober/g,'o')
    .replace(/ufat/g,'u');
    document.querySelector('.mensagem').value = textoModificado;

   var caixaSaida = document.querySelector('.mensagem');

   caixaSaida.value = textoModificado;
   
}



async function copiarTexto() {
    var caixaSaida = document.querySelector('.mensagem');

   try{
    await  navigator.clipboard.writeText(caixaSaida.value);
    alert('Texto copiado!');
} catch (err){
    console.error('Falha ao copiar ', err);
}

   
}


