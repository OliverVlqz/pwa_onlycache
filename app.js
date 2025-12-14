// calculadora
console.log("Calculadora PWA OnlyCache");

// Registro del Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(registration => {
                console.log('Service Worker registrado exitosamente:', registration.scope);
            })
            .catch(error => {
                console.log('Error al registrar el Service Worker:', error);
            });
    });
}

