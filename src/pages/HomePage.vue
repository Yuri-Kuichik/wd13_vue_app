<script>

import VueCalculator from "@/components/VueCalculator.vue";
import VueCounter from "@/components/VueCounter.vue";

export default {
  components: {
    VueCounter,
    VueCalculator
  },
  provide: {
    message: 'привет!'
  },
  data() {
    return {
      customMessage: 'Hello from Home page!!!',
      searchText: 'search',
      num: 4,
      res: false,
      textButton: 'Click me',
    }
  },
  methods: {
    clickOnButtonComponent() {
      console.log('clickOnButtonComponent');
    },
  },
}
</script>

<template>
  <main>
    <section class="d-flex">
      <vue-counter />
      <vue-calculator />
      <img class="base-button" src="../assets/images/components.png"/>
    </section>
  </main>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  gap: 2rem;
}

section img {
  max-width: 50%;
}

</style>