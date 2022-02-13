<template>
  <div class="page">
    <Header />
    <div class="main__container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
//@ = src
import Header from '@/components/Header.vue'
export default {
  name: 'App',
  components: { Header }
}
</script>
