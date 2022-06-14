function gravar (){
  var teste = document.getElementById("numero").value;
  var numero = (""+teste).split("");
  // essa função separa os algorismos

  if (numero[0] == 0 || numero[0] == 2 || numero[0] ==  4 || numero[0] ==  6 || numero[0] ==  8 ){
      alert("O primeiro algorismo é par")
     }
      else {
        alert("Número impár")
      }


    console.log("input " + teste + "numero :" + numero[0] )



};