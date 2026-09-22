const boton = document.getElementById("boton");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", () => {

    mensaje.classList.toggle("mostrar");

    if (mensaje.classList.contains("mostrar")) {

        boton.innerHTML = "💛 Gracias por abrirlo 💛";

        lanzarParticulas();

    } else {

        boton.innerHTML = "🌻 Abrir mi detalle 🌻";

    }

});


// CREAR PARTÍCULAS

function lanzarParticulas() {

    for (let i = 0; i < 35; i++) {

        setTimeout(() => {

            const particula = document.createElement("div");

            particula.classList.add("particula");

            const simbolos = ["✦", "✧", "💛", "🌻", "•"];

            particula.innerHTML =
                simbolos[Math.floor(Math.random() * simbolos.length)];

            particula.style.left =
                Math.random() * 100 + "vw";

            particula.style.top =
                (70 + Math.random() * 30) + "vh";

            particula.style.fontSize =
                (10 + Math.random() * 18) + "px";

            particula.style.animationDuration =
                (3 + Math.random() * 4) + "s";

            document.body.appendChild(particula);

            setTimeout(() => {
                particula.remove();
            }, 7000);

        }, i * 100);

    }
}


// PARTÍCULAS AUTOMÁTICAS

setInterval(() => {

    const particula = document.createElement("div");

    particula.classList.add("particula");

    particula.innerHTML = "✦";

    particula.style.left =
        Math.random() * 100 + "vw";

    particula.style.top = "100vh";

    particula.style.fontSize =
        (8 + Math.random() * 15) + "px";

    particula.style.animationDuration =
        (4 + Math.random() * 4) + "s";

    document.body.appendChild(particula);

    setTimeout(() => {
        particula.remove();
    }, 8000);

}, 600);