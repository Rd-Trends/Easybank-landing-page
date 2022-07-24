"use strict";

const navBtn = document.querySelector(".menu--main-navigation .btn");
const navBtnIcon = document.querySelector(".menu--main-navigation .btn img");
const mobileNavMenu = document.querySelector(".menu--mobile-navigation-menu");

const toggleNavbar = () => {
  if (mobileNavMenu.classList.contains("menu--mobile-navigation-menu-active")) {
    mobileNavMenu.classList.remove("menu--mobile-navigation-menu-active");
    navBtnIcon.src = "./images/icon-hamburger.svg";
  } else {
    mobileNavMenu.classList.add("menu--mobile-navigation-menu-active");
    navBtnIcon.src = "./images/icon-close.svg";
  }
};

//event listeners
navBtn.addEventListener("click", toggleNavbar);
