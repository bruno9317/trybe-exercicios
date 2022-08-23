let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

//   console.log('Bem-vinda, ' + info['personagem'])

  info['recorrente'] = 'sim';
  
  let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'sim',
}


  for(let key in info){
    console.log(info[key] + ' ' + info2[key]);
  }

//   for(let key in info){
//     console.log(key);
//   }