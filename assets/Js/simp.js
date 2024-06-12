document.getElementById('calcu-simp').addEventListener('click', ()=> {
    const valors = document.getElementById('Valor-simp').value;
    const taxas = (document.getElementById('taxa-simp').value) /100;
    const tempos = document.getElementById('tempo-simp').value;
    const totalj = valors * taxas * tempos;
    const totals = valors * 1 + totalj;
    document.getElementById('total-simp').innerHTML = ("R$" + totals.toFixed(2).replace('.', ','));
    console.log([valors, taxas, tempos, totals])
});