let picDiv = document.querySelector("#pic");

let pictures = ["url('img/image-1.jpg')","url('img/image-2.jpg')","url('img/image-3.jpg')","url('img/image-4.jpg')","url('img/image-5.jpg')","url('img/image-6.jpg')","url('img/image-7.jpg')"]

let imgNum = 1;

setInterval(function(){

    picDiv.style.background = pictures[imgNum] + "center/cover no-repeat";
    imgNum++;
    if(imgNum >= pictures.length){
        imgNum = 0;
    }
}, 5000);
