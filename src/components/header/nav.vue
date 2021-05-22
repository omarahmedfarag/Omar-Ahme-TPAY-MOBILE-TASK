<template>
    <div class="nav">
        <Logo/>
        <Search :close='closeForm'/>
    </div>
</template>
<script>
    import Logo from "./logo/logo";
    import Search from "./search/search";
export default {
        name:"Nav",
        components:{
            Logo,
            Search,
        },
        props:{
            closeForm:false
        },
        methods:{

        }
    }
</script>

<style scoped>
.nav
{
    box-sizing: border-box;
    padding: 15px 0;
    height: 100%;
    width: 90%;
    margin: auto;
    display: flex;
}

@media screen and (min-width: 768px)
{
    
}
@media screen and (min-width: 992px)
{

}
@media screen and (min-width: 1200px)
{
    .nav
    {
        width: 50%;
    }
}
</style>
