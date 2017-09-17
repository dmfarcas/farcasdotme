export const bringBackFocus = (el) => {
  window.onkeydown = () => document.querySelector(el).focus(); // returning focus on keydowwn
}

export const scrollToBottom = (el) => {
   const content = document.querySelector(el);
   const height = content.scrollHeight
   console.log(height);
   window.scrollTo(0, height);
 }
