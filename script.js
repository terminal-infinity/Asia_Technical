let navLinks = document.getElementById("navLinks");
function showMenu() {
  navLinks.style.top = '0';
}

function hideMenu() {
  navLinks.style.top = '-100%';
}



let imageAnim = document.getElementById("image-animate");

let imageArray = [
 "./images/img1.jpg",
 "./images/img2.jpg",
 "./images/img3.jpg",
 "./images/img4.jpg",
 "./images/img5.jpg",
 "./images/img6.jpg",
 "./images/img7.jpg",
 "./images/img8.jpg",
 "./images/img9.jpg",
 "./images/img10.jpg",
]

let imageIndex = 0;

const startImage = () =>{
  imageAnim.setAttribute("src",imageArray[imageIndex]);
  imageIndex++;
  if(imageIndex >= imageArray.length){
    imageIndex = 0;
  }
}

setInterval(startImage,1000);