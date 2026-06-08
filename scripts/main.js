const sharefunc = document.querySelector(".js-share");
const socialsPopup = document.querySelector(".socials");
const socialPopup = document.querySelector(".socialss");
const toolTip = document.querySelector(".socials-toolip");

function shareSocials() {
  const isDesktop = window.innerWidth >= 768;

  if (isDesktop) {
    toolTip.classList.toggle("hidden");
  } else {
    socialsPopup.classList.toggle("hidden");
    socialPopup.classList.toggle("hidden");
  }
}
