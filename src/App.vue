<script>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';

export default {
  components: {
    NavBar
  },
  data() {
    return {

    }
  }
}
</script>

<template>
  <NavBar></NavBar>

  <main>
    <RouterView />
  </main>
</template>


