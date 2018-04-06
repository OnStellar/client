<template>
    <div class="onstellar_post">
        <div class="onstellar_post_header">
            <div class="post_type">{{ channel }}</div>
            <div class="post_author d-flex align-items-center">
                <i class="fas fa-user-circle"></i>
                <router-link
                    class="post_author_link ml-3 mr-1"
                    :to="'/@' + author"
                >@{{ author }}</router-link><i v-if="verified" class="far fa-check-circle"></i>
            </div>
            <div class="post_data d-flex flex-row align-items-center justify-content-between">
                <div class="post_time">
                    <i class="far fa-clock"></i>
                    <span>{{ timePosted }}</span>
                </div>
                <div class="post_views">
                    <i class="fas fa-eye"></i>
                    <span>{{ views }}</span>
                </div>
                <button type="button" class="post_btn">
                    <i class="fas fa-share-alt"></i>
                </button>
                <button type="button" class="post_btn">
                    <i class="fas fa-star"></i>
                </button>
            </div>
        </div>
        <div class="onstellar_post_body">
            <img
                :src="postPhoto"
                class="post_photo"
                alt="Featured Photo"
                @click="navigatePost(buildPostURL())"
            >
            <div class="content">
                <strong class="post_title">{{ postTitle }}</strong>
                <p class="post_category">{{ postCategory }}</p>
            </div>
        </div>
        <div class="onstellar_post_footer d-flex flex-row align-items-center justify-content-between">
            <div class="post_tokens d-flex flex-row align-items-center">
                <i class="fas fa-angle-up"></i>
                <span class="ml-2">${{ tokens.toFixed(2) }}</span>
            </div>
            <div class="post_comments d-flex flex-row align-items-center">
                <i class="fas fa-comment"></i>
                <span class="ml-2">{{ comments }}</span>
            </div>
            <div class="post_broadcast">
                <button type="button" class="post_btn">
                    <i class="fas fa-share"></i>
                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        id: {
            type: [String, Number],
            required: true
        },
        author: {
            type: String,
            required: true
        },
        verified: {
            type: Boolean,
            required: true
        },
        channel: {
            type: String,
            required: true
        },
        timePosted: {
            type: String,
            required: true
        },
        views: {
            type: [String, Number],
            required: true
        },
        postPhoto: {
            type: String,
            required: true
        },
        postTitle: {
            type: String,
            required: true
        },
        postCategory: {
            type: String,
            required: true
        },
        tokens: {
            type: [String, Number],
            required: true
        },
        comments: {
            type: [String, Number],
            required: true
        }
    },
    methods: {
        navigatePost(route) {
            this.$router.push(route);
        },
        buildPostURL() {
            let urlString = '/';
            urlString += this.postCategory.toLowerCase() + '/';
            urlString += '@' + this.author + '/';
            urlString += this.spinalCase(this.postTitle)
            return urlString;
        },
        spinalCase(text) {
            return typeof text === 'string' ? text.replace(/\s/g, '-').toLowerCase() : text;
        }
    }
}
</script>
<style lang="stylus" scoped>
$teal-color = rgb(11, 197, 182)
$menu-background-color = rgb(19, 19, 19)
$onstellar-background-color = rgb(29, 29, 29)
$post-background-color = rgb(51, 51, 51)
$post-data-color = rgb(44, 44, 44)
$post-data-text-color = rgb(121, 121, 121)
$lg-screen = 992px

.onstellar_post
    width 375px
    margin 0.5rem
    background-color $post-background-color
    border-radius 0.5rem
    .post_btn
        margin 1rem
        cursor pointer
        font-size 1.2rem
        background-color transparent
        color $post-data-text-color
        border 0
        outline 0
        transition 0.5s
        &:hover
            color $teal-color
    .fa-clock,
    .fa-eye,
    .fa-comment,
    .fa-angle-up
        font-size 1.2rem
        color $post-data-text-color
    .post_tokens,
    .post_comments
        cursor pointer
        .fa-comment,
        .fa-angle-up,
        span
            transition 0.5s
        &:hover
            .fa-comment,
            .fa-angle-up,
            span
                color $teal-color
    .onstellar_post_header
        .post_type
            text-align right
            font-size 0.8rem
            text-transform uppercase
            margin 1rem 1rem 0 0
        .post_author
            margin-bottom 1rem
            .fa-user-circle
                width 50px
                height auto
                margin-left 1rem
            .post_author_link
                text-decoration none
                color $teal-color
                font-size 1.2rem
        .post_data
            background-color $post-data-color
            color $post-data-text-color
            .post_time,
            .post_views
                padding 1rem
                display flex
                align-items center
                span
                    margin-left 0.5rem
                    color #fff
    .onstellar_post_body
        &:hover
            cursor pointer
        .post_photo
            height 250px
            width 100%
        .content
            margin 1rem
            .post_title
                font-weight bold
            .post_category
                text-transform uppercase
                font-size 0.8rem
                color $post-data-text-color
    .onstellar_post_footer
        background-color $post-data-color
        border-bottom-left-radius 0.5rem
        border-bottom-right-radius 0.5rem
        .post_tokens,
        .post_comments
            padding 1rem
@media screen and (max-width: 992px)
    .onstellar_post
        width 100%
        border-radius 0
        .onstellar_post_body
            .post_photo
                height auto
                width 100%
        .onstellar_post_footer
            border-bottom-left-radius 0
            border-bottom-right-radius 0
        .post_btn
            margin 0.5rem
        .fa-clock,
        .fa-eye,
        .fa-comment,
        .fa-angle-up
            font-size 1rem
        span
            font-size 0.8rem
</style>

