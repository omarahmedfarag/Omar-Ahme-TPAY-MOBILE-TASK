<template>
    <button @click="$emit('onClick')">{{title}}</button>
</template>

<script>
export default {
    name:"Button",
    props:{
        title:String
    }
    
}
</script>


<style scoped>
button
{
    width: 100%;
    border: none;
    padding: 8px 0;
    cursor: pointer;
    background-color: #572589;
    color: white;
}
</style>