export const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  params: {
    maxResults: 50
  },
  headers: {
    'X-RapidAPI-Key': process.env.VUE_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
}

export const fetchFromAPI = async (url: string) => {
  const { data }: any = await fetch(`${BASE_URL}/${url}`, options)

  return data
}
