var meuFormulario = document.getElementById("formulario");
meuFormulario.addEventListener("submit", function(event) {
  event.preventDefault();

  //Chama a função somar
  somar();

});


//Função somar
function somar() {
  
  //Captura o que está dentro do primeiro input no formulário
  //Number - Transforma o texto capturado em Numero
  let nome_cliente = document.getElementById("nome_cliente").value;
  
  //Captura o que está dentro do segundo input no formulário
  //Number - Transforma o texto capturado em Numero
  let resistores_cliente = Number = 0.70 (document.getElementById("resistore").value);
  //calcula o desconto 
  resistores_cliente = resistores_cliente * 0.95 ;

  //Captura o que está dentro do segundo input no formulário
  //Number - Transforma o texto capturado em Numero
  let diodo_cliente = Number = 0.80 (document.getElementById("diodo").value);  
  //calcula o desconto 
  diodo_cliente = diodo_cliente * 0.94 ;

//Captura o que está dentro do segundo input no formulário
  //Number - Transforma o texto capturado em Numero
  let transistores_cliente = Number = 0.95 (document.getElementById("transistores").value); 
  //calcula o desconto 
  transistores_cliente = transistores_cliente * 0.91 ;


  //Realiza a soma do valor que está na variável "primeiro_numero_inteiro" com o valor que está na
  //variável "segundo_numero_inteiro"
  //E a variável "resultado_soma" recebe o valor da soma
  let resultado_soma = resistores_cliente + diodo_cliente + transistores_cliente;

  //Aqui vai escrever no input "resultado_soma" o valor que está armazenado na variável "resultado_soma"
  document.getElementById("resultado_soma").value = resultado_soma;
  
  
}
