const eventoFecha = new Date("December 15, 2025 00:00:00").getTime();

function actualizarContador() {
    const ahora = new Date().getTime();
    const diferencia = eventoFecha - ahora;

    if (diferencia <= 0) {
        document.getElementById("contador").innerHTML = "¡Es hoy!";
        return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("dias").innerText = dias;
    document.getElementById("horas").innerText = horas;
    document.getElementById("minutos").innerText = minutos;
    document.getElementById("segundos").innerText = segundos;
}

setInterval(actualizarContador, 1000);
