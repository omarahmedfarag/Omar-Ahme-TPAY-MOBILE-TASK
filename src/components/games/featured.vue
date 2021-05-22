<template>
    <div class="featured">
        <div class="banner">
            <img :src='game.thumbnail' alt="">
        </div>
        <div class="game-info">
            <h3>Subway Surferss</h3>
            <span>SYBO Games</span>
            <h5>SURF the urban wave!</h5>
            <h5>DODGE oncoming trains!</h5>
            <p>30K Downloads</p>
            <Button title="MORE INFO" @onClick='viewDestiledPage(game.id)'/>
        </div>
    </div>
</template>


<script>
import Button from "./../UI/button";
export default {
    name:"Featrued",
    components:{
        Button
    },
    props:{
        game:Object
    },
    methods:{
        viewDestiledPage(id){
           this.$router.push({ path: `/detailed/${id}`});
        }
    }
}
</script>


<style  scoped>
.featured
{
    width: 100%;
    height: 200px;
    background-color: rgb(206, 206, 206);
    display: flex;
    margin-bottom: 30px;
    box-shadow: 0 0 10px rgb(185, 185, 185);
    border-radius: 10px;
    overflow: hidden;
}
.banner
{
    width: 55%;
    height: 100%;
    background-color: yellow;
}
.banner img
{
    width: 100%;
    height: 100%;
}
.game-info
{
    box-sizing: border-box;
    height: 100%;
    width: 45%;
    background-color: white;
    padding: 15px 20px;
}
h3
{
    margin: 0;
    font-size: 16px;
    color: rgb(78, 78, 78);
    
}
h5
{
    margin: 0;
    font-size: 12px;
    color: rgb(129, 128, 128);
}
span
{
    margin-bottom: 10px;
    display: block;
}
p
{
    font-size: 13px;
    color: rgb(156, 156, 156);
    margin: 5px 0;
}
@media screen and (min-width: 992px)
{
.banner
{
    width: 70%;
}
.game-info{
    width:30%
}
h3
{
    margin: 0;
    font-size: 20px;
    color: rgb(78, 78, 78);
    
}
h5
{
    margin: 0;
    font-size: 15px;
    color: rgb(129, 128, 128);
}
span
{
    margin-bottom: 10px;
    display: block;
}
p
{
    font-size: 13px;
    color: rgb(156, 156, 156);
    margin: 5px 0;
}
}
</style>