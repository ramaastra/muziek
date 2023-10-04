import { ofetch } from 'ofetch'

const config = {
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
  },
  baseURL: 'https://deezerdevs-deezer.p.rapidapi.com'
}

export class API {
  static getSongCover = (md5_image) => {
    return `https://e-cdns-images.dzcdn.net/images/cover/${md5_image}/500x500-000000-80-0-0.jpg`
  }

  static search = async (query) => {
    const searchConfig = { ...config, params: { q: query } }

    try {
      const response = await ofetch('search', searchConfig)
      return response.data
    } catch (error) {
      console.error(error)
    }
  }

  static getSongById = async (id) => {
    try {
      const response = await ofetch(`/track/${id}`, config)
      return response
    } catch (error) {
      console.error(error)
    }
  }

  static getAlbumById = async (id) => {
    try {
      const response = await ofetch(`/album/${id}`, config)
      return response
    } catch (error) {
      console.error(error)
    }
  }
}
