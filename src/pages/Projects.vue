<script>

import axios from 'axios';

import { baseUrl } from '../data/data';

import { store } from '../data/store';

import ProjectItem from '../components/ProjectItem.vue';
import FormSearch from '../components/FormSearch.vue';
import TagsLinks from '../components/TagsLinks.vue';
import Loader from '../components/Loader.vue';

export default {
  name: 'Projects',
  components: {
    ProjectItem,
    FormSearch,
    TagsLinks,
    Loader
  },
  data(){
    return {
      baseUrl,
      store,
      contentMaxLengt: 50,
      titleMaxLength: 20,
      pagination: {
        current: 1,
        last: null
      }
    }
  },
  methods:{
    getApi(pageNumber){

      this.pagination.current = pageNumber;
      axios.get(this.baseUrl + 'projects',{
        params: {
            page: this.pagination.current
        }
      })
        .then(result => {

          store.isLoading = true;

          store.projects = result.data.projects.data;
          store.types = result.data.types;
          store.tecnologies = result.data.tecnologies;
          store.pageLinks = result.data.projects.links;
          store.currentPage = result.data.projects.current_page;
          this.pagination.current = result.data.projects.current_page;
          this.pagination.last = result.data.projects.last_page;

          store.isLoading = false;

        })
    },
    getApiPage(newApiUrl){
      axios.get(newApiUrl)
        .then(result => {
          
          store.isLoading = true;

          store.projects = result.data.projects.data;
          store.pageLinks = result.data.projects.links;
          store.currentPage = result.data.projects.current_page;
          
          store.isLoading = false;

        })
    }
  },
  mounted(){
    this.getApi(1);
  }
}
</script>

<template>

    <div class="top-main">
      <div class="form-container">

        <FormSearch />

      </div>
      <div class="link-container">

        <TagsLinks />

      </div>
    </div>

    <div v-if="store.isLoading" class="loader-container">

      <Loader />

    </div>

    <div v-if="!store.isLoading" class="card-wrapper">



        <ProjectItem
            v-for="project in store.projects"
            :key="project.id"
            :project="project"        
        />

    </div>

    <div v-if="!store.isLoading" class="paginator">
        <button
            v-for="(link, index) in store.pageLinks"
            :key="index"
            :class="{active : !link.url || store.currentPage == link.label}"
            @click="getApiPage(link.url)">
            <p v-html="link.label"></p>
        </button>
    </div>
  


</template>


<style lang="scss" scoped>

.loader-container{
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
}

button{

  cursor: pointer;
  background-color: beige;
  margin-right: 0.5rem;
  border: 0;
  border-radius: 5px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  &.active{

    box-shadow: none;
    color: gray;
  }

}

.top-main{
  width: 100%;
  display: flex;
  .form-container{
    width: 25%;
    border-right: 1px solid black;
  }
  .link-container{
    width: 75%;
  }
}


</style>