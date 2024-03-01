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

  // Close the modal when clicking anywhere outside of it
  window.onclick = function(event) {
    var popups = document.getElementsByClassName("popup-container");
    for (var i = 0; i < popups.length; i++) {
      if (event.target == popups[i]) {
        popups[i].style.display = "none";
      }
    }
  }