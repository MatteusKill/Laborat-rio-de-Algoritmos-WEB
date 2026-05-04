function mostrarExercicio(numero) {
    const header = document.querySelector('header');
    header.style.display = 'none';
    const todasSecoes = document.querySelectorAll('.conteudo-exercicio');
    todasSecoes.forEach(secao => secao.style.display = 'none');

    switch(numero) {
        case 11: document.getElementById('ex11').style.display = 'flex'; break;
        case 12: document.getElementById('ex12').style.display = 'flex'; break;
        case 13: document.getElementById('ex13').style.display = 'flex'; break;
        case 14: document.getElementById('ex14').style.display = 'flex'; break;
        case 15: document.getElementById('ex15').style.display = 'flex'; break;
        case 16: document.getElementById('ex16').style.display = 'flex'; break;
        case 17: document.getElementById('ex17').style.display = 'flex'; break;
        case 18: document.getElementById('ex18').style.display = 'flex'; break;
        case 19: document.getElementById('ex19').style.display = 'flex'; break;
        case 20: document.getElementById('ex20').style.display = 'flex'; break;
    }
}

function voltarMenu() {
    const todasSecoes = document.querySelectorAll('.conteudo-exercicio');
    todasSecoes.forEach(secao => secao.style.display = 'none');
    const header = document.querySelector('header');
    header.style.display = 'flex';
}

function executarExercicio11() {
    const nome = document.getElementById('nome11').value;
    const idade = Number(document.getElementById('idade11').value);
    const res = document.querySelector('#ex11 #res11');
    
    let tipo = "";
    if (idade >= 0 && idade <= 2) {
        tipo = "bebê";
    }
    else if (idade <= 11) {
        tipo = "Criança";
    }
    else if (idade <= 21) {
        tipo = "Jovem";
    }
    else if (idade <= 64) {
        tipo = "Adulto";
    }
    else if (idade <= 100) {
        tipo = "Idoso";
    }
    else {
        tipo = "Muito velhinho";
    }

    res.innerHTML = `
        <p>${nome} está com ${idade} e pela tabela é considerado um ${tipo}.</p>
    `;
}

function executarExercicio12() {
    const num = Number(document.getElementById('numeroDigitado12').value);
    const res = document.querySelector('#ex12 #res12');
    
    let situacao = (num >= 0) ? "Positivo" : "Negativo";
    
    res.innerHTML = `
        <p>O número digitado é <strong>${situacao}</strong>.</p>
    `;
}

function executarExercicio13() {
    const num = Number(document.getElementById('numeroDigitado13').value);
    const res = document.querySelector('#ex13 #res13');
    
    let tipo = (num % 2 === 0) ? "Par" : "Ímpar";
    
    res.innerHTML = `
        <p>O número ${num} é <strong>${tipo}</strong>.</p>
    `;
}

function executarExercicio14() {
    const conta = document.getElementById('numeroConta14').value;
    const saldo = Number(document.getElementById('saldoConta14').value);
    const debito = Number(document.getElementById('valorDebito14').value);
    const credito = Number(document.getElementById('valorCredito14').value);
    const res = document.querySelector('#ex14 #res14');

    const saldoAtual = saldo - debito + credito;
    const status = (saldoAtual >= 0) ? "Saldo Positivo" : "Saldo Negativo";

    res.innerHTML = `
        <p>Conta: ${conta}</p>
        <p>Saldo Atual: R$ ${saldoAtual.toFixed(2)}</p>
        <p>Status: <strong>${status}</strong></p>
    `;
}

function executarExercicio15() {
    const letra = document.getElementById('letraDigitada15').value.toUpperCase();
    const res = document.querySelector('#ex15 #res15');
    
    let sexo = "Sexo Inválido";
    if (letra === 'F') sexo = "F - Feminino";
    else if (letra === 'M') sexo = "M - Masculino";

    res.innerHTML = `
        <p>Classificação: <strong>${sexo}</strong></p>
    `;
}

