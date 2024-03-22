// Toggle Icon
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// Navbar sticky
let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100)

// Service section pop up
function showPopup(id) {
    var popup = document.getElementById("popupContainer" + id);
    if (popup) {
      popup.style.display = "block";
    }
  }
  
  function hidePopup(id) {
    var popup = document.getElementById("popupContainer" + id);
    if (popup) {
      popup.style.display = "none";
    }
  }
  
  window.onclick = function (event) {
    var popups = document.getElementsByClassName("popup-container");
    for (var i = 0; i < popups.length; i++) {
      if (event.target == popups[i]) {
        popups[i].style.display = "none";
      }
    }
  };

// Products images
let filterItem = document.querySelector(".items-links");
let filterImages = document.querySelectorAll(".product-img");

window.addEventListener("load", () => {
  filterItem.addEventListener("click", (selectedItem) => {
    if (selectedItem.target.classList.contains("item-link")) {
      document.querySelector(".menu-active").classList.remove("menu-active");
      selectedItem.target.classList.add("menu-active");
      let filterName = selectedItem.target.getAttribute("data-name");
      filterImages.forEach((image) => {
        let filterImages = image.getAttribute("data-name");
        if (filterImages == filterName || filterName == "all") {
          image.style.display = "block";
        } else {
          image.style.display = "none";
        }
      });
    }
  });
});


// Scroll-Top-Function

const scrollbtn = document.getElementById('scrollbtn');

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    scrollbtn.style.display = 'block';
  } else {
    scrollbtn.style.display = 'none';
  }
}

function toTopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// E-Slide 
const eslidebtn = document.getElementById('eslidebtn');
let clicked = false;

function eClick() {
  clicked = !clicked;
  const eSlide2 = document.getElementById('e-slide-2');
  const eSlide1 = document.getElementById('e-slide-1');
  if (clicked) {
    eSlide2.style.display = 'block';
    eSlide1.style.display = 'none';
  } else {
    eSlide2.style.display = 'none';
    eSlide1.style.display = 'block';
  }
}