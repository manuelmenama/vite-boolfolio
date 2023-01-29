<script>

import axios from 'axios';
import { baseUrl } from '../data/data';


export default {
    name: 'ProjectDetail',
    data(){
        return{
            baseUrl,
            project: {},
            type: {},
            tecnologies: {}
        }
    },
    methods: {
        getApi() {
            axios.get(baseUrl + 'projects/' + this.$route.params.slug)
                .then(result =>{
                    this.project = result.data;
                    this.type = this.project.type;
                    this.tecnologies = this.project.tecnologies;
                    console.log(this.project);
                })
        }
    },
    mounted() {
        this.getApi()
    }
}
</script>

<template>
    <h3>{{ this.project.name }}</h3>
    <h6>Tipo: {{ this.type.name }}</h6>
    <p v-html="this.project.summary">
    </p>
    <img :src="this.project.cover_image" :alt="this.project.image_original_name">
    <div v-if="tecnologies">
        <span v-for="tech in tecnologies" :key="tech.id">{{ tech.name }}</span>
    </div>

</template>

<style lang="scss" scoped>

img{
    width: 400px;
}

span{
    display: inline-block;
    border: 1px solid black;
    background-color: white;
    padding: 0.5rem 1rem;
    margin-right: 1rem;
    border-radius: 0.5rem;
}
    
</style>