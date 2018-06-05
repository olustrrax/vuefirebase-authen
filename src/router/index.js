import Vue from 'vue'
import Router from 'vue-router'
import CityList from '@/components/CityList'
import SignIn from '@/components/SignIn'
import SignUp from '@/components/SignUp'
import Weather from '@/components/Weather'
Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/signin'
    },
    {
      path: '*',
      redirect: '/signin'
    },
    {
      path: '/city',
      name: 'CityList',
      component: CityList,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'Signup',
      component: SignUp
    },
    {
      path: '/weather/:placeName',
      name: 'Weather',
      props: true,
      component: Weather,
      meta: {
        requiresAuth: true
      }
    },
  ]
})
router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth && !currentUser) {
    next('signin')
  } else if (!requiresAuth && currentUser) {
    next('city')
  } else if (!requiresAuth && currentUser) {
    next('weather/:placeName')
  } else {
    next()
  }
})

export default router
