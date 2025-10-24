let who = ['El perro', 'Mi abuela', 'El cartero', 'Mi pajaro'];
let action = ['se comió', 'se meo', 'aplasto', 'rompio'];
let what = ['mi tarea', 'mi teléfono', 'mi coche'];
let when = ['antes de clase', 'cuando dormía', 'cuando hacia ejercicio', 'mientras almorzaba', 'cuando rezaba'];

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