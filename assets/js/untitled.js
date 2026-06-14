document.addEventListener("DOMContentLoaded", function() {
    // Esto se ejecuta apenas carga la página
    console.log("¡El archivo JS se cargó correctamente!");

    var boton = document.getElementById('btnCopiar');
    
    if (boton) {
        boton.addEventListener('click', function() {
            // 1. Buscamos el texto directamente
            var textoElemento = document.getElementById('textoParaCopiar');
            
            if (textoElemento) {
                var textoALeer = textoElemento.innerText || textoElemento.textContent;
                
                // 2. Intentamos copiar
                navigator.clipboard.writeText(textoALeer).then(function() {
                    alert("¡Texto copiado al portapapeles!: " + textoALeer);
                }).catch(function(err) {
                    alert("Error al copiar: " + err);
                });
            } else {
                alert("Error: No se encontró ningún elemento con el ID 'textoParaCopiar'");
            }
        });
    } else {
        console.log("Error: No se encontró ningún botón con el ID 'btnCopiar' en esta página.");
    }
});