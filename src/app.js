let who = ['El perro', 'Mi abuela', 'El cartero', 'Mi loro', 'Mi vecino', 'Un extraterrestre'];
let action = ['se comió', 'mojó', 'rompió', 'perdió', 'robó', 'aplastó'];
let what = ['mi tarea', 'mi teléfono', 'las llaves del coche', 'mi cuaderno', 'el informe', 'mi zapato'];
let when = ['antes de clase', 'mientras dormía', 'mientras cocinaba', 'cuando iba saliendo', 'durante la lluvia', 'justo ahora'];

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