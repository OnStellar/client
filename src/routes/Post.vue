<template>
    <div class="container-fluid">
        <button type="button" class="back_btn" @click="goBack">
            <i class="fas fa-arrow-left"></i>
        </button>
        <h1 class="display-3">Post Page</h1>
        <ul>
            <li>Post Category = {{ $route.params.category }}</li>
            <li>Post Author = {{ $route.params.user }}</li>
            <li>Post Title = {{ $route.params.title }}</li>
        </ul>
    </div>
</template>
<script>
export default {
    methods: {
        goBack() {
            this.$router.go(-1);
        }
    }
}
</script>

