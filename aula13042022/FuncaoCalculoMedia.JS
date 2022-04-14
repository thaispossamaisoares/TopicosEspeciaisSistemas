var nome, media, a, b, c ;

function nome(){
    let para = document.createElement('p');
    para.textContent = prompt("Informe seu nome:");
    document.body.appendChild(para);
}
function nota(){
    let a = document.createElement('a');
    let b = document.createElement('b');
    a = parseInt(prompt("Informe a primeira nota:")); 
    b = parseInt(prompt("Informe a segunda nota:"));
    media = (a + b )/2 ; 
  
    if ( media >= 6 ) {
        window.alert("Aprovado " +media);
    } 
    else { 
        if ( media <= 5 ) 
        {
            window.alert("Reprovado " +media);
        }
        else 
        {
            window.alert("Recuperação "+media);
        }
    }
}

