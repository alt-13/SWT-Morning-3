import Vue from 'vue'
import Router from 'vue-router'

import Overview from './views/Overview.vue'
import CreateNote from './views/CreateNote.vue'
import EditNote from './views/EditNote.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Overview },
    { path: '/new', component: CreateNote },
    { path: '/edit/:id', component: EditNote }
  ]
})
