let who = ['El perro', 'Mi abuela', 'El cartero', 'Mi loro'];
let action = ['se comió', 'mojó', 'rompió', 'perdió', 'robó'];
let what = ['mi tarea', 'mi teléfono', 'mi coche'];
let when = ['antes de clase', 'mientras dormía', 'mientras cocinaba', 'cuando iba saliendo', 'ahora'];

function generarExcusa() {
  let quien = who[Math.floor(Math.random() * who.length)];
  let accion = action[Math.floor(Math.random() * action.length)];
  let que = what[Math.floor(Math.random() * what.length)];
  let cuando = when[Math.floor(Math.random() * when.length)];

  return `${quien} ${accion} ${que} ${cuando}.`;
}

window.onload = function() {
  let excusa = document.getElementById("excuse");
  excusa.innerHTML = generarExcusa();
};