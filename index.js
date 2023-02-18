function inicio(){

    var btnCalcular = document.getElementById ("btnCalcular");
    btnCalcular.addEventListener("Calculando", botonBtnCalcular);
}

function botonBtnCalcular (){
    
    var txtPeso = document.getElementById ("txtPeso");
    var peso = txtPeso.value;
    alert (peso)

    var txtAltura = document.getElementById ("txtAltura");
    var altura = txtAltura.value;
    alert(altura)
    
    alert("Calculando");

    var imc = peso / (altura * altura);
    alert ("Su IMC es : " + Math.round(imc));


}