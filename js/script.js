/* REGISTRO */

const formularioRegistro = document.querySelector("#formularioRegistro");

/* Controlamos que el registro sea verificable, se almacene localmente y que se cree la cuenta de forma correcta */
if(formularioRegistro) {
    formularioRegistro.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const nombre = document.querySelector("#nombre").value.trim();
        const usuario = document.querySelector("#usuario").value.trim();
        const email = document.querySelector("#email").value.trim();
        const password = document.querySelector("#password").value;
        const password2 = document.querySelector("#password2").value;

        if(nombre === "" || usuario === "" || email === "" || password === "" || password2 === "") {
            alert("Debes completar todos los campos.");
            return;
        }

        if(password !== password2) {
            alert("Las contraseñas no coinciden.");
            return;
        }

        const usuarioGuardado = {
            nombre: nombre,
            usuario: usuario,
            email: email,
            password: password
        };

        localStorage.setItem("usuario", JSON.stringify(usuarioGuardado));

        alert("Cuenta creada correctamente.");
        window.location.href = "login.html";
    });
}


/* LOGIN */

const formularioLogin = document.querySelector("#formularioLogin");

if (formularioLogin) {
    formularioLogin.addEventListener("submit", function (evento) {
        evento.preventDefault();
        const usuario = document.querySelector("#usuario").value.trim();
        const password = document.querySelector("#password").value;
        const datosGuardados = localStorage.getItem("usuario");

        if(!datosGuardados) {
            alert("No existe ninguna cuenta registrada.");
            return;
        }

        const usuarioGuardado = JSON.parse(datosGuardados);

        if(usuario !== usuarioGuardado.usuario) {
            alert("Esa cuenta no existe.");
            return;
        }

        if (password !== usuarioGuardado.password) {
            alert("La contraseña es incorrecta.");
            return;
        }

        localStorage.setItem("sesionActiva", usuarioGuardado.usuario);

        alert("Inicio de sesión correcto.");
        window.location.href = "index.html";
    });
}


/* DATOS ADICIONALES */

const botonesDato = document.querySelectorAll(".boton-dato");

botonesDato.forEach(function (boton) {
    boton.addEventListener("click", function () {
        const contenido = boton.nextElementSibling;

        contenido.classList.toggle("mostrar");

        if(contenido.classList.contains("mostrar")) {
            boton.textContent = boton.textContent.replace("▼", "▲");
        } else {
            boton.textContent = boton.textContent.replace("▲", "▼");
        }
    });
});


/* DATO CURIOSO */

const datoCurioso = document.querySelector("#datoCurioso");

if (datoCurioso) {
    const datos = [
        "El ADN contiene la información genética de los seres vivos.",
        "Las plantas realizan la fotosíntesis utilizando la energía de la luz.",
        "Los océanos cubren aproximadamente el 71% de la superficie terrestre.",
        "El cuerpo humano está formado por billones de células.",
        "La biodiversidad incluye la variedad de seres vivos y ecosistemas del planeta."
    ];

    const posicionAleatoria = Math.floor(Math.random() * datos.length);

    datoCurioso.textContent = datos[posicionAleatoria];
}


/* MODO OSCURO */

const botonTema = document.querySelector("#botonTema");
if(botonTema) {
    const temaGuardado = localStorage.getItem("tema");

    if(temaGuardado === "oscuro") {
        document.body.classList.add("modo-oscuro");
        botonTema.textContent = "Modo claro";
    }

    botonTema.addEventListener("click", function () {
        document.body.classList.toggle("modo-oscuro");

        if(document.body.classList.contains("modo-oscuro")) {
            localStorage.setItem("tema", "oscuro");
            botonTema.textContent = "Modo claro";
        } else {
            localStorage.setItem("tema", "claro");
            botonTema.textContent = "Modo oscuro";
        }
    });
}