const API_TOKEN = "d57e61c3cf4fc715607416aaecd7483f"

export function getFilmsFromApiWithSearchedText (text) {
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}
