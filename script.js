document.addEventListener('DOMContentLoaded', function() {
    createAccountList()
    document.querySelector('.accounts .add-account').addEventListener('click', function() {
        createAccountList()
        // pegar perfil selecionado
        // adicionar na lista de perfis que devem rodar
        console.log('pagina da Dizu')
    })

    document.querySelector('.start-button').addEventListener('click', function() {
        playPause()
    })

    

    

    function getProfiles() {

    }


    function createAccountList() {
        // openListAccount()
        let siteAccounts = listSiteAccounts()

        for (let account in siteAccounts) {
            showList(account)
        } 
    }

    function showList(account) {
        let option = document.createElement('option')
        option.setAttribute('value', account)
        option.setAttribute('class', 'section-item')
        option.innerHTML = account

        let select = document.createElement('select.select')
        select.append(option)
    }

    // function openListAccount() {
    //     document.querySelector('.add section').classList.remove('close')
    //     document.querySelector('.add section').classList.add('open')
    // }

    // function closeListAccount() {
    //     document.querySelector('.add section').classList.remove('open')
    //     document.querySelector('.add section').classList.add('close')
    // }


    // Esssa função de buscar, precisa estar no escopo da pagina
    function listSiteAccounts() {
        let list = []
        document.querySelectorAll('select#instagram_id option[data-fake="1"]').forEach(function(item) {
            list.push(item.innerText)
        })

        return list
    }

    function playPause() {
        console.log('chegou');
        if (document.querySelectorAll('.start-button.pause').length) {
            console.log('inicia');
            getStarted()
        } else if (document.querySelectorAll('.start-button.run').length) {
            console.log('pausa');
            getPaused()
        }
    }

    function getStarted() {
        // run()
        document.querySelector('.start-button').classList.remove('pause')
        document.querySelector('.start-button').classList.add('run')
        document.querySelector('.start-button').innerText = 'Pausar'
    }
    
    function getPaused() {
        // pause()
        document.querySelector('.start-button').classList.remove('run')
        document.querySelector('.start-button').classList.add('pause')
        document.querySelector('.start-button').innerText = 'Iniciar'
    }
})


function Luiz() {
    let sel = document.querySelector("select#instagram_id");
    let options = [...sel.options];
    
    sel.addEventListener("change", function () {
      const findByValue = options.find((op) => op.value === this.value);
      const elementText = findByValue.innerText;
    
      console.log({ elementText });
    });
}



function run() {
    let config = {
        tempoDeExecucao: getIntervalTime(),
        quantidadeExecucoes: getAmountActions(),
        temAlerta: getAlertBox(),
        mostrarStatus: getShowStatus(),
        reiniciarPerfis: getRestartProfiles(),
        perfis: getProfiles()
    }

}

//#region Funções prontas

function getIntervalTime() {
    return document.querySelector('.form .interval').innerText
}

function getAmountActions() {
    return document.querySelector('.form .actions').innerText
}

function getAlertBox() {
    var checkbox = document.querySelector('#alert')
    if(checkbox.checked) {
        return true
    } else {
        return false
    }
}

function getShowStatus() {
    var checkbox = document.querySelector('#status')
    if(checkbox.checked) {
        return true
    } else {
        return false
    }
}

function getRestartProfiles() {
    var checkbox = document.querySelector('#reset')
    if(checkbox.checked) {
        return true
    } else {
        return false
    }
}

//#endregion


function teste() {
    let sel = document.querySelector("select#instagram_id");
    let options = [...sel.options];
    
    
    let findByValue = options.find((op) => op.value === this.value);
    let elementText = findByValue.innerText;
    
    console.log(elementText)
}




