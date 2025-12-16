document.addEventListener('DOMContentLoaded', function() {
    // CRÍTICO: Obtiene el enlace directo del atributo 'href' del botón.
    var linkElement = document.getElementById('telegram-link');
    var telegramLink = linkElement.getAttribute('href');

    // Inicializa la generación del Código QR
    if (telegramLink) {
        new QRCode(document.getElementById("qrcode"), {
            text: telegramLink,
            width: 180, /* Ligeramente más pequeño para el nuevo diseño */
            height: 180,
            colorDark : "#000000",
            colorLight : "#FFFFFF", /* Fondo blanco para el QR */
            correctLevel : QRCode.CorrectLevel.H
        });
    }
});
