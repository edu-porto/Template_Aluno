

function ordenar (){

  var limite1 = document.getElementById("numero1").value;
  var limite2 = document.getElementById("numero2").value;


  var array = [];
  let total = [];
  let primos = true
  var monkey = []
  //Com esse for consigo adicionar um numero de cada vez a array total 
  for (let i = limite1; i <= limite2; i++) {
  
    array = + [i] ;
    total [i] = array

  
  };
    // agora preciso fazer com que cada elemento da array total seja checado 
    // se atender as condiçoes especificas de ser primo o valor é anotado em uma outra array 

  total.forEach( element => {
    if (element % 2 !== 0 && element % 5 !== 0 && element % 1 == 0){
      monkey.push(element);
    }
    
  });
    
  //2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43
  //47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109,

    console.log(monkey)
  
  };  



