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