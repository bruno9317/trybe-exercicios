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

function addClasseDayAndHoliday(){
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
addClasseDayAndHoliday();

  