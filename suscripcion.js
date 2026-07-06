function validarNombre() {
    var valor = document.getElementById("nombre").value;
    var partes = valor.trim().split(" ");
    var letras = valor.trim().replace(/ /g, "");
    if (letras.length <= 6 || partes.length < 2 || partes[1] === "") {
        document.getElementById("error-nombre").textContent = "Debe tener más de 6 letras y al menos un espacio.";
        return false;
    }
    return true;
}

function validarEmail() {
    var valor = document.getElementById("email").value;
    if (!valor.includes("@") || !valor.includes(".")) {
        document.getElementById("error-email").textContent = "Debe tener un formato de email válido.";
        return false;
    }
    return true;
}

function validarPassword() {
    var valor = document.getElementById("password").value;
    if (valor.length < 8) {
        document.getElementById("error-password").textContent = "Al menos 8 caracteres con letras y números.";
        return false;
    }
    var tieneLetra = false;
    var tieneNumero = false;
    for (var i = 0; i < valor.length; i++) {
        if (isNaN(valor[i])) tieneLetra = true;
        else tieneNumero = true;
    }
    if (!tieneLetra || !tieneNumero) {
        document.getElementById("error-password").textContent = "Al menos 8 caracteres con letras y números.";
        return false;
    }
    return true;
}

function validarRepetirPassword() {
    var valor = document.getElementById("repetir-password").value;
    var pass = document.getElementById("password").value;
    if (valor !== pass) {
        document.getElementById("error-repetir-password").textContent = "Las contraseñas no coinciden.";
        return false;
    }
    return true;
}

function validarEdad() {
    var valor = document.getElementById("edad").value;
    if (valor === "" || Number(valor) < 18 || valor.includes(".")) {
        document.getElementById("error-edad").textContent = "Debe ser un número entero mayor o igual a 18.";
        return false;
    }
    return true;
}

function validarTelefono() {
    var valor = document.getElementById("telefono").value;
    if (valor.length < 7) {
        document.getElementById("error-telefono").textContent = "Al menos 7 dígitos, sin espacios, guiones ni paréntesis.";
        return false;
    }
    for (var i = 0; i < valor.length; i++) {
        if (isNaN(valor[i])) {
            document.getElementById("error-telefono").textContent = "Al menos 7 dígitos, sin espacios, guiones ni paréntesis.";
            return false;
        }
    }
    return true;
}

function validarDireccion() {
    var valor = document.getElementById("direccion").value.trim();
    var partes = valor.split(" ");
    if (valor.length < 5 || partes.length < 2 || partes[1] === "") {
        document.getElementById("error-direccion").textContent = "Al menos 5 caracteres con letras, números y un espacio.";
        return false;
    }
    return true;
}

function validarCiudad() {
    var valor = document.getElementById("ciudad").value.trim();
    if (valor.length < 3) {
        document.getElementById("error-ciudad").textContent = "Al menos 3 caracteres.";
        return false;
    }
    return true;
}

function validarCodigoPostal() {
    var valor = document.getElementById("codigo-postal").value.trim();
    if (valor.length < 3) {
        document.getElementById("error-codigo-postal").textContent = "Al menos 3 caracteres.";
        return false;
    }
    return true;
}

function validarDni() {
    var valor = document.getElementById("dni").value;
    if (valor.length < 7 || valor.length > 8) {
        document.getElementById("error-dni").textContent = "Debe ser un número de 7 u 8 dígitos.";
        return false;
    }
    for (var i = 0; i < valor.length; i++) {
        if (isNaN(valor[i])) {
            document.getElementById("error-dni").textContent = "Debe ser un número de 7 u 8 dígitos.";
            return false;
        }
    }
    return true;
}

function limpiarError(idError) {
    document.getElementById(idError).textContent = "";
}

// Eventos blur
document.getElementById("nombre").addEventListener("blur", validarNombre);
document.getElementById("email").addEventListener("blur", validarEmail);
document.getElementById("password").addEventListener("blur", validarPassword);
document.getElementById("repetir-password").addEventListener("blur", validarRepetirPassword);
document.getElementById("edad").addEventListener("blur", validarEdad);
document.getElementById("telefono").addEventListener("blur", validarTelefono);
document.getElementById("direccion").addEventListener("blur", validarDireccion);
document.getElementById("ciudad").addEventListener("blur", validarCiudad);
document.getElementById("codigo-postal").addEventListener("blur", validarCodigoPostal);
document.getElementById("dni").addEventListener("blur", validarDni);

// Eventos focus
document.getElementById("nombre").addEventListener("focus", function() { limpiarError("error-nombre"); });
document.getElementById("email").addEventListener("focus", function() { limpiarError("error-email"); });
document.getElementById("password").addEventListener("focus", function() { limpiarError("error-password"); });
document.getElementById("repetir-password").addEventListener("focus", function() { limpiarError("error-repetir-password"); });
document.getElementById("edad").addEventListener("focus", function() { limpiarError("error-edad"); });
document.getElementById("telefono").addEventListener("focus", function() { limpiarError("error-telefono"); });
document.getElementById("direccion").addEventListener("focus", function() { limpiarError("error-direccion"); });
document.getElementById("ciudad").addEventListener("focus", function() { limpiarError("error-ciudad"); });
document.getElementById("codigo-postal").addEventListener("focus", function() { limpiarError("error-codigo-postal"); });
document.getElementById("dni").addEventListener("focus", function() { limpiarError("error-dni"); });

// Bonus: título en tiempo real
document.getElementById("nombre").addEventListener("keyup", function() {
    var nombre = document.getElementById("nombre").value.trim();
    if (nombre !== "") {
        document.getElementById("form-title").textContent = "HOLA " + nombre.toUpperCase();
    } else {
        document.getElementById("form-title").textContent = "HOLA";
    }
});

document.getElementById("nombre").addEventListener("focus", function() {
    var nombre = document.getElementById("nombre").value.trim();
    if (nombre !== "") {
        document.getElementById("form-title").textContent = "HOLA " + nombre.toUpperCase();
    }
});

// Submit
document.getElementById("subscription-form").addEventListener("submit", function(e) {
    e.preventDefault();

    var paso = true;
    if (!validarNombre()) paso = false;
    if (!validarEmail()) paso = false;
    if (!validarPassword()) paso = false;
    if (!validarRepetirPassword()) paso = false;
    if (!validarEdad()) paso = false;
    if (!validarTelefono()) paso = false;
    if (!validarDireccion()) paso = false;
    if (!validarCiudad()) paso = false;
    if (!validarCodigoPostal()) paso = false;
    if (!validarDni()) paso = false;

    if (!paso) {
        alert("Por favor corregí los errores del formulario antes de enviar.");
        return;
    }

    var mensaje = "Datos del formulario:\n\n";
    mensaje += "Nombre: " + document.getElementById("nombre").value + "\n";
    mensaje += "Email: " + document.getElementById("email").value + "\n";
    mensaje += "Contraseña: " + document.getElementById("password").value + "\n";
    mensaje += "Edad: " + document.getElementById("edad").value + "\n";
    mensaje += "Teléfono: " + document.getElementById("telefono").value + "\n";
    mensaje += "Dirección: " + document.getElementById("direccion").value + "\n";
    mensaje += "Ciudad: " + document.getElementById("ciudad").value + "\n";
    mensaje += "Código Postal: " + document.getElementById("codigo-postal").value + "\n";
    mensaje += "DNI: " + document.getElementById("dni").value;

    alert(mensaje);
});
