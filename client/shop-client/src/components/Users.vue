<template>
<div class="content">
      
    <div class="users" v-for="user in users" :key="user.id">       
        <h1> {{ user.name}} </h1>
        <h5> {{ user.password}} </h5>
    </div>   
</div>
</template>

<script>

import axios from 'axios';

export default {  
    data(){
        return{
            users:[]
        }
    },
    //https://cors-anywhere.herokuapp.com/
    async created(){
        try{
            const res = await axios.get('http://localhost:3000/users');
            console.log(res.data);
            this.users = res.data;

        } catch (e){
            console.error(e);
            console.log('errrooo!')
        }

    }
 
}
</script>


<style scoped>

.content{
  display: flex;
  flex-wrap: wrap;
  height: auto;
  padding: 50px;
  background: -webkit-linear-gradient(top, #112359 1%,#2989d8 27%,#2cd4ea 50%,#2cd4ea 65%,#2cd4ea 65%,#207cca 100%,#7db9e8 100%);
}
.users{
   flex-grow: 1;
   flex-basis: 300px;
   border: thick solid #3b3b74;
   border-radius: 25px;
   box-shadow: 5px 5px #201f1f;
   margin: 15px;
   padding:15px;
   height: auto;
   background-color:  #3b3b74;
   color: white;
  
}

.users h1{
    color:white;
    background-color:  #3b3b74;
    padding: 15px;
}

.users h1:hover{
	color: greenyellow;
    cursor: pointer;
}
</style>
