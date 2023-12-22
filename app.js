
function calcular() {
    let num1 = parseInt(document.getElementById('numA').value);
    let num2 = parseInt(document.getElementById('numB').value);
    
    if (num1 > num2) {
        alert('O segundo número: ' + num2 + ' não e maior que o número ' + num1);
    }
    else if (num2 > num1) {
        alert('O segundo número: ' + num2 + ' é maior que o número: ' + num1);
    }
    else if (num1 === num2) {
        alert('Os números digitados são iguais');
    }
    else {
        alert('Por favor, digite números validos');
    }
}