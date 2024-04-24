// Obtém o elemento do formulário pelo ID
var meuFormulario = document.getElementById("formulario");

// Adiciona um event listener para o evento 'submit' do formulário
meuFormulario.addEventListener("submit", function(event) {
  event.preventDefault(); // Previne o comportamento padrão de recarregar a página ao enviar o formulário

  // Chama a função calcularSubtracao() quando o formulário é enviado
  calcularSubtracao();
});

// Função para calcular a subtração
function calcularSubtracao() {
  // Captura os números dos campos de entrada correspondentes
  let numero1 = parseInt(document.getElementById("numero1").value);
  let numero2 = parseInt(document.getElementById("numero2").value);

  // Calcula a subtração dos números
  let resultado = numero1 - numero2;

  // Exibe o resultado da subtração no campo de entrada correspondente do formulário
  document.getElementById("resultado").value = resultado;
}
