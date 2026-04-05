document.getElementById("formulario").addEventListener("submit", function(e) {

    let nombre = document.getElementById("nombre").value;
    let telefono = document.getElementById("telefono").value;
    let correo = document.getElementById("correo").value;

    let regexNombre = /^[A-Za-z ]+$/;
    let regexTelefono = /^[0-9]{10}$/;

    if (!regexNombre.test(nombre)) {
        alert("Nombre inválido");
        e.preventDefault();
        return;
    }

    if (!regexTelefono.test(telefono)) {
        alert("Teléfono inválido");
        e.preventDefault();
        return;
    }

    if (!correo.includes("@") || !correo.includes(".")) {
        alert("Correo inválido");
        e.preventDefault();
        return;
    }

});
