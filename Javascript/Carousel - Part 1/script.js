const images = [
    'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3593922/pexels-photo-3593922.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=600'
  ];

const imageTag = document.getElementById("carouselImg");
imageTag.src = images[0];
let i = 0;
function updateImage(method){
    if(method.toString() === "next"){
        if(i === images.length-1){
            i = 0;
        }
        i = i+1;
        imageTag.src = images[i];
    }else if(method.toString() === "prev"){
        if(i === 0){
            i = images.length-1;
        }
        i = i-1;
        imageTag.src = images[i];
    }
}
  