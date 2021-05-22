
<template>
<Carousel :settings="settings" :breakpoints="breakpoints">
    <Slide v-for="cat in categories" :key="cat">
        <div   
            :class="['each-cat', cat.selected ? 'selected' : '']"
            @click="selectCat(cat.id)"
            v-bind:key="cat.id">
                {{cat.type}}

                <div v-show="cat.selected" class="category-close" @click.stop="removeSelection(cat.id)">
                    <i class="fas fa-times"></i>
                </div>
            </div >
    </Slide>


  </Carousel>
     
    <!-- <div  class="category" >
            <div  v-for="cat in categories" 
            :class="['each-cat', cat.selected ? 'selected' : '']"
            @click="selectCat(cat.id)"
            v-bind:key="cat.id">
                {{cat.type}}

                <div v-show="cat.selected" class="category-close" @click.stop="removeSelection(cat.id)">
                    <i class="fas fa-times"></i>
                </div>
            </div >
    </div > -->
    
</template>
<script>
    import { Carousel, Navigation, Slide } from 'vue3-carousel';
    import 'vue3-carousel/dist/carousel.css';
export default {
    data(){
        return({
            categories:[
                 {id:"1",type:"Action",selected:false},
                {id:"2",type:"Advanture",selected:false},
                {id:"3",type:"Action",selected:false},
                {id:"4",type:"Arcade",selected:false},
                {id:"5",type:"Sports",selected:true},
                {id:"6",type:"Action",selected:false},
                {id:"7",type:"Advanture",selected:false},
                {id:"8",type:"Sports",selected:false},
                {id:"9",type:"Action",selected:false},
                {id:"10",type:"Advanture",selected:false},
                {id:"11",type:"Sports",selected:false},
                {id:"12",type:"Action",selected:false},
                {id:"13",type:"Advanture",selected:false},
                {id:"14",type:"Sports",selected:false},
                {id:"15",type:"Action",selected:false},
                {id:"16",type:"Advanture",selected:false},
                {id:"17",type:"Sports",selected:false},
                {id:"18",type:"Action",selected:false},
                ],
            isCategorySelected:false,
                        settings: {
                        itemsToShow: 3,
                        snapAlign: 'center',
                        },
                        // breakpoints are mobile first
                        // any settings not specified will fallback to the carousel settings
                        breakpoints: {
                        // 700px and up
                        700: {
                            itemsToShow: 3.5,
                            snapAlign: 'center',
                        },
                        // 1024 and up
                        1024: {
                            itemsToShow: 9,
                            snapAlign: 'start',
                        },
                        }
        })
    },
    name:"Category",
    components:{
        Carousel,
          Slide,
          Navigation
    },
    props:{

    },
    methods:{
        selectCat(id){

            let selected='value';
            this.categories=this.categories.map(el=>{
                if(id===el.id)
                {
                    selected =el;
                    return {...el,selected:true}
                }
                return {...el,selected:false}
            })
            this.$emit('onCategorySelected',selected);
        },
        removeSelection(id)
        {
                this.isCategorySelected=false;
                this.categories=this.categories.map(el=>{
                
                return id===el.id ? {...el,selected:false}:{...el};
            })
            this.$emit('onCategorySelected','');
        }
    }
}
</script>

<style scoped>
.carousel
{
    border-top: 1px solid rgb(207, 207, 207);
    background-color: white;
    padding: 5px 0;
}
.carousel__slide
{
    padding: 5px 0;
}
.category
{
    background-color: tomato;
    border-top: 1px solid rgb(153, 153, 153);
    height: 40px;
    background-color: rgb(255, 255, 255);
    display: flex;
    overflow: auto;
    align-items: center;
    -ms-overflow-style: none;  
    scrollbar-width: none;  
}
.category::-webkit-scrollbar {
  display: none;
}
.slide
{
    background-color: black;
}
.each-cat
{
    box-sizing: border-box;
    height: 100%;
    border-radius: 20px;
    border: 1px #572589 solid;
    color: #572589;
    font-weight: bold;
    padding: 5px 20px;
    margin-right: 13px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    background-color: white;
} 

.category-close
{
    position: absolute;
    width: 20px;
    height: 20px;
    top: -5px;
    right: -5px;
    border-radius: 50%;
    color: white;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
}
.selected
{
    background-color: #572589;
    color: white;
}
</style>
