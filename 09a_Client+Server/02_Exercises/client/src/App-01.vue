<template>
  <div id="app">

      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#"><router-link to="/home">Home</router-link></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item><router-link :to="{ name: 'about', params: { user: 'Nio und Emnauel'}}">Über uns</router-link></b-nav-item>
            <b-nav-item><router-link to="/messages">Aufgaben liste</router-link></b-nav-item>
            <!-- Passing Route Parameters -->
            <b-nav-item><router-link to="/message">Warenkorb</router-link></b-nav-item>
            <!-- Decoupling Params with Props -->
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    <router-view/>
    <MyNavigation />
  </div>


</template>
<script>
/* Import all components */
import SimpleNav from './components/SimpleNav'

export default {
  components: {
    MyNavigation: SimpleNav,
  },
}
</script>

<style lang="scss">
//Import of global-style
@import 'styles/global';

#app {
 background-color: lightblue;
}


</style>