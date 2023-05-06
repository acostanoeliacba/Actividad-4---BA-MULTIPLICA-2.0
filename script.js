
console.log("Haciendo la tareas");
console.log("Estudiante: Noelia Acosta");
console.log("Probando JavaScript");

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

var diasDelMes= [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; 


console.log("Los meses que tienen 30 dias son: ")
for (let index = 0; index < diasDelMes.length; index++) {
    if (diasDelMes[index]==30) {
        console.log(meses[index])
    }
}
console.log("Los meses que tienen 31 dias son: ")
for (let index = 0; index < diasDelMes.length; index++) {
    if (diasDelMes[index]==31) {
        console.log(meses[index])
    }
}
console.log("FIN");
