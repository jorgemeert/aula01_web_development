const btnEnviar = document.getElementById("btnCalcular");


btnEnviar.addEventListener("click", () => {
    let pesoCorporal = document.getElementById("txtPeso").value;
    let altura = document.getElementById("txtAltura").value;
    let conta = pesoCorporal / (altura * altura);
    let status = '';
    let classifica;

    if (conta > 40) {
        status = 'Obeso III';
        classifica = '<p class="nivel3">Obeso Nivel III</p';
    } else if (conta > 35) {
        status = 'Obeso II';
    } else if (conta > 30) {
        status = 'Obeso I';
    } else if (conta > 25) {
        status = 'SobrePeso'
    } else if (conta < 18, 5) {
        status = 'Normal'
    } else {
        status = 'Baixo peso'
    }

    document.getElementById("resultado").innerHTML = 'Seu peso está ' + status + ', seu IMC é ' + conta.toFixed(2);
})
