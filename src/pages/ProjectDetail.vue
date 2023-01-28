<script>

import axios from 'axios';
import { baseUrl } from '../data/data';


export default {
    name: 'ProjectDetail',
    data(){
        return{
            baseUrl,
            project: null
        }
    },
    methods: {
        getApi() {
            axios.get(baseUrl + 'projects/' + this.$route.params.slug)
                .then(result =>{
                    this.project = result.data;
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
    <h3>{{ project.name }}</h3>
    <h6>Tipo: {{ project.type.name }}</h6>
    <p>
        {{ project.summary }}
    </p>

</template>

<style lang="scss">
    
</style>