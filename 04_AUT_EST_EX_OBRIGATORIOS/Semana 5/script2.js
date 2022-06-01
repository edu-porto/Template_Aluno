

function testar_logica(){
  var inputNoob = document.getElementById("numeroA").value;

  var resutltado = (inputNoob-(inputNoob%100))/100 //aqui me da quantas notas de 100  preciso
  var sobraNotas = (inputNoob%100) //numero que eh pra sobrar

  var testando = (sobraNotas-(sobraNotas%50))/50 //notas de 50 necessitam 
  
  var resto50 = sobraNotas%50 

  var testando2 = (resto50-(resto50%20))/20
  
  
  


  
  // PRECISO ENCONTRAR UM METODO PARA COMPARAR COM OS VALORES INDIVIDUAIS DE CADA OBJETO
  // DAR UMA OLHADA AFUNDO NESSA SOLUÇAO https://pt.stackoverflow.com/questions/398871/calcular-troco-e-exibir-notas-dispon%C3%ADveis-com-javascript  
  console.log(resutltado, testando,testando2)
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