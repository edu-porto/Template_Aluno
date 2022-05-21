
function subtrair(){
  var valor1 = document.getElementById("numeroA").value;
  var valor2 = document.getElementById("numeroB").value;

  var total1 = valor1 - valor2

  var resultados = "<h1>" ;
  document.getElementById("resultados").innerHTML = resultados + total1 ;
}

function somar(){
  var valor1 = document.getElementById("numeroA").value;
  var valor2 = document.getElementById("numeroB").value;
  var total2 = parseInt(valor1) + parseInt(valor2)
  var resultados = "<h1>" ;
  document.getElementById("resultados").innerHTML = resultados + total2 ;
}

function dividir (){
  var valor1 = document.getElementById("numeroA").value;
  var valor2 = document.getElementById("numeroB").value;
  var total3 = valor1 / valor2
  var resultados = "<h1>" ;
  document.getElementById("resultados").innerHTML = resultados + total3 ;
}

function quociente(){
  var valor1 = document.getElementById("numeroA").value;
  var valor2 = document.getElementById("numeroB").value;
  var total4 = Math.floor(valor1/valor2)
 
  var resultados = "<h1>" ;
  document.getElementById("resultados").innerHTML = resultados + total4 ;
}

function porcentagem(){
  var valor1 = document.getElementById("numeroA").value;
  var valor2 = document.getElementById("numeroB").value;

  var regraTres = parseInt(valor1)*100
  var total5 = parseInt(regraTres)/parseInt(valor2)
  

  var resultados = "<h1>" ;
  document.getElementById("resultados").innerHTML = resultados + total5 ;

}
// todas as funções pegam o input do usúario, salvam como uma variavel.
// logo em seguida é criada uma variavel chamada resultados que serve como um header de html
// nela e mandado para o html o total da operação inputada pelo usuario e o header