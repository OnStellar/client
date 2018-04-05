<template>
    <div id="app">
        <Navbar/>
        <!-- <div class="d-flex justify-content-center align-items-center">
            <Post/>
        </div> -->
    </div>
</template>
<script>
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue'
import Post from './components/Post.vue'

export default {
    name: 'app',
    components: {
        HelloWorld,
        Navbar,
        Post
    }
}
</script>
<style lang="stylus">
@import '~bootstrap/dist/css/bootstrap.css';
@import url('https://fonts.googleapis.com/css?family=Raleway');
*,
html,
body
    background-color rgb(29, 29, 29)
    color #fff

#app
    font-family 'Raleway', sans-serif
</style>
