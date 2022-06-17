function ordenar (){
  var nome1 = document.getElementById("texto1").value
  var nome2 = document.getElementById("texto2").value
  var nome3 = document.getElementById("texto3").value


  const arrayNomes = [nome1, nome2, nome3]
  let nomesOrdenados = arrayNomes.sort();

  console.log( arrayNomes.sort())

  nomes.innerHTML += `A ordem alfabetica crescente dos nomes é :  ${nomesOrdenados}`


};