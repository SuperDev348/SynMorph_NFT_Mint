import Web3 from 'web3';
import siteConfig from '../config/site.config';
import ABI from '../config/abi.json'

const getContractInstance = () => {
  const web3 = new Web3(Web3.givenProvider);
  let res = new web3.eth.Contract(ABI, siteConfig.CONTRACT_ADDRESS);
  return res
}

function api(url, method, headers, body) {
  try {
    return window
      .fetch(url, {
        method: method,
        headers: headers,
        body: body,
      })
      .then(async (response) => {
        const res = await response.json();
        if (response.ok) {
          return res;
        } else {
          const error = {
            message: res.message,
          };
          return Promise.reject(error);
        }
      });
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
}

export {
  getContractInstance,
  api
};