import { ofetch } from 'ofetch'

const config = {
  headers: {
    'X-RapidAPI-Key': '16d46993a8msh9e6d114ebacfd66p19d9a7jsn26f91d79454e',
    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
  },
  baseURL: 'https://deezerdevs-deezer.p.rapidapi.com'
}

export class API {
  static search = async (query) => {
    const searchConfig = { ...config, params: { q: query } }
    const response = await ofetch('search', searchConfig)
    return response.data
  }
}
