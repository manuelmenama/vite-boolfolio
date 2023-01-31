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
  width: 100%;
  display: flex;
  justify-content: space-between;
}
input{
  width: calc(80% - 1rem);
  padding: 10px 5px;
  border-radius: 5px;
  background-color: beige;
  border: 0;
  box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.5);
}
button{
  width: calc(20%);
  cursor: pointer;
  padding: 10px 5px;
  border: 0;
  border-radius: 5px;
  background-color: beige;
}


</style>