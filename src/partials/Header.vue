
<script>
export default {
  name: 'Header'
}
</script>

<template>

  <header>
    <ul>
      <li>
        <router-link :to="{ name: 'home' }">home</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'projects' }">projects</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'about' }">about</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'contacts' }">contacts</router-link>
      </li>
    </ul>
  </header>
  
</template>

<style lang="scss" scoped>
header{
  height: 100px;
  background-color: rgb(80, 80, 80);

  line-height: 100px;
  margin-bottom: 2rem;
}

ul{
  list-style: none;
  display: flex;

  li{
    margin-left: 2rem;
    a{
      text-decoration: none;
      color: beige;
      text-transform: uppercase;
      
      &:hover,
      &.router-link-active{
        color: rgb(184, 184, 167);

      }
    }
  }
}

</style>