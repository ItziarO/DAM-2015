function Persona (nombre, edad, genero) {
  this.nombre = nombre;
  this.departamento = edad;
  this.genero = genero;
this.obtDetalles = function (){
        console.log("nombre"+ this.nombre+ "edad"+this.edad+"genero"+ this.genero);
    }
}

function Estudiante (nombre, departamento, curso, grupo) {
  this.base = Persona;
  this.base(nombre, departamento);
  this.curso = curso;
  this.grupo = grupo;
    this.registrar = function (){
        console.log("Registrado: CUrso"+ this.curso+ "departamento"+ this.grupo);
    }
}
Estudiante.prototype = new Persona;

function Profesor (nombre, departamento, asignatura, nivel) {
  this.base = Persona;
  this.base(nombre, departamento);
  this.asignatura = asignatura || "matematicas";
  this.nivel = nivel || "medio";
     this.asignar = function (){
        console.log("Registrado: CUrso"+ this.curso+ "departamento"+ this.grupo);
    }
}
Profesor.prototype = new Persona;

var persona1 = new Persona ("Pepe",33,"masculino");
persona1.obtDetalles();
var estudiante1 = new Estudiante ("aitorEs", 32, "M", 2, 1);
persona1.obtDetalles();
estudiante1.registrar();
var profesor1= new Profesor ("aitorPr", 33, "M", "mate", 1);
profesor1.obtDetalles():
profesor1.asignar();

