<template>
  <div id="app">
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <router-link to="/city" class="navbar-brand"><img style="width: 30px;
  height: 30px;" src="./assets/planelogo.png"></router-link>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><router-link to="/city">Home</router-link></li>
      
      <li v-if="status == 0"><router-link to="/signup">Sign up</router-link></li>
      
      <li v-if="status == 0"><router-link to="/signin">Sign In</router-link></li>
    </ul>
  </div>
</nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      status: 0
    } 
  },
  created(){
    if(firebase.auth().currentUser){
      this.status = 1
    }
    else{
      this.status = 0
    }
    
  }, 
}
</script>

<style scoped>

@import url('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'); 

@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  
  color: #2c3e50;
  /* margin-top: 60px; */
}

/* img {
  width: 30px;
  height: 30px;
  border: 0;
} */


</style>
