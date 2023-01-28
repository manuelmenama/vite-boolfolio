
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



ul{
  list-style: none;
  display: flex;

  li{
    margin-left: 2rem;
    a{
      text-decoration: none;
      color: black;
      text-transform: uppercase;
      
      &:hover,
      &.router-link-active{
        color: gray;
      }
    }
  }
}

</style>