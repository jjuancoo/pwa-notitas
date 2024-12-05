<template>
  <v-app>
    <v-toolbar app>
      <v-icon>arrow_back</v-icon>
      <v-toolbar-title>
        <span>VueNoteApp</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-item>
        <v-btn flat>About</v-btn>
      </v-toolbar-item>
    </v-toolbar>
    <v-content>
      <Notes :pages="pages" @new-note="newNote"/>
    </v-content>
    <!-- <v-content>
      <img src="./assets/logo.png" alt="Vue Logo">
      <HelloWorld msg="Bienvenido a tu App Vue.js"/>
    </v-content> -->

    <!-- <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <HelloWorld/>
    </v-main> -->
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import Notes from './components/Notes'
// import About from './components/About'

export default {
  components: {
    Notes,
  },

  //Este data es propio de vue
  data: () => ({
    pages: [],
    index: 0
  }),
  methods: {
    newNote() {
      this.pages.push({
        id: Date.now(),
        title: 'Nueva Nota',
        content: 'lorem ipsum dolor sit amet, consectetur adip eget eu in lorem ipsum dolor'
      })
      console.log(this.pages)
    },
    saveNote (){

    },
    deleteNote(){

    }
  }
};
</script>

<style>
  #app {
    font-family: 'Avenir', Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
