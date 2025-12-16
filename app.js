document.addEventListener('DOMContentLoaded', function() {
    // CRÍTICO: Obtiene el enlace directo del atributo 'href' del botón.
    var linkElement = document.getElementById('telegram-link');
    var telegramLink = linkElement.getAttribute('href');

    // Inicializa la generación del Código QR
    if (telegramLink) {
        new QRCode(document.getElementById("qrcode"), {
            text: telegramLink,
            width: 200,
            height: 200,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        });
    }
});