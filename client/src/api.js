export const getHeaders = () => {
  return {
    "Content-Type": "application/json",
    "Accept": "application/json"
  };
};

export const handleResponses = response =>
  new Promise((resolve, reject) => {
    if (response.ok) {
      resolve(response);
    } else {
      response.text().then(message => {
        reject(message);
      });
    }
  });

export const createRequest = (url, options) => {
  return fetch(url, options)
    .then(handleResponses)
    .then(response => {
      return response.json();
    })
    .then(data => {
      return data;
    });
};

export default class Request {
  constructor() {
    this.getHeaders = getHeaders.bind(this);
    this.createRequest = createRequest.bind(this);
  }

  async get(url) {
    const headers = getHeaders();
    return await this.createRequest(url, { headers });
  }

  async post(url, body) {
    const method = "POST";
    const headers = getHeaders();
    return await this.createRequest(url, { method, headers, body });
  }

  async put(url, body) {
    const method = "PUT";
    const headers = getHeaders();
    return await this.createRequest(url, { method, headers, body });
  }

  async delete(url) {
    const method = "DELETE";
    const headers = getHeaders();
    return await this.createRequest(url, { method, headers });
  }
}
