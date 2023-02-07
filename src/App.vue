<script>

import Header from './partials/Header.vue';
import Footer from './partials/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<template>

  <Header />
  <main>
  
    <div class="container">

      <router-view></router-view>
    </div>
    
  </main>

  <Footer />
  

</template>


<style lang="scss">
@use './styles/general.scss';
</style>