function executarExercicio16() {
    const n1 = Number(document.getElementById('primeiroNumero16').value);
    const n2 = Number(document.getElementById('segundoNumero16').value);
    const n3 = Number(document.getElementById('terceiroNumero16').value);
    const res = document.querySelector('#ex16 #res16');

    const maior = Math.max(n1, n2, n3);
    const menor = Math.min(n1, n2, n3);

    res.innerHTML = `
        <p>Maior número: <strong>${maior}</strong></p>
        <p>Menor número: <strong>${menor}</strong></p>
    `;
}

function executarExercicio17() {
    const salario = Number(document.getElementById('salario17').value);
    const res = document.querySelector('#ex17 #res17');
    
    let percentual = 0;
    if (salario <= 280) percentual = 20;
    else if (salario <= 700) percentual = 15;
    else if (salario <= 1500) percentual = 10;
    else percentual = 5;

    const aumento = salario * (percentual / 100);
    const novoSalario = salario + aumento;

    res.innerHTML = `
        <p>Salário original: R$ ${salario.toFixed(2)}</p>
        <p>Percentual aplicado: ${percentual}%</p>
        <p>Valor do aumento: R$ ${aumento.toFixed(2)}</p>
        <p>Novo salário: <strong>R$ ${novoSalario.toFixed(2)}</strong></p>
    `;
}

function executarExercicio18() {
    const valorHora = Number(document.getElementById('valorHora18').value);
    const qtdHoras = Number(document.getElementById('qntdHora18').value);
    const res = document.querySelector('#ex18 #res18');

    const salarioBruto = valorHora * qtdHoras;
    let percentualIR = 0;

    if (salarioBruto <= 900) percentualIR = 0;
    else if (salarioBruto <= 1500) percentualIR = 5;
    else if (salarioBruto <= 2500) percentualIR = 10;
    else percentualIR = 20;

    const ir = salarioBruto * (percentualIR / 100);
    const inss = salarioBruto * 0.10; 
    const sindicato = salarioBruto * 0.03; 
    const fgts = salarioBruto * 0.11
    const totalDescontos = ir + inss + sindicato;
    const salarioLiquido = salarioBruto - totalDescontos;

    res.innerHTML = `
    <pre class "resultado-terminal">
Salário Bruto: (${valorHora} * ${qtdHoras}) : R$ ${salarioBruto.toFixed(2)}
(-) IR (${percentualIR}%)            : R$ ${ir.toFixed(2)}
(-) INSS (10%)           : R$ ${inss.toFixed(2)}
(-) Sindicato (3%)       : R$ ${sindicato.toFixed(2)}
FGTS (11%)               : R$ ${fgts.toFixed(2)}
Total de descontos       : R$ ${totalDescontos.toFixed(2)}
Salário Liquido          : R$ ${salarioLiquido.toFixed(2)}
        </pre>
    `;
}

function executarExercicio19() {
    const l1 = Number(document.getElementById('primeiroLado19').value);
    const l2 = Number(document.getElementById('segundoLado19').value);
    const l3 = Number(document.getElementById('terceiroLado19').value);
    const res = document.querySelector('#ex19 #res19');

    let mensagem = "";
    
    if (l1 + l2 > l3 && l1 + l3 > l2 && l2 + l3 > l1) {
        if (l1 === l2 && l2 === l3) mensagem = "Triângulo Equilátero";
        else if (l1 === l2 || l1 === l3 || l2 === l3) mensagem = "Triângulo Isósceles";
        else mensagem = "Triângulo Escaleno";
    } else {
        mensagem = "Valores não formam um triângulo válido.";
    }

    res.innerHTML = `
        <p>Resultado: <strong>${mensagem}</strong></p>
        <p><small><strong>Algoritmo:</strong> Testa a condição de existência e, se válida, usa operadores lógicos (AND / OR) para classificar o triângulo.</small></p>
    `;
}

function executarExercicio20() {
    const ano = Number(document.getElementById('numeroDigitado20').value);
    const res = document.querySelector('#ex20 #res20');

    let isBissexto = false;
    
    // Regra do ano bissexto
    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        isBissexto = true;
    }

    res.innerHTML = `
        <p>O ano ${ano} <strong>${isBissexto ? "é bissexto" : "não é bissexto"}</strong>.</p>
        <p><small><strong>Algoritmo:</strong> Verifica se o ano é divisível por 4 e não por 100, a menos que também seja divisível por 400.</small></p>
    `;
}