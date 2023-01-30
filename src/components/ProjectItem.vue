<script>

import { shorterText } from '../data/function';

export default {
    name: 'ProjectItem',
    data(){
        return{
            shorterText,
            textMaxLength: 50,
            titleMaxLength: 20
        }
    },
    props: {
        project: Object
    }
}
</script>
<template>

<div
    class="card">
    <div class="data">
        <p>
            Tipo: {{ project.type? project.type.name : 'nd' }} By: {{ project.user.name }}
        </p>
        <p>
        <router-link :to="{name: 'detail', params:{slug: project.slug}}">
            &rarr;        
        </router-link>
        </p>
    </div>
    <h3>{{ shorterText(project.name, titleMaxLength) }}</h3>
    <div v-html="shorterText(project.summary, textMaxLength)">
    </div>
</div>

</template>
<style lang="scss" scoped>

.data{
    display: flex;


    p{
        font-size: 0.65rem;
        display: inline-block;
        width: 50%;
        align-self: flex-end;
        &:nth-child(1){
            text-align: start;
            padding-bottom: 0.4rem;
        }
        &:nth-child(2){
            text-align: end;
            font-size: 1rem;
            a{
                text-decoration: none;
                &:hover,
                &.router-link-active{
                    color: red;
                }
            }
        }
    }
}
    
</style>