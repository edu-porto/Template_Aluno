

function testar_logica(){
  var inputUser = document.getElementById("numeroA").value;

  var testando100 = (inputUser-(inputUser%100))/100 //aqui me da quantas notas de 100  preciso
  inputUser = (inputUser%100) //numero que eh pra sobrar

  var testando50 = (inputUser-(inputUser%50))/50 //notas de 50 necessitam 
  inputUser = inputUser%50 

  var testando20 = (inputUser-(inputUser%20))/20 //notas de 20 que precisa
  inputUser = inputUser%20
  
  var testando10 = (inputUser-(inputUser%10))/10  //notas de 10 que precisa
  inputUser = inputUser%10

  var testando5 = (inputUser-(inputUser%5))/5
  inputUser = inputUser%5

  var testando2 = (inputUser-(inputUser%2))/2
  inputUser = inputUser%2

  var testando1 = (inputUser-(inputUser%1))/1


  var resultados = "<h1>" ;
  document.getElementById("resultados").innerHTML =  testando100 ;
  resultados.appendChild(resultados)
  resultados.appendChild(document.createElement("br"))
  document.getElementById("resultados").innerHTML =  testando50 ;
  
  console.log(testando100,testando50,testando20,testando10,testando5,testando2,testando1)
}

