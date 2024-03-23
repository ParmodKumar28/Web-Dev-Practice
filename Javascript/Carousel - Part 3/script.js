const images = [
    'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3593922/pexels-photo-3593922.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=600'
  ];

const imageTag = document.getElementById("carouselImg");
let i = 0;

function updateImage(){
    imageTag.src = images[i];
}

window.onload =  function(){
    updateImage();
};

function nextImg(){
    i = (i + 1) % images.length;
    updateImage();
}

function previousImg(){
    i = (i - 1 + images.length)%images.length;
    updateImage();
}
  
  