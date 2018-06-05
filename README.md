# practice

> A Vue.js project with firebase

### preparing
- Node.js, Vue.js, Webpack
- genarate config keys on firebase.com 
- insert data in firebase
```
{ "city": 
    {"c1": "image" :"fl.png", "detail": "", "name" : ""},
    {"c2": "image" :"oh.png", "detail": "", "name" : ""},
    {"c3": "image" :"ny.png", "detail": "", "name" : ""},
}
```
- create config/ folder and config-firebase.js and then inserts your config key.
``` 
module.exports = {
        apiKey: "...",
        authDomain: "...",
        databaseURL: "...",
        projectId: "...",
        storageBucket: "...",
        messagingSenderId: "..."
}   
``` 

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
