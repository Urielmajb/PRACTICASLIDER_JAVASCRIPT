let slider = document.querySelector('.slider-contenedor');
let sliderInd = document.querySelectorAll('.slider-test');
let contador = 1;
let tamanoWidht = sliderInd[0].clientWidth;
let intervalo = 3000;


setInterval(function tiempo(){
    slide() 
}, intervalo)

function slide(){
    slider.style.transform = 'translate('+ (- tamanoWidht * contador)+'px)';
    /*slider.style.transition = 'transform 2s';*/
    slider.style.transition = 'transform 1s';
    contador++;

    /*Se cambio la variable intervalo por un dato ya definido para que hafa los cambios rapidos*/
    if(contador == sliderInd.length){
        setTimeout(() => {
            slider.style.transform = 'translate(0px)';
            slider.style.transition = 'transform 0s';
            contador= 1;
        },1500)
    }

}