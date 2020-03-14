

document.addEventListener('DOMContentLoaded', function(){
 
    let picDiv = document.querySelector("#pic");
    let pictures = [1,2,3,4,5,6,7]
    let imgNum = 1;

    setInterval(function(){
        picDiv.style.background = `url('img/image-${pictures[imgNum]}.jpg')` + "center/cover no-repeat";
        imgNum++;
        if(imgNum >= pictures.length){
            imgNum = 0;
        }
    }, 5000);
})



