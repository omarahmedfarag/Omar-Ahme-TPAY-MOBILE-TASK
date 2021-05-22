<template>
    <div class="search">
        <div class="search-input">
            <div :class="[['search-toogle'],showSearch ? ['show-search'] : '']">
             <input type="text" placeholder="search for game ">
            </div>
        </div>
        <div class="icons" >
            <div class="icon" @click="showSearchHandeler()"> 
                <i v-show="!showSearch" class="fas fa-search"></i>
                <i v-show="showSearch" class="fas fa-times"></i>
            </div>
            <div class="icon" >
                <i class="fas fa-ellipsis-v" @click="showUserFormHandler()"></i>
                <!-- <LoginForm v-show="close"/> -->
                <LoginForm v-show="showUserForm" :reset='resetForm' @closeFormHandeler='closeForm()'/>
            </div>
        </div>
    </div>
</template>
<script>
    import LoginForm from "../../userForm/form";
export default {
    data(){
        return({
            showSearch:false,
            showUserForm:false,
            resetForm:false
        })
    },
    name:"Search",
    components:{
        LoginForm
    },
    props:{
        close:false
    },
    methods:{

        showSearchHandeler(){
            this.showSearch=!this.showSearch;
        },
        closeForm()
        {
            this.showUserForm=false;
        },
        showUserFormHandler()
        {
            this.resetForm=!this.resetForm;
            this.showUserForm=!this.showUserForm;
        }
    }
    ,
    //watch if the closed props changed to close the user form 
    watch:{
        close(){
            this.showUserForm=false
        }
    }
    
}
</script>

<style scoped>
.search
{
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.search-input
{
    width: 85%;
    height: 100%;
    padding: 0;
    margin: 0;
    position: relative;
}
.search-toogle
{
    box-sizing: border-box;
    height: 100%;
    overflow: hidden;
    width: 0%;
    position: absolute;
    top: 0;
    right: 0;
    transition: 0.5s;
    
}
.show-search
{
    width: 100%;
}
input
{
    margin: 0;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    padding: 0;
    width: 100%;
    padding: 0 10px;
    box-sizing: border-box;
    border: 1px solid rgb(206, 206, 206);
    border-radius: 5px;
    outline: none;
}
input:focus
{
    border: 1px #572589 solid;
}
.icons
{
    width: 15%;
    height: 100%;
    display: flex;
    justify-content: space-around;
}
.icon
{
    width: 45%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.icon i
{
    color: #572589;
    cursor: pointer;
}
</style>
