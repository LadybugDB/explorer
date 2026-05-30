const baseURL = process.env.BASE_URL;

class HttpError extends Error {
  constructor(message, response) {
    super(message);
    this.name = "HttpError";
    this.response = response;
  }
}

async function parseResponse(response) {
  if (response.status === 204) {
    return null;
  }
  const contentType = response.headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    return response.json();
  }
  const text = await response.text();
  if (!text) {
    return null;
  }
  try {
    return JSON.parse(text);
  } catch (_) {
    return text;
  }
}

async function request(method, url, data, config = {}) {
  const headers = new Headers(config.headers || {});
  const options = {
    method,
    headers,
  };

  if (data !== undefined) {
    if (data instanceof FormData || data instanceof Blob || data instanceof ArrayBuffer) {
      options.body = data;
      if (data instanceof FormData) {
        headers.delete("Content-Type");
      }
    } else {
      options.body = JSON.stringify(data);
      if (!headers.has("Content-Type")) {
        headers.set("Content-Type", "application/json");
      }
    }
  }

  if (!headers.has("Accept")) {
    headers.set("Accept", "application/json");
  }

  const response = await fetch(`${baseURL || ""}${url}`, options);
  const responseData = await parseResponse(response);
  const result = {
    data: responseData,
    status: response.status,
    statusText: response.statusText,
    headers: response.headers,
  };

  if (!response.ok) {
    throw new HttpError(response.statusText || "Request failed", result);
  }
  return result;
}

export default {
  get(url, config) {
    return request("GET", url, undefined, config);
  },
  post(url, data, config) {
    return request("POST", url, data, config);
  },
  delete(url, config) {
    return request("DELETE", url, undefined, config);
  },
};
