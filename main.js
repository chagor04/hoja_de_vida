let into=document.querySelector('.inicio')
let logo= document.querySelector('.logo-headre')
let logo_span=document.querySelectorAll('.logo')

window.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(()=>{
        logo_span.forEach((span,idx)=>{
            setTimeout(()=>{
                span.classList.add('active')
            },(idx +1)+400)
        })
        setTimeout(()=>{
            
        })
    })
})




































let contador= 0

let fotos=[
    './temposizador.png',
    './calculadora_imc.png',
    './convertidor de temperatura.png',
    './pagina_boostrap.png',
    './login.png'
]
function carrusel(portafolio){
    portafolio.addEventListener('click',(e)=>{
        let atras = portafolio.querySelector('.atras')
        let adelante= portafolio.querySelector('.adelante')
        let img=portafolio.querySelector('img')
        let tgt= e.target;

        if(tgt==atras){
            if(contador>0){
                img.src= fotos[contador -1]
                contador--;
            }else{
                img.src=fotos[fotos.length -1]
                contador= fotos.length -1
            }
        }else if(tgt==adelante){
            if(contador < fotos.length - 1){
                img.src= fotos[contador + 1]
                contador++;
            }else{
                img.src=fotos[0]
                contador=0;
            }
        }


    })
}
document.addEventListener('DOMContentLoaded',()=>{
    let portafolio=document.querySelector('.portafolio')
    carrusel(portafolio)
})