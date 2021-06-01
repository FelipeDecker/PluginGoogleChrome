if (window.location.href == 'https://dizu.com.br/painel/conectar') {
    console.log('pagina da Dizu')
}

// Funções do DIZU
function dizuViewLink () {
    document.querySelector('a#conectar_step_4').click()
}

function dizuConfirm () {
    document.querySelector('div#conectar_step_5 button').click()
}
