import {getContractInstance, api} from './index'
import { range } from '../service/common'
import siteConfig from '../config/site.config'

async function owner() {
  try {
    const contractInstance = getContractInstance()
    const res = await contractInstance.methods.owner().call()
    return Promise.resolve(res)
  } catch (error) {
    return Promise.reject(error)
  }
}

async function getMintPrice() {
  try {
    const contractInstance = getContractInstance()
    let res = await contractInstance.methods.cost().call()
    return Promise.resolve(res)
  } catch (error) {
    return Promise.reject(error)
  }
}

async function mint(uri, address, value) {
  try {
    const contractInstance = getContractInstance()
    const res = await contractInstance.methods.mint(uri).send({
      from: address,
      value: value
    });
    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
}

async function availableTokenId(address) {
  try {
    const contractInstance = getContractInstance()
    const res = await contractInstance.methods.availaleChangeTokenId(address).call();
    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
}

async function availableTokenIds(address) {
  try {
    const contractInstance = getContractInstance()
    const res = await contractInstance.methods.availaleChangeTokenIds(address).call();
    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
}

async function isAvailableChange(address, tokenId) {
  try {
    const contractInstance = getContractInstance()
    const res = await contractInstance.methods.isAvailableChange(address, tokenId).call();
    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
}

async function confirmChange(address, tokenId) {
  try {
    const contractInstance = getContractInstance()
    const res = await contractInstance.methods.confirmChangeMetadata(tokenId).send({
      from: address
    });
    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
}

async function getTotalSupply() {
  try {
    const contractInstance = getContractInstance()
    const res = await contractInstance.methods.totalSupply().call()
    return Promise.resolve(res)  
  } catch (error) {
    return Promise.reject(error)
  }
}

async function getTokens() {
  try {
    const contractInstance = getContractInstance()
    const totalSupply = await contractInstance.methods.totalSupply().call()
    let tokens = Promise.all(range(1, totalSupply).map(async (item) => {
      const tokenURI = await contractInstance.methods.tokenURI(item).call();
      const res = await api(tokenURI, 'GET')
      res.metadata = {...res}
      res.tokenId = item
      const changeData = await contractInstance.methods.changeList(item).call();
      if (changeData.uri) {
        const changeMeta = await api(changeData.uri, 'GET');
        res.new_image = changeMeta.image
        res.status = changeData.status
      }
      return res
    }))
    return Promise.resolve(tokens)
  } catch (error) {
    return Promise.reject(error)
  }
}

async function getToken(tokenId) {
  try {
    const contractInstance = getContractInstance()
    const tokenURI = await contractInstance.methods.tokenURI(tokenId).call();
    const res = await api(tokenURI, 'GET')
    res.metadata = {...res}
    res.tokenId = tokenId
    const changeData = await contractInstance.methods.changeList(tokenId).call();
    if (changeData.uri) {
      const changeMeta = await api(changeData.uri, 'GET');
      res.new_image = changeMeta.image
      res.status = changeData.status
    }
    return Promise.resolve(res)
  } catch (error) {
    return Promise.reject(error);
  }
}

async function addChangeList(tokenId, metaURI, address) {
  try {
    const contractInstance = getContractInstance()
    const res = await contractInstance.methods.addChangeList(tokenId, metaURI).send({
      from: address
    });
    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
}

export {
  mint,
  addChangeList,
  owner,
  getTokens,
  getToken,
  getTotalSupply,
  confirmChange,
  isAvailableChange,
  getMintPrice,
  availableTokenId,
  availableTokenIds
}