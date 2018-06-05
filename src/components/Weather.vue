<template>
<div class="Weather">

    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"/>
    <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
        <div class="row" v-for="(list,key) in lists" :key='key'>
        <div class="panel panel-info" >
            <div class="panel-heading" style="text-align:center;">
                <h3 class="panel-title">{{list.name}}</h3>
            </div>
            <div class="panel-body">
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <p><b>Location:</b> {{list.coord.lat}}, {{list.coord.lon}} 
                    <br>
                    <b>Pressure:</b> {{list.main.pressure}}
                    <br>
                    <b>Main Weather:</b> {{list.weather[0].main}}
                    </p>
                </div>
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <p><b>Temparature:</b> {{list.main.temp}}
                    <br>
                    <b>Humidity:</b> {{list.main.humidity}}
                    <br>
                    <b>Description: </b>{{list.weather[0].description}}
                    </p>
                    
                </div> 
                <img :src='getImg(list.weather[0].icon)' class="center">           
            </div>
        </div>
        </div>
    </div>
</div>
</template>



<script>
export default {
  name:"Weather",
  props:
      ['placeName']
  ,
  data(){
      return {
          lists:{}
      }
  },
   methods: {
    getImg(name){
      return "http://openweathermap.org/img/w/"+name+".png"
    },
   },
  created(){
      console.log(this.placeName)
      let city = this.placeName
      let APIKEY = '8401c953bf6da750a982308bf17ad82d'
      var url = 'http://api.openweathermap.org/data/2.5/find?q=' + city +'&type=accurate&appid=' + APIKEY + '&units=metric' 
      const axios = require('axios')
      axios.get(url)
        .then((response) => {
            this.lists = response.data.list
            // console.log(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
       
    //   const request = require('request');
    //   request(url, function (err, response, body) {
    //     if(err){
    //       console.log('error:', error);
    //     } else {
    //     //   let weather = JSON.parse(body)
    //     //   this.lists = weather['list']
    //       console.log('weather:', body['list']);
    //     }
    //   });
  }
}
</script>

<style>
.center {
    display: block;
    margin-left: auto;
    margin-right: auto;
    /* width: 50%; */
}
</style>
