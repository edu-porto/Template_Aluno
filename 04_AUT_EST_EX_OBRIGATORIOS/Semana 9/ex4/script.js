function ordenar (){

  var total = 0;
  var numeroAtual = 1;
  var numeroAnterior = 0;
  var limite = document.getElementById("numero").value

  for (let i = 1; i <= limite; i++) {
  
    total  = numeroAnterior + numeroAtual;
    console.log (" O TOTAL " + total + " n anterior " + numeroAnterior +  " num atual " + numeroAtual)
    numeroAnterior = numeroAtual;
    numeroAtual = total;

    };
  
    sequencia.innerHTML +=`O ${limite}º número na sequência de Fibonacci é ${total} `;

};