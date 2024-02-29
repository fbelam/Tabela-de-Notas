function verificar(){

    for (var i = 0; i < 4; i++){
    var n1 = document.getElementById('n1_aluno_' + i).value;
    var n2 = document.getElementById('n2_aluno_' + i).value;
    var n3 = document.getElementById('n3_aluno_' + i).value;
    var n4 = document.getElementById('n4_aluno_' + i).value;
    var calculo = document.getElementById("media_aluno_" + i);
    var resultado = document.getElementById("resultado_aluno_" + i);

    var calculo = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3) + parseFloat(n4) )/  4;
    
    document.getElementById("media_aluno_" + i).value = calculo;

   
    if(calculo >= 7)
    {
        document.getElementById("resultado_aluno_" + i).value = "Aprovado";
        resultado.style.backgroundColor = "green";
    }
    else if (calculo >= 5)
    {
        document.getElementById("resultado_aluno_" + i).value = "Recuperacao";
        resultado.style.backgroundColor = "yellow";
    }
    else
    {
        document.getElementById("resultado_aluno_" + i).value = "Reprovado";
        resultado.style.backgroundColor = "red";
    }
    }

}
