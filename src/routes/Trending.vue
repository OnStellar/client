<template>
    <div class="container-fluid">
        <div v-if="posts" class="d-flex justify-content-center align-items-center flex-wrap">
            <Post
                v-for="post in posts"
                :key="post.id" 
                :id="post.id"
                :author="post.author"
                :verified="post.verified"
                :channel="post.channel"
                :timePosted="post.timePosted"
                :views="post.views"
                :postPhoto="post.postPhoto"
                :postTitle="post.postTitle"
                :postCategory="post.postCategory"
                :tokens="post.tokens"
                :comments="post.comments"
            />
        </div>
        <div v-else class="d-flex justify-content-center align-items-center">
            No Trending Posts
        </div>
    </div>
</template>
<script>
import Post from '@/components/Post.vue';
import { getTrendingPosts } from '@/apis/trending';

export default {
    data() {
        return {
            loading: true,
            error: null,
            posts: null
        }
    },
    created() {
        getTrendingPosts((err, posts) => {
            this.loading = false;
            if (err) {
                this.error = err;
            } else {
                this.posts = posts;
            }
        });
    },
    components: { Post }
}
</script>
<style lang="stylus" scoped>
.fa-pulse
    font-size 3rem
</style>

