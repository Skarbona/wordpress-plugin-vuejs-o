import Vue from 'vue'
import App from './App.vue'
import App2 from './App2.vue'
import Cookie from './Cookie.vue'
import store from './store/store'


new Vue({
    el: '#app',
    store: store,
    render: h => h(App)
});


new Vue({
    el: '#app2',
    store: store,
    render: h => h(App2)
});

new Vue({
    el: '#cookieInfo',
    render: h => h(Cookie)
});

