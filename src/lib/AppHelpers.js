export const bringBackFocus = (el) => {
  window.onkeydown = () => document.querySelector(el).focus(); // returning focus on keydowwn
}
