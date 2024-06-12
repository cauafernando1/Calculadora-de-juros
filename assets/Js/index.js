document.getElementById('calcu-com').addEventListener('click', ()=> {
    const valorc = document.getElementById('Valor-com').value;
    const taxac = (document.getElementById('taxa-com').value) /100;
    const tempoc = document.getElementById('tempo-com').value;
    const totalc = valorc * (1 + taxac)**tempoc;
    document.getElementById('total-com').innerHTML = ("R$" + totalc.toFixed(2).replace('.', ','));
});
