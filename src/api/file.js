import { NFTStorage, File, Blob } from 'nft.storage'

import siteConfig from '../config/site.config'
import metadatJson from '../config/metadata.json'

const NFT_STORAGE_TOKEN = siteConfig.NFT_STORAGE_TOKEN
const client = new NFTStorage({ token: NFT_STORAGE_TOKEN })

async function uploadImage(file, filename) {
  try {
    const imageFile = new File([ file ], filename, { type: 'image/png' })
    const cid = await client.storeDirectory([imageFile])
    return Promise.resolve(cid)
  } catch(error) {
    return Promise.reject(error)
  }
}

async function uploadMetadata(metadata, filename) {
  try {
    const metadataFile = new File([JSON.stringify(metadata)], filename, { type: 'text/plain' })
    const cid = await client.storeDirectory([metadataFile])
    return Promise.resolve(cid)
  } catch(error) {
    return Promise.reject(error)
  }
}

export {
  uploadImage,
  uploadMetadata
}