const albumes = [
    { id: 1, name: "Born Pink", price: 24940 },
    { id: 2, name: "Kill This Love", price: 22990 },
    { id: 3, name: "The Album", price: 24990 },
    { id: 4, name: "How You Like That", price: 25990 },
    { id: 5, name: "Born Pink", price: 31990 }
];

let nombre = prompt("Ingrese el nombre del album que desee buscar");
let albumResultado = albumes.filter ((item) => item.name.toLowerCase() === nombre.toLowerCase());

if (albumResultado.length > 0) {
    albumResultado.map((item) => { 
    let mensaje = `
    Id: ${item.id}
    Nombre: ${item.name}
    $${item.price}
    `;
    alert (mensaje);
})
} else {
    alert ("Album no disponible");
}
