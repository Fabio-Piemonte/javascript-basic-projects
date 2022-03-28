/*const btn = document.querySelector('.tecla_pom');

btn.addEventListener('click', function(){
    document.querySelector('#som_tecla_pom').play();
})*/

function tocaSom(){
    document.querySelector('#som_tecla_pom').play();
}

document.querySelector('.tecla_pom').onclick = tocaSom;