function sumar(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    if(null(num1) || isNaN(num2)){
        alert("Por favor, ingresa un número válido en ambos campos.");
        return;
    }

    let suma = num1 + num2;

    let resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "La suma es: " + suma;
    resultadoElement.classList.add("mostrar");

    if(suma > 10){
        resultadoElement.className = "alert alert-success mostrar";
    }

    else{
        resultadoElement.className = "alert alert-danger mostrar";

    }

    
}

document.getElementById("CalcularBtnSuma").addEventListener("click", sumar);


function multiplicar(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    if(isNaN(num1) || isNaN(num2)){
        alert("Por favor, ingresa un número válido en ambos campos.");
        return;
    }

    let multiplicar = num1 * num2;

    let resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "La multiplicacion es: " + multiplicar;
    resultadoElement.classList.add("mostrar");

    if(multiplicar > 10){
        resultadoElement.className = "alert alert-success mostrar";
    }

    else{
        resultadoElement.className = "alert alert-danger mostrar";

    }

    
}

document.getElementById("CalcularBtnMulti").addEventListener("click", multiplicar);


function dividir(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    if(isNaN(num1) || isNaN(num2)){
        alert("Por favor, ingresa un número válido en ambos campos.");
        return;
    }

    let dividir = num1 / num2;

    let resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "La division es: " + dividir;
    resultadoElement.classList.add("mostrar");

    if(multiplicar > 10){
        resultadoElement.className = "alert alert-success mostrar";
    }

    else{
        resultadoElement.className = "alert alert-danger mostrar";

    }

    
}

document.getElementById("CalcularBtnDivi").addEventListener("click", dividir);