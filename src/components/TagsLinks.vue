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
    getApi(type_id){
      axios.get(baseUrl + 'projects/project-type/' + type_id)
        .then(result =>)
    }
  }
}
</script>

<template>
  <div class="ul-container">

    <div class="my-type">

      <p>Type:</p>
      <button v-for="(type) in store.types" :key="type.id">{{ type.name }}</button>
    </div>
    <div class="my-type">

      <p>Tecnology:</p>
      <button v-for="(type) in store.types" :key="type.id">{{ type.name }}</button>
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
  & p:first-child{
    margin: 0 1rem;
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