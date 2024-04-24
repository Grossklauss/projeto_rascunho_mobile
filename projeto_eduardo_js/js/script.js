// Obtém o elemento do formulário pelo ID
var meuFormulario = document.getElementById("formulario");

// Adiciona um event listener para o evento 'submit' do formulário
meuFormulario.addEventListener("submit", function(event) {
  event.preventDefault(); // Previne o comportamento padrão de recarregar a página ao enviar o formulário

  // Chama a função calcularCompra() quando o formulário é enviado
  calcularCompra();
});

// Função para calcular a compra
function calcularCompra() {
  // Captura o nome do cliente do campo de entrada correspondente
  let nomeCliente = document.getElementById("nome_cliente").value;

  // Captura as quantidades de resistores, diodos e transistores dos campos de entrada correspondentes
  let quantidadeResistores = parseInt(document.getElementById("quantidade_resistores").value);
  let quantidadeDiodos = parseInt(document.getElementById("quantidade_diodos").value);
  let quantidadeTransistores = parseInt(document.getElementById("quantidade_transistores").value);

  // Define os preços unitários de resistores, diodos e transistores
  let precoResistor = 0.70;
  let precoDiodo = 0.80;
  let precoTransistor = 0.95;

  // Calcula o subtotal de cada tipo de item
  let subtotalResistores = quantidadeResistores * precoResistor;
  let subtotalDiodos = quantidadeDiodos * precoDiodo;
  let subtotalTransistores = quantidadeTransistores * precoTransistor;

  // Calcula os descontos aplicando as taxas de desconto sobre os subtotais de cada tipo de item
  let descontoResistores = subtotalResistores * 0.05;
  let descontoDiodos = subtotalDiodos * 0.06;
  let descontoTransistores = subtotalTransistores * 0.09;

  // Calcula o total de desconto somando os descontos individuais
  let totalDesconto = descontoResistores + descontoDiodos + descontoTransistores;

  // Calcula o valor total da compra somando os subtotais de cada tipo de item
  let valorTotal = subtotalResistores + subtotalDiodos + subtotalTransistores;

  // Calcula o valor líquido a pagar subtraindo o total de desconto do valor total da compra
  let valorLiquido = valorTotal - totalDesconto;

  // Exibe o total de desconto e o valor líquido a pagar nos campos de entrada correspondentes do formulário
  document.getElementById("total_desconto").value = totalDesconto.toFixed(2); // Arredonda o total de desconto para duas casas decimais
  document.getElementById("valor_liquido").value = valorLiquido.toFixed(2); // Arredonda o valor líquido para duas casas decimais
}
