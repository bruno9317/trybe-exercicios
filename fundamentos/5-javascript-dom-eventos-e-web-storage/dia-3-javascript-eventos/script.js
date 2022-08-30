function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  

  function createDaysOfTheMonth(){
    const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const lista = document.getElementById('days');

  for (let index = 0; index < decemberDaysList.length; index += 1){
    let dia = decemberDaysList[index];
    let diasDoMes = document.createElement('li');
    diasDoMes.innerHTML = dia;
    lista.appendChild(diasDoMes);
  }
}

function addClasseS(){
  let listaDeFilhos = document.getElementById('days').children;
  for (let index = 0; index < listaDeFilhos.length; index += 1){
    if(listaDeFilhos[index].innerText === '24' || listaDeFilhos[index].innerText === '31'){
      listaDeFilhos[index].className = "day holiday";
    }else if(listaDeFilhos[index].innerText === '25'){
      listaDeFilhos[index].className = "day holiday friday";
    }else if (listaDeFilhos[index].innerText === '4' || listaDeFilhos[index].innerText === '11'|| listaDeFilhos[index].innerText === '18'){
      listaDeFilhos[index].className = "day friday";
    }else {
      listaDeFilhos[index].className = "day1";
    }
  }
}

createDaysOfTheMonth();
addClasseS();

// let string = 'feriado';
// let local1 = document.getElementsByClassName("buttons-container");
// let criar = document.createElement('p');
// criar.innerText = string;
// local1.appendChild(criar);
function adcionaButao(){
let p = document.createElement("h3");
p.innerText = 'Feriados';
document.body.children[3].appendChild(p);
document.body.children[3].children[0].setAttribute('id', 'btn-holiday');
}
adcionaButao();

function recebeClick(){
  let aqui = document.getElementsByClassName("holiday");

  for (let index = 0; index < aqui.length; index += 1) {
    aqui[index].style.backgroundColor = "blue";
    aqui[index].style.color = "red";
  }
}

function click1(recebeClick2){
  let clickF = document.getElementById("btn-holiday");
clickF.addEventListener("click", recebeClick2);
}

click1(recebeClick);

function adcionaButao2(){
  let p = document.createElement("h3");
  p.innerText = 'Sexta-feira';
  document.body.children[3].appendChild(p);
  document.body.children[3].children[1].setAttribute('id', 'btn-friday');
}
adcionaButao2();


