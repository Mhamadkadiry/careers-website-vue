<template>
  <MainNav />
  <HeroBanner />
</template>
<script>
import MainNav from '@/components/Navigation/MainNav.vue'
import HeroBanner from './components/HeroBanner.vue';
export default {
  name: 'App',
  components: {
    MainNav,
    HeroBanner
}
}
</script>
