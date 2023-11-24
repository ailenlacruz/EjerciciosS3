/*2) Crea una expresión regular para validar una contraseña: 
    a) Que tenga mínimo 7 caracteres.
    b) Al menos 1 mayúscula.
    c) Al menos 1 numero.
    d) Al menos 1 carácter especial.
*/

let contraseña = prompt('Escribe la contraseña');
let regex = /(?=.*[A-Z])(?=.*\d)(?=.*\W)[A-Za-z\d\W]{7,}/g;
console.log(contraseña.match(regex));