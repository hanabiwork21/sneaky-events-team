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
