function botãoAdd (){
  var valor1 = document.getElementById("texto1").value;
  var valor2 = document.getElementById("texto2").value;

    document.getElementById("num1").innerHTML = ("Texto 1 ") + valor1;

    document.getElementById("num2").innerHTML = ("Texto 2 ") + valor2;

    
    inverso1 = valor1
    inverso2 = valor2
      
    
      document.getElementById("troca").innerHTML = (" Inverso ") + inverso2 + " " + inverso1;
    console.log(valor1)
  
};


//ve como que faz isso dinâmico pra sempre ficar trocando 