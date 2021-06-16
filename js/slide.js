const imageToken = document.querySelector('#imageToken');
const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');

const imageURLS = ['applebook', 'laptop', 'computer'];
let imageIndex = 0;

nextButton.addEventListener('click', nextImage);
prevButton.addEventListener('click', prevImage);

setInterval(nextImage, 5000);

function nextImage(){
    imageIndex++;
    if(imageIndex == imageURLS.length){
        imageIndex = 0;
    }
    imageToken.setAttribute('src', 'images/'+imageURLS[imageIndex]+'.png');
}


function prevImage(){
    imageIndex--;
    if(imageIndex == -1){
        imageIndex = imageURLS.length-1;
    }
    imageToken.setAttribute('src', 'images/'+imageURLS[imageIndex]+'.png');
}

