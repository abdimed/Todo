import './bootstrap';

import { createApp } from 'vue'

import Tasks from './components/Tasks.vue'

createApp({})
    .component('Tasks', Tasks)
    .mount('#app')
