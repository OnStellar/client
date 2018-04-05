<template>
    <div class="onstellar_post">
        <div class="onstellar_post_header">
            <div class="post_type">OnStellar</div>
            <div class="post_author d-flex align-items-center">
                <i class="fas fa-user-circle"></i>
                <a
                    class="post_author_link ml-3 mr-1"
                    href="javascript:void(0);"
                >@jeff</a><i class="far fa-check-circle"></i>
            </div>
            <div class="post_data d-flex flex-row align-items-center justify-content-between">
                <div class="post_time">
                    <i class="far fa-clock"></i>
                    <span>55 minutes</span>
                </div>
                <div class="post_views">
                    <i class="fas fa-eye"></i>
                    <span>999M</span>
                </div>
                <div
                    class="btn-group"
                    role="group"
                    aria-label="Post Functions"
                >
                    <button type="button" class="btn btn-secondary">
                        <i class="fas fa-share-alt"></i>
                    </button>
                    <button type="button" class="btn btn-secondary">
                        <i class="fas fa-star"></i>
                    </button>
                </div>
            </div>
        </div>
        <div class="onstellar_post_body"></div>
        <div class="onstellar_post_footer"></div>
    </div>
</template>
<style lang="stylus" scoped>
$teal-color = rgb(11, 197, 182)
$menu-background-color = rgb(19, 19, 19)
$onstellar-background-color = rgb(29, 29, 29)
$post-background-color = rgb(51, 51, 51)
$lg-screen = 992px

.onstellar_post
    width 20rem
    margin 0.5rem
    padding 1rem
    .onstellar_post_header
        background-color $post-background-color
        .post_type
            text-align right
            font-size 0.8rem
            text-transform uppercase
        .post_author
            .fa-user-circle
                width 50px
                height auto
            .post_author_link
                text-decoration none
                color $teal-color
</style>

