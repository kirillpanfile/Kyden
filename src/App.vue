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
  components: { Header },
  data() {
    return {
      clothes: [
        {
          name: 'KYDEN NARUTO',
          price: '22.50',
          raiting: '4.6',
          img: '1'
        },
        {
          name: 'KYDEN ACDC',
          price: '25.50',
          raiting: '4.9',
          img: '2'
        },
        {
          name: 'KYDEN PNCLUB',
          price: '18.00',
          raiting: '4.8',
          img: '3'
        },
        {
          name: 'KYDEN MOD',
          price: '25.90',
          raiting: '5',
          img: '4'
        }
      ]
    }
  },
  provide() {
    return { clothes: this.clothes }
  }
}
</script>
