<template>
    <div id="app">
        <Navbar/>
        <router-view class="view"></router-view>
    </div>
</template>
<script>
import Navbar from './components/Navbar.vue'

export default {
    name: 'app',
    components: { Navbar }
}
</script>
<style lang="stylus">
@import '~bootstrap/dist/css/bootstrap.css';
@import url('https://fonts.googleapis.com/css?family=Raleway');

html,
body
    background-color rgb(29, 29, 29)
    color #fff

#app
    font-family 'Raleway', sans-serif
    .view
        margin-top 4rem
    .back_btn
        background-color transparent
        color #fff
        border 0
        font-size 1.5rem
        cursor pointer
        outline 0
</style>
