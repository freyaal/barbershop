var link = document.querySelector(".login-link");
var popup = document.querySelector(".modal-login");

var close = popup.querySelector(".modal-close");
var login = popup.querySelector("[name=login");

var form = popup.querySelector("form");
var password = popup.querySelector("[name=password");

var storage = localStorage.getItem("login");

var isStorageSupport = true;
var storage = "";

var overlay = document.querySelector(".modal-overlay");


try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  overlay.classList.add("overlay-show");
  
  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }
});



close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
  overlay.classList.remove("overlay-show");
});

form.addEventListener("submit", function(evt){
  if (!login.value || !password.value) {
    evt.preventDefault();
    popup.classList.add("modal-error");			
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
    }
    
  }	
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();

    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
      overlay.classList.remove("overlay-show");
    }
  }
});

var mapLink = document.querySelector(".js-button-map");
var mapPopup = document.querySelector(".modal-map");

var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
  overlay.classList.add("overlay-show");
  
});
mapClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
  overlay.classList.remove("overlay-show");
  
});
window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();

    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
      overlay.classList.remove("overlay-show");
    }
  }
});

