<template>
  <div>
    <div class="d-md-none">
      <!--Mobile - Top Navigation Menu-->
      <div class="nav-menu float-right" @click="showMenu">
        <font-awesome-icon icon="bars" />
        <div class="nav-content" :class="this.showMobileMenu ? 'open-menu' : 'closed-menu'">
          <ul class="nav-items">
            <li><router-link to="/">Home</router-link></li>
            <li v-if="this.authenticated">
              <router-link :to="{name: 'MovieList'}">Movies</router-link>
            </li>
            <li v-else @click="login">
              <router-link :to="{name: 'Auth'}">Log in</router-link>
            </li>
            <li v-if="!this.authenticated" @click="register">
              <router-link :to="{name: 'Register'}">Register</router-link>
            </li>
            <li v-else @click="logout">
              <router-link :to="{name: 'Auth'}">Logout</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--Non mobile navigation-->
    <div class="d-none d-xl-block d-lg-block d-md-block">
      <ul class="nav justify-content-center">
        <li class="nav-item active">
          <router-link to="/">Home</router-link>
        </li>
        <li class="nav-item" v-if="this.authenticated">
          |
          <router-link :to="{name: 'MovieList'}">Movies</router-link>
        </li>
        <li class="nav-item" v-if="!this.authenticated" @click="login">
          |
          <router-link :to="{name: 'Auth'}">Log in</router-link>
        </li>
        <li class="nav-item" v-if="!this.authenticated" @click="register">
          |
          <router-link :to="{name: 'Register'}">Register</router-link>
        </li>
        <li class="nav-item .justify-content-end" v-if="this.authenticated" @click="logout">
          |
          <router-link :to="{name: 'Auth'}">Logout</router-link>
        </li>
      </ul>
    </div>
    <router-view />
  </div>
</template>

<script>
import router from './router'
import { APIService } from './http/APIService'

// eslint-disable-next-line no-unused-vars
const apiService = new APIService()

export default {
  name: 'App',
  // check for auth token to determine if user already logged in
  beforeCreate () {
    if (localStorage.getItem('isAuthenticated') &&
        JSON.parse(localStorage.getItem('isAuthenticated')) === true) {
      this.authenticated = true
    } else {
      this.authenticated = false
    }
  },
  props: {
    msg: String
  },
  data: () => ({
    authenticated: false,
    dialog: false,
    uName: 'Guest',
    menu: [],
    showMobileMenu: false
  }),
  mounted () {
    if (localStorage.getItem('isAuthenticated') &&
        JSON.parse(localStorage.getItem('isAuthenticated')) === true) {
      this.authenticated = true
      this.uName = localStorage.getItem('log_user')
    } else {
      this.authenticated = false
    }
  },
  methods: {
    getUser () {
      if (localStorage.getItem('isAuthenticated') &&
          JSON.parse(localStorage.getItem('isAuthenticated')) === true) {
        this.validUserName = JSON.parse(localStorage.getItem('log_user'))
      }
    },
    logout () {
      // clear local storage items and set authenticated to false
      localStorage.removeItem('log_user')
      localStorage.removeItem('access')
      localStorage.removeItem('refresh')
      localStorage.setItem('isAuthenticated', false)
      this.authenticated = false
      window.location = '/'
    },
    home () {
      window.location = '/'
    },
    register () {
      router.push('/register')
    },
    login () {
      router.push('/auth')
    },
    /* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
    showMenu () {
      this.showMobileMenu = !this.showMobileMenu
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav {
  padding: 1em;
  background-color: cadetblue;
}

li {
  font-weight: bold;
  color: #2c3e50;
}

a {
  color: black;
  padding: .5em;

  &.router-link-exact-active {
    color: #08492c;
  }
}

// Mobile version - hamburger menu
@media screen and (max-width: 768px) {
  .nav-menu {
    padding-top: 10px;
    padding-right: 10px;
    width: 100%;
    background-color: cadetblue;
    text-align: end;
  }

  li {
    font-weight: bold;
    color: #2c3e50;
  }

  a {
    color: black;
    padding: .5em;

    &.router-link-exact-active {
      color: #08492c;
    }
  }

  .nav-items {
    justify-content: left;
    align-items: left;
    list-style: none;
  }

  .open-menu {
    opacity: 1;
    height: 60%;
  }

  .closed-menu {
    opacity: 0;
    height: 20;
    padding: 0;
  }
}
</style>
