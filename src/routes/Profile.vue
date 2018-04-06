<template>
    <div class="container-fluid">
        <button type="button" class="back_btn" @click="goBack">
            <i class="fas fa-arrow-left"></i>
        </button>
        <h1 class="display-3">Profile Page</h1>
        <ul>
            <li>User = {{ $route.params.user }}</li>
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

