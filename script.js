document.addEventListener("DOMContentLoaded", function() {
    // Obtenemos una referencia a los elementos del menú de navegación
    var homeLink = document.querySelector("nav ul li:nth-child(1) a");
    var aboutUsLink = document.querySelector("nav ul li:nth-child(2) a");
    var servicesLink = document.querySelector("nav ul li:nth-child(3) a");
    var contactLink = document.querySelector("nav ul li:nth-child(4) a");

    // Funciones que se ejecutarán al hacer clic en los botones
    function goToHome() {
        // Aquí puedes agregar el código para redirigir a la página de inicio
        alert("Anar a la pàgina d'inici");
    }

    function goToAboutUs() {
        // Aquí puedes agregar el código para redirigir a la página "Sobre Nosaltres"
        alert("Anar a la pàgina 'Sobre Nosaltres'");
    }

    function goToServices() {
        // Aquí puedes agregar el código para redirigir a la página de servicios
        alert("Anar a la pàgina de serveis");
    }

    function goToContact() {
        // Aquí puedes agregar el código para redirigir a la página de contacto
        alert("Anar a la pàgina de contacte");
    }

    // Agregar manejadores de eventos a los botones
    homeLink.addEventListener("click", goToHome);
    aboutUsLink.addEventListener("click", goToAboutUs);
    servicesLink.addEventListener("click", goToServices);
    contactLink.addEventListener("click", goToContact);
});