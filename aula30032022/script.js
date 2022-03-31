function criarParagrafo(){
    let para = document.createElement('p');
    para.textContent='é um conceito no desenvolvimento de software';//apenas uma mensagem
    document.body.appendChild(para);
}
function contaMais(){
    let para = document.createElement('p');//criei um contador 
    para.textContent='1,2,3,4,5,6,7,8,9,10'; 
    document.body.appendChild(para);
}

function SonarDireciona(){
    window.open("https://mundoeducacao.uol.com.br/fisica/sonar.htm","_blank"); // abre em uma outra pagina e usa URL
}

function JenkinsDireciona(){
    location.href = 'venda.html'; //abre na mesma pagina e usa um HTML 
}


