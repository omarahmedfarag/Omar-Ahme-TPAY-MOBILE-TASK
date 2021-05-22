<template>
    <div class="game">
        <div class="game-img">
            <img :src='game.thumbnail' alt="">
            <div class="badge">
                <i class="fas fa-star"></i>
                4.9
            </div>
        </div>
        <p>{{game.title}}</p>
        <Button :title="'MORE INFO'" @onClick="viewDestiledPage(game.id)"/>
    </div>
</template>

<script>
    import Button from "../../UI/button";
export default {
    name:"Game",
    props:{
        game:Object
    },
    components:{
        Button
    },
    methods:{
        viewDestiledPage(id){
           this.$router.push({ path: `/detailed/${id}`});
        }
    }
    
}
</script>


<style scoped>
.game
{
    box-sizing: border-box;
    height: 250px;
    width: 70%;
    padding: 5px;
}
.game-img
{
    height: 50%;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
}
.game-img img
{
    width: 100%;
    height: 100%;
}
.badge
{
    position: absolute;
    top: 8px;
    left: 8px;
    width: 40%;
    height: 20%;
    border-radius:5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: rgb(255, 255, 255);
    font-size: 12px;
}
.badge i
{
    color: #572589;
    font-size: 12px;
}
p
{
    padding: 0;
    margin: 10px 0;
    color: rgb(95, 94, 94);
}


@media screen and (min-width: 768px)
{
    .game
    {
        width: 48%;
    }
}
@media screen and (min-width: 992px)
{

}
@media screen and (min-width: 1200px)
{
    .game
    {
        width: 20%;
    }
}
</style>