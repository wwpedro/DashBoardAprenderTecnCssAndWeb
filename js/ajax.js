let content = document.getElementById('ajax-content')

function fetchContent(elemento){
    let view = elemento.getAttribute('a-view');
    let folder = elemento.getAttribute('a-folder');
    fetch(`/ajax/${folder}/${view}.html`)
    
    // acento de crase serve pra concatenar string e atributo ei fica mais facil
    //passar o caminho que no caso sai do diretorio raiz /(barra)
    //entra em ajax/ e de acordo com oq eu clicar muda o atributo
    //pega o folder ai carrega a view.html
    //agr chama por padrão a função que é disparada automaticamente => .then
    .then(response =>{
        /*
        then obrigatoriamente chama o response com uma call back
        que chama o proximo then que vai converter o texto desse then pra html
        */
        let html = response.text()
        return html
    })
    .then(html => {
        content.innerHTML=html
    })
}