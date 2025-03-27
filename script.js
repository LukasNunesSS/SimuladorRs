
function gerarResumo() {
  const nome = document.getElementById('nome').value;
  const cidade = document.getElementById('cidade').value;
  const modelo = document.getElementById('modelo').value;
  const largura = parseFloat(document.getElementById('largura').value);
  const comprimento = parseFloat(document.getElementById('comprimento').value);
  const area = (largura * comprimento) / 10000;
  let valor = 0;

  switch(modelo) {
    case 'resina': valor = area * 1100; break;
    case 'clasica': valor = area * 139800 / 7900; break;
    case 'cascata': valor = area * 1000; break;
    case 'demolicao': valor = area * 333.33; break;
    case 'redonda': valor = largura === 100 ? 480 : largura === 150 ? 720 : largura === 180 ? 960 : 1200; break;
  }

  const resumo = `
    <p><strong>Cliente:</strong> ${nome} (${cidade})</p>
    <p><strong>Modelo:</strong> ${modelo}</p>
    <p><strong>Medidas:</strong> ${largura}cm x ${comprimento}cm</p>
    <p><strong>Valor estimado:</strong> USD ${valor.toFixed(2)}</p>
  `;
  document.getElementById('detalhes').innerHTML = resumo;
  document.getElementById('resumo').style.display = 'block';
}
