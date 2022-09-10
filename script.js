
const imgAll =[
    "img/01.jpg",
    "img/02.jpg",
    "img/03.jpg",
    "img/04.jpg",
    "img/05.jpg",
    "img/07.jpg",
    "img/08.jpg",
    "img/09.jpg",
    "img/10.jpg",
    "img/11.jpg",
    "img/12.jpg",
    "img/13.jpg",
    ]
    const imgSlider=document.getElementById("slider");
    let imgCount=0;
       function next() {
           imgCount++;
           if(imgCount >= imgAll.length){
               imgCount = 0;
           }
           const imgUrl = imgAll[imgCount]
           imgSlider.src=imgUrl;
       }
       function priv() {
           imgCount--;
           if(imgCount < 0){
               imgCount = imgAll.length -1;
           }
           const imgUrl = imgAll[imgCount]
           imgSlider.src=imgUrl;
       }