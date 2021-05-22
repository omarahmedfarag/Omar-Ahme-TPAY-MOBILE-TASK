<template>
<div class="detailed" v-if="!!detailedGame">
    <div class="detailed-container">
        <div class="detailed-banner">
            <img :src='detailedGame.thumbnail' alt="">
        </div>
        <div class="detailed-info">
            <p class="title">{{detailedGame.title}}</p>
            <p class="sub">SYBO GAME</p>
            <p class="downloads">30k Downloads</p>

            <div class="desc">
                <p>DASH as fast as you can</p>
                <p>DODGE the oncoming trains!</p>
            </div>

                <p class="jack">Help Jack , Tricky & Fresh escape  from ... </p>

            <div class="rate">
                <div>
                    <i class="fas fa-star"></i>
                <span>Colorful and vivid HD graphics!</span>
                </div>
                <div>
                    <i class="fas fa-star"></i>
                <span>Colorful and vivid HD graphics!</span>
                </div>
            </div>

            <p class="read-more">
                Read more
            </p>
            
        </div>
        <Wrapper title="Recommended Games" :games='data'/>
    </div>
</div>
</template>


<script>
import Wrapper from "./games/games-wrapper";
import axios from "axios";
export default {
    name:"Detailed",
    data(){
        return {
            detailedGame:Object,
            data:[]
        }
    },
    props:{
        
    },
    components:{
        Wrapper
    }
    ,watch:{
    '$store.state.data'(){
      this.data= this.$store.state.data.slice(0,5);
    }
  },
    watch:{
        '$route.params.id'(){
         window.scrollTo(0, 0)
            this.detailedGame=this.data.find(el=>{
            return this.$route.params.id==el.id

        }); 

        if(!!!this.detailedGame && this.$route.params.id)
            {
                alert("Don't hard code the id you will be rediret to home page");
                this.$router.push({ path: `/home`});

            }
       
        }
    },
    
    async created(){
       
        setTimeout(() => {
            this.data= this.$store.state.data.slice(0,5);
        this.detailedGame=this.data.find(el=>{
            return this.$route.params.id==el.id
        });
        }, 200);
        
        setTimeout(() => {
           if(!!!this.detailedGame)
            {
                alert("Don't hard code the id you will be rediret to home page");
                this.$router.push({ path: `/home`});

            } 
        }, 2000);
        

        
    }

 
    
}
</script>


<style scoped>
.detailed
{
    width: 100%;
}
.detailed-container
{
    width: 90%;
    margin: auto;
    padding-top: 10px;
}
.detailed-banner
{
    width: 100%;
    height: 200px;
    margin-bottom: 15px;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 0 10px rgb(182, 182, 182);
}
.detailed-banner img
{
    width: 100%;
    height: 100%;
}
.detailed-info
{
    box-sizing: border-box;
    width: 100%;
    height: 250px;
    background-color: rgb(255, 255, 255);
    margin-bottom: 15px;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 0 10px rgb(182, 182, 182);
    padding: 25px 20px;
}
p
{
    padding: 0;
    margin: 0;
    font-size: 12;
}
.title
{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
}
.sub
{
    font-size: 15px;
    margin-top: 8px;
     color: rgb(107, 107, 107);
}

.downloads
{
    font-size: 12px;
    color: rgb(167, 167, 167);
}
.desc
{
    margin: 10px 0;
    font-family: 'Times New Roman', Times, serif;
    color: rgb(107, 107, 107);
}
.jack
{
    margin: 10px 0;
}
i
{
    color: rgb(114, 113, 113);
    transform: scale(0.7);
    margin-right: 5px;
}
.read-more
{
    margin-top: 10px;
    color: blue;
}
@media screen and (min-width: 768px)
{

}
@media screen and (min-width: 992px)
{

}
@media screen and (min-width: 1200px)
{
    .detailed
    {
        width: 100%;
    }
    .detailed-container
    {
        width: 50%;
        margin: auto;
        padding-top: 30px;
    }
    
}
</style>