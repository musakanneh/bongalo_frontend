import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

const ifNotAuthenticated = (to, from, next) => {
  if (!window.localStorage.getItem('token')) {
    next()
    return
  }
  next('/')
}
const ifLogout = (to, from, next) => {
  if (window.localStorage.getItem('token')) {
    next()
    return
  }
  next('/')
}

const ifAuthenticated = (to, from, next) => {
  if (window.localStorage.getItem('token')) {
    next()
    return
  }
  next('/')
}

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta:{
      title: 'Vacation Rentals, Homes, Experiences and Places - Bongalo'
    },
  },
  {
    path: '/about', 
    name:"about",
    component: () =>  import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/blog', 
    name:"blog",
    component: () =>  import(/* webpackChunkName: "blog" */ '../views/Blog.vue'),
  },
  {
    path: '/details',
    name: 'details',
    component: () => import(/* webpackChunkName: "detiails" */ '../views/ApartmentDetails.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import(/* webpackChunkName: "detiails" */ '../views/Search.vue')
  },
  {
    path: '/verify',
    name: 'verify',
    component: () => import(/* webpackChunkName: "detiails" */ '../views/Verification.vue')
  },

  {
    path: '/experience',
    name: 'experience',
    component: () => import(/* webpackChunkName: "detiails" */ '../views/Experience.vue')
  },

  {
    path: '/event-details',
    name: 'event_details',
    component: () => import(/* webpackChunkName: "detiails" */ '../views/EventDetails.vue')
  },


  {
    path: '/blog-details',
    name: 'blog_details',
    component: () => import(/* webpackChunkName: "detiails" */ '../views/BlogDetails.vue')
  },

  {
    path: '/terms-condition',
    name: 'terms_condition',
    component: () => import(/* webpackChunkName: "detiails" */ '../views/TermsCondition.vue')
  },

 {
    path: '/career',
    name: 'career',
    component: () => import(/* webpackChunkName: "detiails" */ '../views/Careers.vue')
  },
  
  {
    path: '/apply',
    name: 'apply',
    component: () => import(/* webpackChunkName: "detiails" */ '../views/Apply.vue')
  },

  {
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "detiails" */ '../views/Profile.vue'),
    beforeEnter: ifAuthenticated,
  },

  {
    path: '/become-a-host',
    name: 'listing',
    component: () => import(/* webpackChunkName: "detiails" */ '../views/Listing.vue'),
    beforeEnter: ifAuthenticated,
  }

  
]

const router = new VueRouter({
  routes,
  mode:'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
