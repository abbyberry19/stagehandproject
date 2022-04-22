<template>
  <v-container class="h-screen">
    <v-row no-gutters cols="12">
      <NavDrawer />
      <v-col sm="6" md="8">
        <v-card theme="light" class="pa-2 rounded-xl" flat>
          <h1 class="title text-h5 mt-2 ml-4">NewsFeed</h1>
          <v-btn variant="plain">Newest</v-btn>
          <v-btn variant="plain">Oldest</v-btn>
        </v-card>
      </v-col>
      <v-col md="4">
        <v-card theme="light" class="pa-2 ml-4 rounded-xl" flat>
          <h1 class="title text-h5 mt-2 ml-4">Chat</h1>
          <v-btn variant="plain">Newest</v-btn>
          <v-btn variant="plain">Oldest</v-btn>
          
          <PostForm />

          <div v-for="post in posts" :key="post">
            <p>
              <span
                ><b>{{ post.title }}</b></span
              ><br />
              <span>{{ post.description }}</span>
            </p>
          </div> 
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import NavDrawer from "./ui/NavDrawer.vue";
import PostsService from '@/services/PostsService'
import PostForm from "./ui/PostForm.vue"

export default {
  name: "DashboardView",
  components: {
    NavDrawer,
    PostForm,
  },
   data () {
    return {
      posts: []
    }
  },
  mounted () {
    this.getPosts()
  },
  methods: {
    async getPosts () {
      const response = await PostsService.fetchPosts()
      this.posts = response.data
    }
  },
};
</script>
