// SIDE BAR
const menuItems = document.querySelectorAll(".menu-item");
const notificationPopup = document.querySelector(".notification-popup");
const notificationCount = document.querySelector(
  "#notifications .notification-count"
);
// MESSAGES
const messagesNotification = document.querySelector("#messages-notifications");
const messages = document.querySelector(".messages");
const messageNotificationCount = document.querySelector(
  "#messages-notifications .notification-count"
);
const message = messages.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");

// THEME
const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");

//FONTSIZES
const fontSizes = document.querySelectorAll(".choose-size span");
var root = document.querySelector(":root");

// PRIMARY COLORS
const colorPalette = document.querySelectorAll(".choose-color span");

// BACKGROUNDS
const Bg1 = document.querySelector(".bg-1");
const Bg2 = document.querySelector(".bg-2");
const Bg3 = document.querySelector(".bg-3");

//remove active class from all menu items
const changeActiveItems = () => {
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });
};

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    changeActiveItems();
    item.classList.add("active");
    if (item.id != "notifications") {
      notificationPopup.style.display = "none";
      // notificationCount.style.display = "block";
    } else {
      notificationPopup.style.display = "block";
      notificationCount.style.display = "none";
    }
  });
});

// MESSAGES
//searches chat
const searchMessage = () => {
  const val = messageSearch.value.toLowerCase();

  message.forEach((chat) => {
    let name = chat.querySelectorAll("h5").textContent.toLowerCase();
    if (name.indexOf(val) != -1) {
      user.style.display = "flex";
    } else {
      user.style.display = "none";
    }
  });
};
// search bar
messageSearch.addEventListener("keyup", searchMessage);

// highlight messages card when messages menu item is clicked
messagesNotification.addEventListener("click", () => {
  messages.style.boxShadow = "0 0 1rem var(--color-primary)";
  messageNotificationCount.style.display = "none";
  setTimeout(() => {
    messages.style.boxShadow = "none";
  }, 2000);
});

// THEME CUSTOMIZATION

// openModal
const openThemeModal = () => {
  themeModal.style.display = "grid";
};
theme.addEventListener("click", openThemeModal);

//CloseModal
const closeThemeModal = (e) => {
  if (e.target.classList.contains("customize-theme")) {
    themeModal.style.display = "none";
  }
};
themeModal.addEventListener("click", closeThemeModal);

// ==================FONTSIZE===================
// remove active class from span or font size selectors
const removeSizeSelector = () => {
  fontSizes.forEach((size) => {
    size.classList.remove("active");
  });
};

fontSizes.forEach((size) => {
  size.addEventListener("click", () => {
    removeSizeSelector();
    let fontSize;
    size.classList.toggle("active");

    if (size.classList.contains("font-size-1")) {
      fontSize = "10px";
      root.style.setProperty("--sticky-top-left", "5.4rem");
      root.style.setProperty("--sticky-top-right", "5.4rem");
    } else if (size.classList.contains("font-size-2")) {
      fontSize = "13px";
      root.style.setProperty("--sticky-top-left", "5.4rem");
      root.style.setProperty("--sticky-top-right", "-7rem");
    } else if (size.classList.contains("font-size-3")) {
      fontSize = "16px";
      root.style.setProperty("--sticky-top-left", "-2rem");
      root.style.setProperty("--sticky-top-right", "-17rem");
    } else if (size.classList.contains("font-size-4")) {
      fontSize = "19px";
      root.style.setProperty("--sticky-top-left", "-5rem");
      root.style.setProperty("--sticky-top-right", "-25rem");
    } else if (size.classList.contains("font-size-5")) {
      fontSize = "22px";
      root.style.setProperty("--sticky-top-left", "-10rem");
      root.style.setProperty("--sticky-top-right", "-35rem");
    }

    // change font size of root html element
    document.querySelector("html").style.fontSize = fontSize;
  });
});

// TO CHANGE PRIMARY COLOR

// remove active class from color
const changeActiveColorClass = () => {
  colorPalette.forEach((colorPicker) => {
    colorPicker.classList.remove("active");
  });
};

colorPalette.forEach((color) => {
  color.addEventListener("click", () => {
    let primary;
    // remove active class from color
    changeActiveColorClass();

    if (color.classList.contains("color-1")) {
      primaryHue = 252;
    } else if (color.classList.contains("color-2")) {
      primaryHue = 52;
    } else if (color.classList.contains("color-3")) {
      primaryHue = 352;
    } else if (color.classList.contains("color-4")) {
      primaryHue = 152;
    } else if (color.classList.contains("color-2")) {
      primaryHue = 202;
    }

    color.classList.add("active");

    root.style.setProperty("--primary-color-hue", primaryHue);
  });
});

// BACKGROUND
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBG = () => {
  root.style.setProperty("--light-color-lightness", lightColorLightness);
  root.style.setProperty("--white-color-lightness", whiteColorLightness);
  root.style.setProperty("--dark-color-lightness", darkColorLightness);
};

Bg1.addEventListener("click", () => {
  // add active class
  Bg1.classList.add("active");
  // remove from the others
  Bg2.classList.remove("active");
  Bg3.classList.remove("active");
  // remove customized changes from local storage
  window.location.reload();
});

Bg2.addEventListener("click", () => {
  darkColorLightness = "95%";
  whiteColorLightness = "20%";
  lightColorLightness = "15%";

  // add active class
  Bg2.classList.add("active");
  // remove active from the others
  Bg1.classList.remove("active");
  Bg3.classList.remove("active");
  changeBG();
});

Bg3.addEventListener("click", () => {
  darkColorLightness = "95%";
  whiteColorLightness = "10%";
  lightColorLightness = "0%";

  // add active class
  Bg3.classList.add("active");
  // remove active from the others
  Bg1.classList.remove("active");
  Bg2.classList.remove("active");
  changeBG();
});
