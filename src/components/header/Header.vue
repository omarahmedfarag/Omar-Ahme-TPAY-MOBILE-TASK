<template>
    <div class="header">
        <Nav :closeForm='close' />
        <!-- <Category/> -->
    </div>
</template>


<script>
    import Nav from "./nav";
    
    export default {
        name:"Header",
        components:{
            Nav,
        },
        props:{
            close:false
        },
        methods:{

        }
    }

</script>



<style scoped>
.header
{
    width:100%;
    height: 60px;
    background-color: rgb(255, 255, 255);
    /* box-shadow: 0 3px 5px rgb(133, 133, 133); */
}


</style>
