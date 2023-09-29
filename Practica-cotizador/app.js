function changeProductImage() {
    // Obtener el valor seleccionado en el select
    var select = document.getElementById("color");
    var selectedOption = select.value;

    // Ocultar todos los divs
    var divs = document.querySelectorAll("div[id$='Div']");
    divs.forEach(function (div) {
        div.classList.add("hidden");
    });

    // Mostrar el div correspondiente a la opción seleccionada
    if (selectedOption !== "0") {
        var divToShow = document.getElementById(selectedOption + "Div");
        divToShow.classList.remove("hidden");
    }
}

// Calcular precio segun color y capacidad

   function calculatePrice(){
    // Obtener valores ingresados por el usuario
    var color = document.getElementById("color").value;
    var capacidad = parseInt(document.getElementById("capacidad").value);
    var cantidad = parseInt(document.getElementById("cantidad").value);

    // Precios por capacidad
    var precios = {
        128: 150000,
        256: 165000,
        512: 180000
    };

    // Calcular el precio total
    var precioTotal = precios[capacidad] * cantidad;

    // Mostrar el resultado
    var resultado = document.getElementById("result");
    resultado.textContent = "Cotización: $ " + precioTotal.toLocaleString();
};


 




