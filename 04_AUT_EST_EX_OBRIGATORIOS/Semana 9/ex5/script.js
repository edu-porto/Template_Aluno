

function ordenar (){

  var limite1 = document.getElementById("numero1").value;
  var limite2 = document.getElementById("numero2").value;


  var array = [];
  let total = [];
  let primos = [];
  //Com esse for consigo adicionar um numero de cada vez a array total 
  for (let i = limite1; i <= limite2; i++) {
  
     array = + [i] ;
     total [i] = array
    let condicao = 0;

    // aqui checamos se o número não é primo 
      for ( let j = 2; j < i; j++){
        if (i % j == 0){
          condicao = 1;
          break; 
        }
      }

      // aqui os numeros primos são colocados dentro de uma lista
      if ( i > 1 && condicao == 0){
        primos.push(i)
      }

    }
    

    
    numeros.innerHTML += `Os seguintes números são primos : ${primos} <br />`;
  
  
  };  



