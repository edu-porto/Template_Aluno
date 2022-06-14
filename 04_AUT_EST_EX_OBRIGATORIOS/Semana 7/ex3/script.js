function checar (){
  var valor1 = document.getElementById("numero1").value;
  var checagem = /^\([0-9]{2}\)([0-9]{5})[-.]([0-9]{4})$/;
  
 //função .test é nativa do javascript 
 var teste = checagem.test(valor1)

  if(teste == true)
    alert("Número correto")
    else {
      alert ("Número incorreto")
    }

  console.log(teste)
};


//ve como que faz isso dinâmico pra sempre ficar trocando 