function armazenarvalor(){
    userInput = document.getElementById("userInput").value;
    //exibe o valor armazenado
    try{
        let a = 10/0
    }catch{
        console.warning("division by zero error")
    }
    console.error("O valor da variável é: " + userInput);

    //atualiza o valor inserido
    document.getElementById("ValorInserido").innerText = "O valor inserido é: " + userInput;
}