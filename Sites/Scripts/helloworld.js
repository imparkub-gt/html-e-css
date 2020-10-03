let nome; //Define a variável nome
nome = prompt('Como te chamas?'); //Pergunta o nome
nome = 'Olá, ' + nome + '!' //Junta Olá com nome
alert(nome); //Diz Olá Nome

let doenca; //Define a variável doença
doenca = confirm('Estás doente?'); //Pergunta se o utilizador está doente
if (doenca == true) {alert('Vai ao médico!'); //Se o utilizador disser sim, ele diz-lhe para ir ao médico

 let covid; //Define a variável covid
 covid = confirm('É do COVID?'); //Pergunta se o utilizador está doente de COVID
 if (covid == true) {alert('Fica em casa! E ACHATA A CURVA!');} //Se sim ele diz Fica em Casa e Achata a Curva
 else {alert('Ótimo!')} //Se não ele diz Ótimo

 } else {alert('Ótimo!')}; //Se não estiver doente ele também diz ótimo
