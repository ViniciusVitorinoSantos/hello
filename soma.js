
function displayHello() {
    var num1 = parseInt(document.getElementById("nameInput").value);
    var num2 = parseInt(document.getElementById("nameInput1").value);
    var sum = num1 + num2;
    //Exibe o resultado mostrando um alerta
    //show result as a alert
    alert("A soma dos números é: " + sum)
    //mostra o resltuda direto na pagina
    //display result directly on the page
    document.body.innerHTML += `A soma dos numeros ${num1} e ${num2} é ${sum}` ;
};
