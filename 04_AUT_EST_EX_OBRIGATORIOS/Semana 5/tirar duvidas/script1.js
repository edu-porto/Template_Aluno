var ListaExperiencias = [];
var anotarExp = {
  frase: ""
};

var listaB = [];
var anotarB = {
    numeroB: ""
};

function anotarNumeroB (){
    var valor2 = document.getElementById("numeroB").value;
    var valorB = Object.create(listaB);
    valorB.numeroB =valor2;
    listaB.push(valorB);
    console.log(listaB)
};
function anotarExperiencia(){
  var nome = document.getElementById("ExperienciaUser").value;
  var experiencia = Object.create(anotarExp);
  experiencia.frase = nome;
  ListaExperiencias.push(experiencia);
  console.log(nome);
};
//A função anotar grave os inputs do usúario em uma lista 

function somar(){
    var A = ListaExperiencias;
    var B = listaB;
    var ultimoA = A[A.length - 1];
    var ultimoB = B[B.length - 1];

    
    var total = ultimoA + ultimoB

    console.log(total)
    
   //19:26 consegui converter os elementos da lista mais da um erro NaN 
    
};
// estou com dificuldade em pegar o ultimo elemento da array, transformar de string pra numero e somar 


function mostrarExperiencia(){
  var lista = "<table>";
  for (var i=0 ; i<ListaExperiencias.length ; i++){
    lista += "<tr>";
    lista += "<td>" + ListaExperiencias[i].frase + "</td>";
    lista += "</tr>";
  };
  lista += "</table>";
  document.getElementById("listaexperiencias2").innerHTML = lista;
  console.log(ListaExperiencias);
};