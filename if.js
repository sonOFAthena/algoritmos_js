// problema: Programar correctamente mi dia
/**
 * Fulanito quiere mejorar su productividad diaria, por ello
 * quiere organizar su dia de la mejor manera para poder alcanzar sus 
 * metas prontamente y tener tiempo para desarrollarse y disfrutar
 * en otros aspectos de la vida.
 * 
 * El problema ocurre cuando Fulanito falla en realizar algunas de sus 
 * labores a tiempo, en ese momento todo el dia se descontrola y la 
 * curva de productividad se viene al piso.
 * 
 * Con este programa se pretende realizar un plan de agendamiento y 
 * rescate en caso de fallar alguna de sus labores.
 */

/**
 * Actividades de fulanito Dia1 (Input diario):
 * - Hacer deporte muy temprano en la mañana diariamente.
 * - Meditar.
 * - Participar del Bootcamp de LarnU.
 * - Realizar el desario diario de LarnU.
 * - Aprender Ingles.
 * - Aprender Ruso.
 * - Realizar su curso diario de productividad.
 * - Caminar por el bosque o ir por un jugo de naranja en la tarde.
 * - Pulir los conocimiento en desarrollo web y hacer mejoras
 */

console.log('problema: Colapso de la productividad');

let agenda = ["sport", "meditation", "bootcamp", "challenge" , "english", "russian", "social", "improment"];
let agendaCheck = [false, false, false, false, false, false, false, false];
let agendaSet = true;

let person = {
  name: 'Fulanito',
  age: 29,
  agenda: this.agenda
}

console.log("welcome " + person.name + ", this is your AgendAI. I will support you with your tasks");

if (agendaSet) {
  console.log("Now we are begining with your daily task");
  console.log("The first task is: " + agenda[0]);

  //dado este punto el usuario debe confirmar si la tarea fue realizada.
  agendaCheck[0] = true;

  if (agendaCheck[0]){
    console.log("Good Job " + person.name);
    console.log("Now take a 10 min break and then continue with the next task that is: " + agenda[1]);
  }else{
    console.log("don't worry, now you need to try the next activity on time. On night we will adjust agenda to next day and do the respective modifications to fit");
  }


  if (agendaCheck[0] && agendaCheck[1]){
    console.log("You are performing so great, continue so on");
  }else{
    //llegada la hora de la siguiente actividad
    console.log("The next task in you agenda is: " + agenda[2]);
    
    //el usuario debe confirmar si la tarea fue realizada.
    agendaCheck[3] = true;

    if (agendaCheck[3]){
      console.log("Good Job " + person.name);
      console.log("Now take a 10 min break and then continue with the next task that is: " + agenda[4]);
    }else{
      console.log("are you sure that is neccesary to do this task?");
    }

    //and so on
  }

} else {
  console.log("first set the agenda tasks ");
}
