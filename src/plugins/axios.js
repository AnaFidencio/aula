import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTRmODYwNWNjMzJlMTQyNWRmMDNjODBiM2M1NWY5NyIsInN1YiI6IjY1MDQ2ODEyYzM5MGM1MDBlMTIyNWQxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TqYykqUD8ez5n728TN8LpuvYqkHXT4RAKru2jHRHcfs`
  }
})

export default api