<template>

    <div class="wrapper">
        <div class="wrapper-header">
            <span>{{title}}</span>
            <span class="see-all">SEE ALL ></span>
        </div>
        <div class="games">
            <Game v-for="game in games" :key="game" :game='game'/>
        </div>
    </div>

</template>
<script>
import Game from "./game/game";
export default {
    data(){
        return{
            // games:["one","tow","three","Four","Five"]
        }
    },
    name:"Wrapper",
    components:{
        Game
    },
    props:{
        title:String,
        games:[]
    }
}
</script>

<style  scoped>

.wrapper
{
    box-sizing: border-box;
    width: 100%;
    margin-bottom: 25px;
    padding:  15px;
    background-color: white;
}
.wrapper-header
{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}
.see-all
{
    color:#572589 ;
    cursor: pointer;
}
.games
{
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
</style>