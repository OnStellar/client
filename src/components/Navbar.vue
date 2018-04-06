<template>
    <div class="onstellar_navbar">
        <nav class="navbar fixed-top navbar-expand-lg">
            <router-link class="navbar-brand" to="/" exact>OnStellar</router-link>
            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#onstellar_navbar_menu"
                aria-controls="onstellar_navbar_menu"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="onstellar_navbar_menu">
                <ul class="navbar-nav mt-2 mt-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/trending">trending</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/created">new</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>
<style lang="stylus" scoped>
$teal-color = rgb(11, 197, 182)
$menu-background-color = rgb(19, 19, 19)
$onstellar-background-color = rgb(29, 29, 29)
$lg-screen = 992px

.navbar,
#onstellar_navbar_menu,
.nav-item,
.navbar-nav,
a
    background-color $menu-background-color
    color #fff
li
    &.nav-item
        width 5rem
        margin 0 1rem
        text-align center
    a:hover
        text-decoration none
    a.router-link-active
        border-bottom 4px solid $teal-color
button.navbar-toggler
    outline none
    .fa-bars
        color $teal-color

@media screen and (max-width: $lg-screen)
    li
        &.nav-item
            width 100%
            margin 0
            text-align left
        a.router-link-active
            border-bottom 0
            color $teal-color
</style>

