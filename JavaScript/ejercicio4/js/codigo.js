var fecha = /\d{2}\/\d{2}\/\d{4}/;
console.log(fecha.test("Nací el 05/04/1982 en Donostia."));

var email = /\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

console.log(email.text("email@email.com"));
