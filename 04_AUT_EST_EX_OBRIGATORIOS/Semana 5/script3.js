

function testar_logica(){
  var inputUser = document.getElementById("numeroA").value;
  //var numeroFoco = document.getElementById("NumeroFoco").value;

  var lista = [inputUser]

  var Testando = [lista];
  
  var tamanho = Testando.length;
  for (var i = 0; i < length; i++){
    for (var t = 0; t < (length - i - 1); t++){
      if(tamanho[t] > tamanho[t+1]){
        var tmp = tamanho[t];
        tamanho[t] = tamanho[t+1];
        tamanho[t+1] = tmp ;
      }
    }
  }

  var arr = [inputUser]
  testar_logica(arr)

  console.log(arr)
  //document.getElementById("resultados1").innerHTML =   testando1 ;
  
  //console.log(testando100,testando50,testando20,testando10,testando5,testando2,testando1)
}

