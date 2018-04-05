<template>
    <div class="onstellar_navbar">
        <nav class="navbar navbar-expand-lg">
            <a class="navbar-brand" href="javascript:void(0);">OnStellar</a>
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
                    <li class="nav-item active">
                        <a class="nav-link" href="javascript:void(0);">trending</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0);">new</a>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control" type="search" placeholder="Search">
                    <!-- <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> -->
                </form>
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
    .form-inline,
    .navbar-nav,
    a
        background-color $menu-background-color
        color #fff
    .form-control
        background-color $onstellar-background-color
        padding 0.5rem 2rem
        border 0
    li
        &.nav-item
            width 5rem
            margin 0 1rem
            text-align center
        &.active
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
            &.active
                border-bottom 0
                .nav-link
                    color $teal-color
        .form-control
            width 100%
</style>

