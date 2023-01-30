<script>

import axios from 'axios';

import { baseUrl } from '../data/data';

import { store } from '../data/store';

export default {
  name: 'FormSearch',
  data(){
    return{
      searched: '',
      baseUrl,
      store
    }
  },
  methods:{
    getApi(){

      // const data = new FormData();
      // data.append('searched',this.searched);

      axios.get(this.baseUrl + 'projects/search',{
        params:{
          searched: this.searched
        }
      })
        .then(result =>{
          this.searched = '';
          store.projects = result.data.searched_project;
          console.log(store.projects);
          store.showPaginator = false;

        })
    }
  }
}
</script>

<template>


  <div class="search">
    <input v-model.trim="searched" @keyup.enter="getApi()" type="text" placeholder="Cerca per titolo"> <button @click="getApi()">Cerca</button>
  </div>
  
</template>


<style lang="scss" scoped>

.search{
  margin: 20px 0;
}
input{
  padding: 10px 5px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: blanchedalmond;
}
button{
  cursor: pointer;
  padding: 10px 5px;
  border: 1px solid black;

  border-radius: 5px;
  background-color: blanchedalmond;
}


</style>