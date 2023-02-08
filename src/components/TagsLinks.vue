<script>

import { store } from '../data/store';

import { baseUrl } from '../data/data';

import axios from 'axios';

export default {
  name: 'TagsLinks',
  data() {
    return{
      store,
      baseUrl
    }
  },
  methods:{
    getApiByType(type_id){
      axios.get(baseUrl + 'projects/project-type/' + type_id)
        .then(result =>{
          store.projects = result.data.projects.data;
          store.pageLinks = result.data.projects.links;
          store.currentPage = result.data.projects.current_page;
        })
    },
    getApiByTecnology(tecnology_id){
      axios.get(baseUrl + 'projects/project-tecnology/' + tecnology_id)
        .then(result =>{
          store.projects = result.data.projects.data;
          store.pageLinks = result.data.projects.links;
          store.currentPage = result.data.projects.current_page;
        })
    }
  }
}
</script>

<template>
  <div class="ul-container">

    <div class="my-type">

      <p>Type:</p>
      <button v-for="(type) in store.types" :key="'type'+type.id" @click="getApiByType(type.id)">{{ type.name }}</button>
    </div>
    <div class="my-type">

      <p>Tecnology:</p>
      <button v-for="(tecnology) in store.tecnologies" :key="'tec'+tecnology.id" @click="getApiByTecnology(tecnology.id)">{{ tecnology.name }}</button>
    </div>
    

  </div>
</template>


<style lang="scss" scoped>

.ul-container{
  display: flex;
  height: 100%;
  padding-left: 5px;
  align-items: center;
  p{
    font-size: 0.7rem;
  }
  & .my-type:first-child{
    border-right: 1px solid black;
  }
  & .my-type:last-child{
    margin-left: 0.5rem;
  }

}

button{

  color: black;
  border: 0;
  background-color: beige;
  margin: 0.2rem .5rem;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.6rem;
  font-weight: bold;
  cursor: pointer;
  &:hover,
  &.active{
    color: gray;
  }
}


</style>