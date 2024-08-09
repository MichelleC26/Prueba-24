alert ()

// for (let i = 5 ; i < 10; i++) {
//     console.log(i);
    
// }

// const frutas = ["Manzana", "Uva", "Pera", "Naranja"];
// for (let i = 0 ; i < frutas.length; i++){
//     console.log(i);
    
// }
// for (let i = 0; i <= 10; i+=2) {
//     console.log(i);
//     ;
    
// }
const equipo = ["Marily","Angie","Arianna","Michelle"];
let lista = "";

for (let i = 0; i < equipo.length; i++) {
    lista += `<li>${equipo[i]}</li`;
    
}
document.getElementById("integrantes").innerHTML = `<lu>${lista}</lu` ;
document.getElementById("lider").innerText = equipo[3];