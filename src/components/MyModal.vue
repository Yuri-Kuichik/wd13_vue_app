<script>
export default {
  data() {
    return {
      open: false
    }
  }
}
</script>

<template>
  <div class="modal-wrapper">
    <div class="modal">
        <div class="modal-content">
          <h2 v-if="$slots.header" class="d-flex d-flex_jcc">
            <slot name="header"></slot>
          </h2>
          <slot name="description"></slot>
          <slot name="action"></slot>
        </div>
    </div>
  </div>
</template>

<style scoped>
h2 {
  padding: 1rem;
}

.modal-wrapper {
  position: fixed;
  z-index: 999;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.modal {
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.36);
    padding-top: 7rem;
}

.modal-content {
    padding: 2rem;
    margin: 0 auto;
    border-radius: 8px;  
    width: 320px;
    background: #fff;
}
</style>