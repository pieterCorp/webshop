<template>
<div>  
  <App-header/>
  <Users/>
  <!--<Testcompo :message="msg"/>-->
  <App-footer/>
</div>
</template>

<script>

//import Testcompo from './components/testcomp.vue'
import AppHeader from './components/Header.vue'
import AppFooter from './components/Footer.vue'
import Users from './components/Users.vue'

export default {
  name: 'App',
  components: {   
    //Testcompo,
    AppHeader,
    AppFooter,
    Users
  },
  data(){
    return{
      msg: "dit is een propstest"
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; 
}
</style>
