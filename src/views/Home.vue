<template>
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <blockquote class="fs-5">
            Welcome {{ validUserName }}!
            <footer>
              <small>
                <em>&mdash; Every great film should seem new every time you see it.
                  - Roger Ebert</em>
              </small>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row align-items-center justify-content-center">
        <div class="col-12 col-sm-10 col-md-8">
          <div class="card">
            <div class="row">
              <div class="col-md-6 d-none d-xl-block d-lg-block d-md-block">
                <img
                  :src="require('@/assets/movie_logo.jpg')"
                  class="img-fluid"
                  alt="Responsive image"
                />
              </div>
              <div class="col-md-6 d-md-none">
                <img
                  :src="require('@/assets/movie_logo.jpg')"
                  class="img-fluid"
                  alt="Responsive image"
                  style="height: 20rem"
                />
              </div>
              <div class="col-md-6">
                <div class="card-body">
                  <h5 class="card-title">Movies</h5>
                  <p class="card-text">
                    View descriptions and ratings of movies you
                    are intersting in watching.
                  </p>
                  <a
                    v-if="this.authenticated === 'true'"
                    @click="viewMovies"
                    class="btn btn-primary"
                  >
                    View Details
                  </a>
                  <a
                    v-else
                    @click="login"
                    class="btn btn-primary"
                  >
                    Login to View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
import router from '../router'

export default {
  name: 'Home',
  components: {},
  data: () => ({
    validUserName: 'Guest',
    authenticated: 'false'
  }),
  mounted () {
    this.authenticated = localStorage.getItem('isAuthenticated')
    this.getUser()
  },
  methods: {
    viewMovies () {
      router.push('/movie-list')
    },
    login () {
      router.push('/auth')
    },
    getUser () {
      if (
        localStorage.getItem('isAuthenticated') &&
          JSON.parse(localStorage.getItem('isAuthenticated')) === true
      ) {
        this.validUserName = JSON.parse(localStorage.getItem('log_user'))
      }
    }
  }
}
</script>

  <style scoped>
  h3 {
    font-style: italic;
  }
  </style>
