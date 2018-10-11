const baseAPIURL =
  "http://challenge.semmtech.com/sparql-cabinet/api/sparql/queries";

const API_KEY = `?api_key=${process.env.REACT_APP_API_KEY}`;
export const getQueries = () => {
  const options = {
    method: "GET"
  };
  const url = `${baseAPIURL}${API_KEY}`;
  return fetch(url, options);
};

export const createQuery = (query = {}) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(query)
  };
  const url = `${baseAPIURL}${API_KEY}`;
  return fetch(url, options);
};

export const getQuery = id => {
  const options = {
    method: "GET"
  };
  const url = `${baseAPIURL}/${id}/${API_KEY}`;
  return fetch(url, options);
};

export const updateQuery = (id, query) => {
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(query)
  };
  const url = `${baseAPIURL}/${id}${API_KEY}`;
  return fetch(url, options);
};

export const deleteQuery = id => {
  const options = {
    method: "DELETE"
  };
  const url = `${baseAPIURL}/${id}${API_KEY}`;
  return fetch(url, options);
};
