import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.use(VueResource)

new Vue({
  el: '#app',
  render: h => h(App),
  data: {
    endpoint: 'https://jsonplaceholder.typicode.com/posts',
    posts: []
  },
  methods: {
    getAllPosts: function() {
      this.$http.get(this.endpoint).then(function(response) {
        console.log(response)
        this.posts = response.data
      }, function(error) {

      })
    }
  },
  created: function() {
    this.getAllPosts()
  }
})
