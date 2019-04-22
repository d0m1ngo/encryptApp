export const getElement = element => document.querySelector(element);
export const toggleDisplay = (obj, value, textArea) => {
  if (value === true) {
    obj.classList.remove("none");
    obj.classList.add("block");
    textArea.setAttribute("disabled", "true");
  } else {
    obj.classList.remove("block");
    obj.classList.add("none");
    textArea.removeAttribute("disabled");
  }
};
