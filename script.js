document.addEventListener("DOMContentLoaded", function() {
    // Obtenim una referència als elements del menu de navegació
    var homeLink = document.querySelector("nav ul li:nth-child(1) a");
    var aboutUsLink = document.querySelector("nav ul li:nth-child(2) a");
    var servicesLink = document.querySelector("nav ul li:nth-child(3) a");
    var contactLink = document.querySelector("nav ul li:nth-child(4) a");

    // Funcions que se ejecutarán al hacer clic en los botones
    function goToHome() {
        // Aqui pots agregar el codi per a dirigir a la pàgina d'inici
        alert("Anar a la pàgina d'inici");
    }

    function goToAboutUs() {
        // Aqui pots agregar el codi per a dirigir a la pàgina "Sobre Nosaltres"
        alert("Anar a la pàgina 'Sobre Nosaltres'");
    }

    function goToServices() {
        // Aqui pots agregar el codi per a dirigir a la pàgina de serveis
        alert("Anar a la pàgina de serveis");
    }

    function goToContact() {
        // Aqui pots agregar el codi per a dirigir a la pàgina de contacte
        alert("Anar a la pàgina de contacte");
    }

    // Agregar manejadors d'events als botons
    homeLink.addEventListener("click", goToHome);
    aboutUsLink.addEventListener("click", goToAboutUs);
    servicesLink.addEventListener("click", goToServices);
    contactLink.addEventListener("click", goToContact);
});