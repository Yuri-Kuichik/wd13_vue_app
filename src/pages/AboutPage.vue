<template>
  <BaseLayout>
    <div class="about">
      <h1>This is an about page</h1>
    </div>
  </BaseLayout> 
</template>

<script>
import BaseLayout from '@/components/BaseLayout.vue';

export default {
  components: { BaseLayout },
}
</script>
  
<style>
  @media (min-width: 1024px) {
    .about {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>