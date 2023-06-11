const precioTicket = 200;
let totalTickets = 0
let totalfinal = 0;

let descEstudiante = (precioTicket*80)/100;
let descTrainee = (precioTicket*50)/100;
let descJunior = (precioTicket*15)/100;


let nombre = document.getElementById("Nombre");
let apellido = document.getElementById("Apellido");
let email= document.getElementById("Email");
let cantidad = document.getElementById("Cantidad");
let categoria = document.getElementById("Categoria");

const totalApagar = () => { 
    
    if (Nombre.value == "") {
        nombre.classList.add("is-invalid");
        return;
    }

    if (Apellido.value == "" ) {
        apellido.classList.add("is-invalid");
        return;
    }

    if (Email.value == "") {
        email.classList.add("is-invalid");
        return;
    }
    const emailValido = Email => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email); 
    }

    if (!emailValido(Email.value)) {
        email.classList.add("is-invalid");
        return;
    }

    if (Cantidad.value <= 0) {
        Cantidad.classList.add("is-invalid");
        return;
    }

    if (Categoria.value == "0") {
        categoria.classList.add("is-invalid");
        return;
    }

    nombre.classList.remove('is-invalid');
    apellido.classList.remove('is-invalid');
    email.classList.remove('is-invalid');
    Cantidad.classList.remove('is-invalid');
    categoria.classList.remove('is-invalid');

    switch (Categoria.value) {
        case "0":
            totalfinal = 0;
            break;

        case "1":
            totalTickets = precioTicket - descEstudiante;
            totalfinal = (Cantidad.value) * totalTickets;
            break;

        case "2":
            totalTickets = precioTicket - descTrainee;
            totalfinal = (Cantidad.value) * totalTickets;
            break;
            
        case "3":
            totalTickets = precioTicket - descJunior;
            totalfinal = (Cantidad.value) * totalTickets;
            break;
       
    }
    
    Total.innerHTML = totalfinal;
}

btnResumen.addEventListener('click', totalApagar);

const resetTotalApagar = () => {

    quitarClaseError();
    Total.innerHTML = "";
}
btnBorrar.addEventListener('click', resetTotalApagar);
