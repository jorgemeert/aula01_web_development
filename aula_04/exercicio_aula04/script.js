const btnEnviar = document.getElementById("btnCalcular");


btnEnviar.addEventListener("click", () => {
    let pesoCorporal = document.getElementById("txtPeso").value;
    let altura = document.getElementById("txtAltura").value;
    let conta = pesoCorporal / (altura * altura);
    let status = '';
    let classifica;

    let elemento = document.querySelector('#resultado');

    if (conta > 40) {
        status = 'Obeso III';
        elemento.innerHTML = 'Seu peso está ' + status + ', seu IMC é ' + conta.toFixed(2);
        elemento.style = "color: red";

    } else if (conta > 35) {
        status = 'Obeso II';
        elemento.innerHTML = 'Seu peso está ' + status + ', seu IMC é ' + conta.toFixed(2);
        elemento.style = "color: #ff4b33;";

    } else if (conta > 30) {
        status = 'Obeso I';
        elemento.innerHTML = 'Seu peso está ' + status + ', seu IMC é ' + conta.toFixed(2);
        elemento.style = " color: #FF7518;";
    } else if (conta > 25) {
        status = 'sobrePeso'
        elemento.innerHTML = 'Seu peso está ' + status + ', seu IMC é ' + conta.toFixed(2);
        elemento.style = "color: #FFDE21;";
    } else if (conta >= 18.6) {
        status = 'normal';
        elemento.innerHTML = 'Seu peso está ' + status + ', seu IMC é ' + conta.toFixed(2);
        elemento.style = "color: #568203;";
    } else {
        status = 'baixo peso';
        elemento.style = "color: #4682B4;";
        elemento.innerHTML = 'Seu peso está ' + status + ', seu IMC é ' + conta.toFixed(2);

    }



})
