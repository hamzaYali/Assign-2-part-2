import axios from 'axios'

// Change the API_URL to the correct location of the backend API before deploying the app
const API_URL = 'https://hamzayali1.pythonanywhere.com'
/*
  Options:
  - 'http://localhost:8000'
  - 'http://127.0.0.1:8000'
  - 'https://yourPythonAnywhereName.pythonanywhere.com'
*/

export class APIService {
  // eslint-disable-next-line no-useless-constructor
  constructor () {}

  // eslint-disable-next-line camelcase
  getMovie (param_pk) {
    // eslint-disable-next-line camelcase
    const url = `${API_URL}/api/movies/${param_pk}`
    const jwtToken = localStorage.getItem('access')
    const headers = { Authorization: `JWT ${jwtToken}` }
    return axios.get(url, { headers: headers })
  }

  getMovieList () {
    const url = `${API_URL}/api/movies/`
    const jwtToken = localStorage.getItem('access')
    const headers = { Authorization: `JWT ${jwtToken}` }
    return axios.get(url, { headers: headers })
  }

  addNewMovie (movie) {
    const url = `${API_URL}/api/movies/`
    const jwtToken = localStorage.getItem('access')
    const headers = { Authorization: `JWT ${jwtToken}` }
    return axios.post(url, movie, { headers: headers })
  }

  updateMovie (movie) {
    const url = `${API_URL}/api/movies/${movie.pk}`
    const jwtToken = localStorage.getItem('access')
    const headers = { Authorization: `JWT ${jwtToken}` }
    return axios.put(url, movie, { headers: headers })
  }

  // eslint-disable-next-line camelcase
  deleteMovie (movie_Pk) {
    // eslint-disable-next-line camelcase
    const url = `${API_URL}/api/movies/${movie_Pk}`
    const jwtToken = localStorage.getItem('access')
    const headers = { Authorization: `JWT ${jwtToken}` }
    return axios.delete(url, { headers: headers })
  }

  authenticateLogin (credentials) {
    const url = `${API_URL}/api/`
    return axios.post(url, credentials)
  }

  registerUser (credentials) {
    const url = `${API_URL}/register/`
    credentials.customusername = credentials.username
    return axios.post(url, credentials)
  }
}
