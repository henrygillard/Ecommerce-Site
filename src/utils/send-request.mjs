import fetch from "node-fetch";

export default async function sendRequest(url, method = 'GET', payload = null) {
    // Fetch takes an optional options object as the 2nd argument
    // used to include a data payload, set headers, etc. 
    const options = { method };
    if (payload) {
      options.headers = { 'Authorization': 'Basic N2E2YzI4NmM5ODZkYTZmMTUxYzYxODRmYmYwYzI1MzA6c2hwcGFfMThjNjQzNmNiZjBiOTQ5MWU5YzdhMzY2MWQ3MThhMmE=' };
      options.body = JSON.stringify(payload);
    }
    
    const res = await fetch(url, options);
    // res.ok will be false if the status code set to 4xx in the controller action
    if (res.ok) {
        console.log(res.json());
        return res.json();
    }
    throw new Error('Bad Request');
  }