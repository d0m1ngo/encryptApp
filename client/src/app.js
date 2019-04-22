import { getElement } from "./utils.js";
import Request from "./api";
import "./main.css";
document.addEventListener("DOMContentLoaded", function(event) {
  // Your code to run since DOM is loaded and ready
  const textArea = getElement("#textinput");
  const encrypt = getElement("#encrypt");
  const decrypt = getElement("#decrypt");
  const data = { id: null };

  const createNewText = async data => {
    try {
      const req = new Request();
      const body = JSON.stringify({ text: data });
      return await req.post(`http://localhost:8000/api/`, body);
    } catch (error) {
      throw new Error(error);
    }
  };

  encrypt.addEventListener("click", async e => {
    e.preventDefault();
    const response = await createNewText("blbla");
    data.id = response.id;
  });
  decrypt.addEventListener("click", e => {
    e.preventDefault();
    console.log(data);
  });
});
