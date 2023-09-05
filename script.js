document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("cambio-form");
    const resultadoDiv = document.getElementById("resultado");
    const cambioSpan = document.getElementById("cambio");
    const resetBtn = document.getElementById("reset-btn");
    const themeSelector = document.getElementById("theme-selector"); // Agregamos el selector de tema

    // Al seleccionar un tema, cambia la hoja de estilo
    themeSelector.addEventListener("change", function () {
        const selectedTheme = themeSelector.value;
        document.getElementById("theme").setAttribute("href", selectedTheme);
    });

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const cambio = calcularCambio();

        if (typeof cambio === "string") {
            cambioSpan.textContent = cambio;
            resultadoDiv.style.display = "block";
        } else {
            cambioSpan.textContent = cambio.toFixed(2) + " €";
            resultadoDiv.style.display = "block";
        }
    });

    resetBtn.addEventListener("click", function (e) {
        e.preventDefault();

        // Limpiar los campos y ocultar el resultado
        document.getElementById("precio_producto").value = "";
        document.getElementById("cantidad_pagada").value = "";
        resultadoDiv.style.display = "none";
    });

    function calcularCambio() {
        const precioProducto = parseFloat(document.getElementById("precio_producto").value);
        const cantidadPagada = parseFloat(document.getElementById("cantidad_pagada").value);

        if (isNaN(precioProducto) || isNaN(cantidadPagada) || precioProducto < 0 || cantidadPagada < 0) {
            return "Por favor, ingresa valores válidos.";
        }

        const cambio = cantidadPagada - precioProducto;

        if (cambio < 0) {
            return "La cantidad pagada es insuficiente.";
        }

        return cambio;
    }
});
