var container = document.querySelector('.container--slider');
var slider = document.querySelectorAll('.slider').length;
var scroll = 0;

container.style.width = `${slider}00%`;

function leftRoll(){
    if(scroll==0){
        container.style.marginLeft = '0vw';
    } else {
        scroll = scroll + 100;
        container.style.marginLeft = scroll + 'vw';
    }
}

function rightRoll(){
    var sliderNum = Number('-'+slider+'00') + 100;
    if(scroll==sliderNum){
        scroll = 0;
        container.style.marginLeft = scroll + 'vw';
    } else{
        scroll = scroll - 100;
        container.style.marginLeft = scroll + 'vw';
    }
}