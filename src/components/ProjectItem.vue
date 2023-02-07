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
            Tipo: {{ project.type? project.type.name : 'nd' }} | By: {{ project.user.name }}
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
        align-self: flex-end;
        &:nth-child(1){
            width: 80%;
            text-align: start;
            padding-bottom: 0.4rem;
        }
        &:nth-child(2){
            text-align: center;
            width: 20%;

            font-size: 1rem;
            a{
                text-decoration: none;
                color: black;
                display: inline-block;
                background-color: beige;
                height: 2rem;
                width: 2rem;
                border-radius: 1rem;
                line-height: 2rem;
                box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);

                &:hover,
                &.router-link-active{
                    color: rgb(184, 184, 167);

                }
            }
        }
    }
}
    
</style>