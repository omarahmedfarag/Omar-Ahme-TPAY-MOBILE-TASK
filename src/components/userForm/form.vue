<template>
    <div class="login-form">
        <i class="fas fa-times close-from" @click='$emit("closeFormHandeler")'></i>
        <p>Please add your account details</p>
        <div class="form-group">
            <label for="">username / email <span v-show="error.username">*Required</span></label> 
            <input type="text" v-model="userName" placeholder="TYPE YOUR USER NAME HERE">
        </div>
        <div class="form-group">
            <label for="">Password <span v-show="error.password">*Required</span></label>
            <input type="password" v-model="userPassword" placeholder="TYPE YOUR PASSWORD HERE">
        </div>
        <p class="forget-password">
            Forgot Password ?
        </p>
        <Button :title="'LOGIN'" @onClick="onLogin()"/>
        <p class="sign-up">Don't have an account ? sign up</p>
    </div>
</template>

<script>
    import Button from "../UI/button";
export default {
    data(){
        return {
            userName:"",
            userPassword:"",
            error:{
                username:false,
                password:false
            }
        }
    },
    name:"LoginForm",
    components:{
        Button
    },
    props:{
        reset:false
    },
    methods:{
        onLogin(){
            this.error.username= !this.userName;
            this.error.password= !this.userPassword;
            setTimeout(() => {
                if(!this.error.username && !this.error.password)
                {
                    alert("loged in successfuly");
                    this.userName="";
                    this.userPassword="";
                }
            }, 300);
        }
    },
    watch:{
        reset(){
            console.log("reset form");
            this.userPassword='';
            this.userName="";
            this.error.username=false
            this.error.password=false
        }
    }

}
</script>


<style scoped> 

.login-form
{
    box-sizing: border-box;
    background-color: rgb(255, 255, 255);
    z-index: 10;
    box-shadow: 0 0 10px rgb(134, 134, 134);
    border-radius: 10px;
    padding: 0 15px;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    
}
.close-from
{
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 20px;
    display: block
}
p
{
    color: rgb(201, 200, 200);
}
.form-group
{
    display: flex;
    flex-direction: column;
    margin-top: 25px;
}
.form-group label
{
    margin-bottom: 8px;
    color: rgb(116, 114, 114);
}
.form-group input
{
    border: none;
    border-bottom: 1px solid black;
    outline: none;
}
.form-group input::placeholder
{
    font-size:18px;
}
.form-group input:focus
{
    border: none;
    border-bottom: 1px solid blue;
}
.forget-password
{
    text-align: right;
    color: #572589;
}

.sign-up
{
    color: #572589;
    text-align: center;
    margin-top: 20px;
}
span
{
    color: red;
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
    .login-form{
        position: absolute;
        top: 100%;
        right: 0;
        width: 350px;
        height:350px;
    }
    .close-from
    {
        display: none;
    }
}
@media screen and (min-width: 1200px)
{
    
}
</style>
