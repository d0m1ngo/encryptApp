import { getElement, toggleDisplay } from "./utils.js";
import Request from "./api";
import "./main.css";
document.addEventListener("DOMContentLoaded", function(event) {
  const textArea = getElement("#textinput");
  const encrypt = getElement("#encrypt");
  const decrypt = getElement("#decrypt");
  const input = getElement("#input");
  const info = getElement("#info");
  let data = { id: null, encrypted_text: null, encrypted: false };

  const createAndEncrypt = async data => {
    try {
      const req = new Request();
      const body = JSON.stringify(data);
      return await req.post(`http://localhost:8000/api/`, body);
    } catch (error) {
      throw new Error(error);
    }
  };

  const updateEncryptedText = async data => {
    try {
      const req = new Request();
      const body = JSON.stringify({ default_text: data });
      return await req.post(`http://localhost:8000/api/${data.id}`, body);
    } catch (error) {
      throw new Error(error);
    }
  };

  const decryptText = async data => {
    try {
      const req = new Request();
      const body = JSON.stringify({ password: data.password });
      return await req.get(
        `http://localhost:8000/api/${data.id}?password=${data.password}`,
        body
      );
    } catch (error) {
      throw new Error(error);
    }
  };

  encrypt.addEventListener("click", async e => {
    e.preventDefault();
    const dataObj = { default_text: textArea.value, password: input.value };
    const response = await createAndEncrypt(dataObj);
    data = response;
    toggleDisplay(info, response.encrypted, textArea);
    const encryptedText = response.encrypted_text;
    textArea.value = encryptedText;
  });

  decrypt.addEventListener("click", async e => {
    e.preventDefault();
    const response = await decryptText({ id: data.id, password: input.value });
    data = response;
    toggleDisplay(info, response.encrypted, textArea);
    textArea.value = response.encrypted_text;
  });
});
