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
    <h3>{{ shorterText(project.name, titleMaxLength) }}</h3>
    <div v-html="shorterText(project.summary, textMaxLength)">
    </div>
</div>

</template>
<style lang="scss">
    
</style>