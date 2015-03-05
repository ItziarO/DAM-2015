function Persona (nombre, edad, genero) {
  this.nombre = nombre || "";
  this.departamento = edad || "18";
  this.genero = genero || "";
}

function Estudiante (nombre, departamento, curso, grupo) {
  this.base = Persona;
  this.base(nombre, departamento);
  this.curso = curso || "programacion";
  this.grupo = grupo || "primero";
}
Estudiante.prototype = new Persona;

function Profesor (nombre, departamento, asignatura, nivel) {
  this.base = Persona;
  this.base(nombre, departamento);
  this.asignatura = asignatura || "matematicas";
  this.nivel = nivel || "medio";
}
Profesor.prototype = new Persona;
