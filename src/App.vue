<template>
  <button class="hello-button" id="hello-button">Hello World</button>
</template>

<script>
import store from '@/store';

export default {
  name: 'App',
  store,
};
</script>

<style scoped>
.hello-button {
  position: absolute;
  right: 10px;
  bottom: 10px;
}
</style>
