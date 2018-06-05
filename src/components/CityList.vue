<template>
  <div class="citylist" style="text-align:center;">
    <h4>{{ msg }}</h4>

    <br>
    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"/>
    <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">

    <div class="panel panel-info" >
      <div class="panel-heading">
        <h3 class="panel-title">List of city</h3>
      </div>
      <div class="panel-body">
        <div class="row">
          <ul>
            <li v-for="(city,key) in cities" :key='key'>
              <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div class="card" >
                  <img  :src='getImg(city.image)'>
                  <div class="card-body">
                    <p><b>{{city.name}}</b></p>
                    <p class="card-text">{{city.detail}}</p>
                  </div>
                  
                    <router-link :to="{ path: '/weather/'+city.name, params: {placeName: city.name } }" >
                     <button class="btn btn-success">
                      Detail
                      </button>
                    </router-link>
                  
                  
                </div>
              </div> <router-view/>
                <br>
            </li>
          </ul>
        </div>
      </div>
    </div>
    
    </div>

    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"/>
    <br><br><br>
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <button @click="logout" class="btn btn-default"><span class="glyphicon glyphicon-log-out"></span> Logout</button>
    </div>
    <br><br><br>
  </div>

</template>


<script>
export default {
  name: 'CityList',
  data () {
    return {
      msg: 'EGCO427 Practice',
      cities: {},
      image:[],
      showmodal: false
    }
  },
  created () {
    console.log('start')
    firebase.database().ref('city').on('value',(snapshot) => {
      snapshot.forEach(function (snapshot) {
        var obj = snapshot.val();     
        // console.log(obj);           
       })
       
      this.cities = snapshot.val()
    })
  },
  methods: {
    getImg(name){
      return require("../assets/"+name)
    },
    logout () {
      firebase.auth().signOut()
        .then(() => {
          this.$router.replace('/signin')
        })
        .catch((e) => {
          alert(e.message)
        })
    }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#ciylist{
  text-align: center;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  /* display: inline-block; */
  margin: 0 10px;
}
a {
  color: #42b983;
}
img {
  width: 200px;
  height: 200px;
  border: 0;
}
</style>
