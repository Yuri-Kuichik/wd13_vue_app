<!-- <template>
    <section class="base-layout">
        <slot></slot>
    </section>
</template> -->



<script>
import { h } from 'vue'

export default {
  render() {
    return h('section', {class: 'base-layout'}, this.$slots.default() )
  }
}
</script>

<style scoped>
.base-layout  {
  width: 1280px;
  padding: 3rem 0;
  margin: 0 auto;
  max-width: 100%;
}
</style>