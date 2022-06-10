

function testar_logica(){
  var inputUser = document.getElementById("numeroA").value;
  var numeroFoco = document.getElementById("NumeroFoco").value;
  var indice
  var lista = inputUser.split(',')
  //var lista = [inputUser]
  
// colocar a lista em indice 
const comp = (a, b) => a - b;

var lista_ordenada = lista.sort(comp)

  for ( let i in lista ){
    if (lista[i] == numeroFoco){
      indice = i
      break;
    }
  }


 for (let n in lista){
   if(lista[n] == numeroFoco){
     indice = n
     break
   } else {
     indice = -1
   }
 }


  
  console.log(lista_ordenada)
  console.log(indice)
  
  //document.getElementById("resultados1").innerHTML =   testando1 ;
  
  //console.log(testando100,testando50,testando20,testando10,testando5,testando2,testando1)
}

