<template>
    <div class="logo">
        <router-link to="/home">
        <img src="@/assets/logo.png" alt="">
        <span>Game Store</span>
        </router-link>
    </div>
</template>
<script>
export default {
        name:"Nav",
        data()
        {
            return({
                img:"../src/assets/logo.png"
            })
        },
        components:{

        },
        props:{

        },
        methods:{

        }
    }
</script>

<style scoped>
.logo
{
    height: 100%;
    width: 28%;
    font-size: 12px ;
    display: flex;
    align-items: center;
    text-decoration: none;
}
a img
{
    width: 30px;
    height: 15px;
}
a
{
    text-decoration: none;
    height: 100%;
    display: flex;
    align-items: center;
    width: 100%;
}
span
{
    font-size: 16px;
}
@media screen and (min-width: 992px)
{
    a
    {
     align-items: flex-start;
    }
    a img
{
    width: 40px;
    height: 25px;
}
}
</style>
