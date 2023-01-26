<script>

import axios from 'axios';

export default {
  name: 'App',
  data(){
    return {
      baseUrl: 'http://127.0.0.1:8000/api/',
      projects: [],
      contentMaxLengt: 150
    }
  },
  methods:{
    getApi(){
      axios.get(this.baseUrl + 'projects')
        .then(result => {
          this.projects = result.data.projects;
          console.log(this.projects);
        })
    },
    shorterText(text){
      if(text.length < this.contentMaxLengt){
        return text.substring(0, this.contentMaxLengt) + '...';
      }
      return text;
    }
  },
  mounted(){
    this.getApi();
  }
}
</script>

<template>
  <div class="container">

    <h1>Chiamata axios from vue</h1>

    <div class="card-wrapper">

      <div
        class="card"
        v-for="project in projects"
        :key="project.id">
        <h3>{{ project.name }}</h3>
        <div v-html="shorterText(project.summary)">
        </div>
      </div>

    </div>

  </div>
  
</template>


<style lang="scss">

@use './styles/general.scss';

</style>
